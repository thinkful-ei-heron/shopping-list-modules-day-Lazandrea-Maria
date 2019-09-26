//const foo = 'bar';
import item from './item.js';
const items = [];
const hideCheckedItems = false;

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
};

function findAndDelete(id) {
  this.items = this.items.filter(item => item.id !== id);
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(name);
    const item = this.findById(id);
    item.name = name;
  } catch (error) {
    console.log('Cannot update name: ${error.message}');
  }
}

function findAndToggleChecked(id) {
  const itemFound = this.findById(id);
  if (itemFound.checked === true) {
    itemFound.checked = false;
  } else {
    itemFound.checked = true;
  }
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findById(id) {
  return items.find(item => item.id === id);
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};

// console.log(item);
// console.log(foo);
