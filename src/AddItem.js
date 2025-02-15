import React, { useState, useContext } from 'react';
import { ListContext } from './ListContext';

const AddItem = () => {
  const { dispatch } = useContext(ListContext);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      const newItemObject = { id: Date.now(), name: newItem };
      dispatch({ type: 'ADD_ITEM', payload: newItemObject });
      setNewItem('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItem;