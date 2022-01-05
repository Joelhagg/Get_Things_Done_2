document.querySelector("#myItems").addEventListener("click", function (e) {
  e.target.classList.toggle("checked");
});

let myToDoList = [];
let wholeList = localStorage.getItem("list");
let myToDoListParsed = JSON.parse(wholeList);

console.log(myToDoListParsed);

if (myToDoListParsed) {
  myToDoList = myToDoListParsed;
}

if (myToDoListParsed) {
  myToDoList.map((listItem, index) => {
    document
      .getElementById("myItems")
      .appendChild(
        document.createElement("p")
      ).innerHTML = `${listItem.text}<i class="far fa-check-circle" id="removeButton" ${index}></i>`;
  });
}

let getValue = () => {
  console.log("getValue");
  let text = document.getElementById("addItemText").value;

  let listItem = {
    text: text,
  };
  console.log(listItem);

  myToDoList.push(listItem);

  saveToMyList(myToDoList);
  location.reload();
};

let saveToMyList = (data) => {
  let myListStringify = JSON.stringify(data);
  localStorage.setItem("list", myListStringify);
};

let addItemButton = document.getElementById("addItemButton");
addItemButton.addEventListener("click", getValue);

let remove = (index) => {
  myToDoList.splice(index, 1);
  saveToMyList(myToDoList);
  location.reload();
};

let removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", remove);
