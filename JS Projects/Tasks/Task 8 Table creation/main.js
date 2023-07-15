// Get Elements
const rowsNum = document.getElementById("rows");
const columnsNum = document.getElementById("columns");
const createBtn = document.getElementById("btn");
const body = document.body;

const createTable = () => {
  const table = document.createElement("table");
  body.appendChild(table);
  for (let i = 0; i < rowsNum.value; i++) {
    const row = document.createElement("tr");
    table.appendChild(row);
    for (let i = 0; i < columnsNum.value; i++) {
      const column = document.createElement("td");
      column.innerHTML = "New Table";
      row.appendChild(column);
    }
  }
};

createBtn.addEventListener("click", createTable);
