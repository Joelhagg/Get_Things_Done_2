import {
  checkItem,
  getData,
  removeItem,
  renderItemsToList,
} from "./modules/data.mjs";

checkItem("#myItems");

let myToDoList = [];
let wholeList = getData("list");
let myToDoListParsed = JSON.parse(wholeList);

let saveToMyList = (data) => {
  let myListStringify = JSON.stringify(data);
  localStorage.setItem("list", myListStringify);
};

if (myToDoListParsed) {
  myToDoList = myToDoListParsed;
}

if (myToDoListParsed) {
  myToDoList.map((listItem, index) => {
    renderItemsToList("myItems", listItem, index, myToDoList, saveToMyList);
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

let addItemButton = document.getElementById("addItemButton");
addItemButton.addEventListener("click", getValue);

const allItems = document.querySelectorAll("#myItems > p > i");
allItems.forEach((element, index) => {
  element.addEventListener("click", () =>
    removeItem(index, myToDoList, saveToMyList)
  );
});
