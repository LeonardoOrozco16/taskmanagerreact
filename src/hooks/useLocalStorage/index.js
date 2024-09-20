import React from "react";
/* Custom Hook */
function useLocalStorage(itemName, initialValue) {
  /* Persistence Data */
  const namePersistence = itemName;
  let parsedItem = JSON.parse(
    localStorage.getItem(namePersistence) || initialValue
  );

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (Tasks) => {
    localStorage.setItem(namePersistence, JSON.stringify(Tasks));
    setItem(Tasks);
  };
  /* Persistence Data */
  return [item, saveItem];
}
/* Custom Hook */

export { useLocalStorage };
