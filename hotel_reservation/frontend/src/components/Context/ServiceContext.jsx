import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [categories, setCategories] = useState([]);

  const update = () => {
    setRefresh(prev => !prev)
  }

/*   useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/category`)
      .then(res => res.json())
      .then(adat => setCategories(adat.categories))
      .catch(err => alert(err));
  }, [refresh]); */



  const backendOperation = async (adat, method, url, header) => {
    try {
      const keres = await fetch(url, {
        method: method,
        headers: header,
        body: JSON.stringify(adat),
      });
      const valasz = await keres.json();

      if (keres.ok) {
        toast.success("Sikeres adatfelvitel!");
      } else {
        toast.error(valasz.error || "Valami hiba történt!");
      }
      update();
    } catch (error) {
      toast.error("Hálózati hiba történt!");
      console.error(error);
    }
  };

  return <ServiceContext.Provider value={{
    update,
    refresh,
    categories,
    setCategories,
    backendOperation,
  }}>{children}</ServiceContext.Provider>

}

export default ServiceContext;