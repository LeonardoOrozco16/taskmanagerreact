import React from "react";
/* Custom Hook */
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  /* Persistence Data */
  const namePersistence = itemName;

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem = localStorage.getItem(namePersistence);
        /*let parsedItem;
       if (!localStorageItem) {
          localStorage.setItem(namePersistence, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }*/
        let parsedItem = JSON.parse(
          localStorageItem || JSON.stringify(initialValue)
        );
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (Tasks) => {
    localStorage.setItem(namePersistence, JSON.stringify(Tasks));
    setItem(Tasks);
  };
  /* Persistence Data */
  return { item, saveItem, loading, error };
}
/* Custom Hook */

export { useLocalStorage };
