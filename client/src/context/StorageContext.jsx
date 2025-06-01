import React, { createContext, useState, useEffect } from 'react';

// Create the context
const StorageContext = createContext();

// Simple localStorage wrapper to replace storageService for now
const STORAGE_KEY = 'items';

const storageService = {
  getItem: (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Error reading from localStorage', e);
      return null;
    }
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error writing to localStorage', e);
    }
  },
  hasItem: (key) => {
    return localStorage.getItem(key) !== null;
  },
};

function StorageProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Initialize storage if empty
    if (!storageService.hasItem(STORAGE_KEY)) {
      // If you had mock data, you could load it here, e.g.:
      // const mockToys = [{ id: 1, name: 'Toy 1' }, { id: 2, name: 'Toy 2' }];
      // storageService.setItem(STORAGE_KEY, mockToys);
      storageService.setItem(STORAGE_KEY, []); // start empty
    }
    setItems(storageService.getItem(STORAGE_KEY) || []);
  }, []);

  function syncItems(newItems) {
    storageService.setItem(STORAGE_KEY, newItems);
    setItems(newItems);
  }

  function addNewItem(newItem) {
    const newItems = [...items, newItem];
    syncItems(newItems);
  }

  function getAllItems() {
    return items;
  }

  function getItemByCondition(condition) {
    return items.filter(condition);
  }

  function updateItem(itemIndex, newData) {
    const newItems = [...items];
    newItems[itemIndex] = { ...newItems[itemIndex], ...newData };
    syncItems(newItems);
  }

  function deleteItem(deleteIndex) {
    const newItems = [...items];
    newItems.splice(deleteIndex, 1);
    syncItems(newItems);
  }

  return (
    <StorageContext.Provider
      value={{
        items,
        addNewItem,
        getAllItems,
        getItemByCondition,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}

export { StorageProvider };
export default StorageContext;
