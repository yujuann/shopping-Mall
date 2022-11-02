// Fetch the items from ths JSON file
function loadItems() {
  return fetch("/data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items 아이템 접근

function displayItems(items) {
  const inputText = document.querySelector(".items");
  inputText.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `<li class="item" >
          <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
          <span class="item__description">${item.gender}, ${item.size}</span>
          </li>`;
}

// 4. handle button event
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  const filterData = items.filter((item) => item[key] == value);
  displayItems(filterData);
}

// 5. setEvent
function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", () => onButtonClick(event, items));
}

// main 동작
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
