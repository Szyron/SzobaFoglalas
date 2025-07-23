import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [roomTypes, setRoomTypes] = useState([]);
  const [mealPlans, setMealPlans] = useState([]);

  const update = () => {
    setRefresh(prev => !prev)
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/room-types`)
      .then(res => res.json())
      .then(data => setRoomTypes(data))
      .catch(err => alert(err));
  }, [refresh]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/meal-plans`)
      .then(res => res.json())
      .then(data => setMealPlans(data))
      .catch(err => alert(err));
  }, [refresh]);



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
    roomTypes,
    mealPlans,
    setMealPlans,
    setRoomTypes,
    backendOperation,
  }}>{children}</ServiceContext.Provider>

}

export default ServiceContext;