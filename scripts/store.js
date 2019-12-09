/* eslint-disable no-empty */
import item from './item.js';
import shoppingList from './shopping-list.js';
let items = [];
let hideCheckedItems = false;



const findById = function(id) {
  const found = items.find(element => element.id === id);
  console.log(found);
  return found;
  
};

const addItem = function(name) {
  try {
    item.validateName(name);
    //this.item.create?
    const createdItem = item.create(name);
    this.items.push(createdItem);
  } catch(error) {
    console.log('Something went wrong?');
  }
};

const findAndToggleChecked = function(id) {
  const toToggle = this.findById(id);
  toToggle.checked = !toToggle.checked;
};

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    newName = findById(id);
  } catch (error) {
    console.log(`Cannot update name: ${error.message}.`);
  }
};

const findAndDelete = function(id) {
  console.log(`Here's the id passed in: ${id} Here's stuff.id:`);
  let indexFound;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id)
      items.splice(i, 1);
  }
};

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
  shoppingList.render();
};

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


