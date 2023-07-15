//Variable needed
const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const count = document.getElementById("count");
const category = document.getElementById("category");
const createBtn = document.getElementById("create");
const search = document.getElementById("search");
const searchTitleBtn = document.getElementById("searchTitle");
const searchCategoryBtn = document.getElementById("searchCategory");
const deleteAllBtn = document.getElementById("deleteAll");
const updateBtn = document.getElementById("update");
const deleteBtn = document.getElementById("delete");
const tableBody = document.getElementById("tableBody");

let mood = "create";
let theElementIndex;

// Get total
const getTotal = () => {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.textContent = result;
    total.style.backgroundColor = "#040";
  } else {
    total.textContent = "";
    total.style.backgroundColor = "#b10000";
  }
};

// Create Data
let productData;
// productData =
//   localStorage.theProduct !== null ? JSON.parse(localStorage.theProduct) : [];

if (localStorage.theProduct != null) {
  productData = JSON.parse(localStorage.theProduct);
} else {
  productData = [];
}

// Create Data
createBtn.onclick = () => {
  const newProduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.textContent,
    category: category.value,
    count: count.value,
  };
  // Count (Make more then one product)
  if (mood === "create") {
    if (newProduct.count > 1) {
      for (let i = 0; i < newProduct.count; i++) {
        productData.push(newProduct);
      }
    } else {
      productData.push(newProduct);
    }
  } else {
    productData[theElementIndex] = newProduct;
    count.style.display = "block";
    mood = "create";
    createBtn.textContent = "Create";
  }

  localStorage.setItem("theProduct", JSON.stringify(productData));

  // console.log(productData);
  total.style.backgroundColor = "#b10000";
  clearInputs();
  showData();
};

// Clear Inputs
const clearInputs = () => {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.textContent = "";
  count.value = "";
  category.value = "";
};

// Read Data

const showData = () => {
  let table = "";
  for (let i = 0; i < productData.length; i++) {
    table += `
  <tr>
  <td>${i + 1}</td>
  <td>${productData[i].title}</td>
  <td>${productData[i].price}</td>
  <td>${productData[i].taxes}</td>
  <td>${productData[i].ads}</td>
  <td>${productData[i].discount}</td>
  <td>${productData[i].total}</td>
  <td>${productData[i].category}</td>
  <td><button onclick ="updateElement(${i})" id="update">Update</button></td>
  <td><button onclick ="deleteElement(${i})" id="delete">Delete</button></td>
</tr>
  `;
  }
  tableBody.innerHTML = table;
  if (productData.length > 0) {
    deleteAllBtn.innerHTML = `
    <button onclick ="deleteAll()">Delete All ( ${productData.length} )</button>
    `;
  } else {
    deleteAllBtn.innerHTML = "";
  }
};
showData();

// Delete Element In Data
const deleteElement = (i) => {
  productData.splice(i, 1);
  localStorage.theProduct = JSON.stringify(productData);
  showData();
};

// Delete All Data

const deleteAll = () => {
  localStorage.clear();
  productData.splice(0);
  showData();
};

// Update Element

const updateElement = (i) => {
  title.value = productData[i].title;
  price.value = productData[i].price;
  taxes.value = productData[i].taxes;
  ads.value = productData[i].ads;
  discount.value = productData[i].discount;
  total.textContent = productData[i].total;
  category.value = productData[i].category;
  getTotal();
  createBtn.textContent = "Update";
  count.style.display = "none";
  mood = "update";
  theElementIndex = i;
};
