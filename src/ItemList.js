import React, { useContext, useMemo } from 'react';
import { ListContext } from './ListContext';

const ItemList = () => {
  const { state, dispatch } = useContext(ListContext);


  const memoizedItems = useMemo(() => {
    return state;
  }, [state]);

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div>
      <h3>Items List ({memoizedItems.length})</h3>
      <ul>
        {memoizedItems.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;