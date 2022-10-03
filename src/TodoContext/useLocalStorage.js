import React from "react";

//Creamos un customhook para manejar el local storage
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  //useEffect lo usamos para la carga de datos y que solo renderice cuando hay una actualización de este estado, no del resto
  React.useEffect(() => {
    setTimeout(() => {
      //almacenamiento de datos de localstorage
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  // Creamos la función en la que actualizaremos nuestro localStorage
  const saveItem = (newItem) => {
    try {
      // Convertimos a string nuestros Item
      const stringifiedItem = JSON.stringify(newItem);
      // Los guardamos en el localStorage
      localStorage.setItem(itemName, stringifiedItem);
      // Actualizamos nuestro estado
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
