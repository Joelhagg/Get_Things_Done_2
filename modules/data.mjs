const getData = (key) => {
  return localStorage.getItem(key);
};

const checkItem = (querySelector) => {
  document.querySelector(querySelector).addEventListener("click", function (e) {
    e.target.classList.toggle("checked");
  });
};

const renderItemsToList = (elementId, listItem, index) => {
  document
    .getElementById(elementId)
    .appendChild(document.createElement("p")).innerHTML = `${listItem.text}
    <i 
        class="far fa-check-circle"
        id="removeButton${index}"
        data-id="${index}"
        ">
    </i>`;
};

const removeItem = (index, myToDoList, saveToMyList) => {
  myToDoList.splice(index, 1);
  saveToMyList(myToDoList);
  location.reload();
};

export { checkItem, getData, removeItem, renderItemsToList };
