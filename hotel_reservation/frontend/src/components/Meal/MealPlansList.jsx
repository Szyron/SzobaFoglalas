import MealPlansCard from "./MealPlansCard";
import ServiceContext from "../Context/ServiceContext"
import { useContext } from "react";

function MealPlansList() {

    const { mealPlans} = useContext(ServiceContext);

  return (
        <div>
    <div className="bg-base-200 min-h-screen p-4 bg-blue-200">
      <h1 className="text-3xl font-bold text-center mb-4 text-primary">Meal Plans</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          mealPlans.map((mealPlan) => (<MealPlansCard key={mealPlan.id} mealPlan={mealPlan} />))
        }
      </div>
    </div>
    </div>
  )
}

export default MealPlansList