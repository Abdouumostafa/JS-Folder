let mainTitle = document.querySelector(".mainTitle");
let mainBtn = document.querySelector(".mainBtn");
let tasks = document.querySelector(".tasks");
let editData = document.querySelector(".edit");
let deleteBtn = document.querySelector(".delete");
let mood = "create";
let tmp;

let arrNew;

if (localStorage.storage != null) {
  arrNew = JSON.parse(localStorage.storage);
} else {
  arrNew = [];
}

mainBtn.addEventListener("click", () => {
  let theNew = {
    mainTitle: mainTitle.value,
  };
  if (mainTitle.value != "") {
    if (mood === "create") {
      arrNew.push(theNew);
    } else {
      arrNew[tmp] = theNew;
      mood = "create";
      mainBtn.value = "ADD TASK";
    }
  }
  mainTitle.value = "";
  localStorage.setItem("storage", JSON.stringify(arrNew));
  showData();
});

function showData() {
  let note = "";
  for (i = 0; i < arrNew.length; i++) {
    note += `
        <div class="task">
            <div class="output">${arrNew[i].mainTitle}</div>
            <div class="btns">
                <button onclick= "editTask(${i})" class="edit"> Edit</button>
                <button onclick= "deleteData(${i})" class="delete">Delete</button>
            </div>
        </div>
        `;
  }
  tasks.innerHTML = note;
}
showData();

function deleteData(i) {
  arrNew.splice(i, 1); //to delete only on array
  localStorage.storage = JSON.stringify(arrNew);
  showData();
}

function editTask(i) {
  mainTitle.value = arrNew[i].mainTitle;
  mainBtn.value = "UPDATE";
  tmp = i;
  mood = "update";
  showData();
}
//////////////////////////////////////////

// let taskArr;

// if (localStorage.storage != null) {
//   taskArr = JSON.parse(localStorage.storage);
// } else {
//   taskArr = [];
// }

// // To create the data
// const createData = () => {
//   const taskObj = {
//     mainTitle: mainTitle.value,
//   };
//   taskArr.push(taskObj);
//   localStorage.setItem("storage", JSON.stringify(taskArr));
// };

// // To show the structure of data
// const showData = () => {
//   let mainData;
//   for (let i = 0; i < taskArr.length; i++) {
//     mainData += `
//   <div class="task">
//         <div class="output">${mainTitle.value}</div>
//             <div class="btns">
//                 <button onclick="editTask(0)" class="edit"> Edit</button>
//                 <button onclick="deleteData(0)" class="delete">Delete</button>
//             </div>
//     </div>
//   `;
//   }
//   tasks.innerHTML = mainData;
//   mainTitle.value = "";
// };

// mainBtn.addEventListener("click", () => {
//   showData();
//   createData();
// });
