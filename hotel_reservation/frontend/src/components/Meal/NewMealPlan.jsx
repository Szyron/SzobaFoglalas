import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceContext from "../Context/ServiceContext";

function NewMealPlan() {


    const navigate = useNavigate();
    const { update , backendOperation } = useContext(ServiceContext);
    const { state } = useLocation();

    let title = "New Meal Plan";
    let method = "POST";
    let header = { "Content-Type": "application/json" };
    
    let formObj ={
        id: "",
        name: "",
        price: "",
    }

    let url = `${import.meta.env.VITE_BASE_URL}/meal-plans`;

    if (state !== null)
    {
        const { mealPlan } = state;
        formObj = {
        id: mealPlan.id,
        name: mealPlan.name,
        price: mealPlan.price
        };
        method = "PATCH";
        title = `${mealPlan.name} changed`;
    }

    const [formData, setFormData] = useState(formObj);


    const onSubmit = async (e) => {
        e.preventDefault();
        if(!formData.name && !formData.price){
        toast.error("Name and price are required!");
        }else if(!formData.name){
        toast.error("Name are required!");
        }else if(!formData.price){
        toast.error("Price are required!");
        }
        backendOperation(formData, method, url, header);
        navigate("/bookings");
    }

    const writeData = (e) => {
        setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
        }));
    };




  return (
     <div className="bg-base-200 flex items-center justify-center min-h-screen text-info">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center pb-5 text-primary">{title}</h2>
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label className="input input-primary flex items-center gap-2 border-primary">
                <input className="grow placeholder-info"
                  type="text"
                  id="name"
                  placeholder="Meal Plan Name"
                  required
                  onChange={writeData}
                  value={formData.name}
                />
              </label>
                <label className="input input-primary flex items-center gap-2 border-primary">
                <input className="grow placeholder-info"
                  type="number"
                  id="price"
                  placeholder="Meal Plan Price FT/night/person"
                  required
                  onChange={writeData}
                  value={formData.price}
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-white">
                Felvitel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewMealPlan