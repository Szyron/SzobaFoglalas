

function MealPlansCard({ mealPlan }) {
    return (
        <div className="card bg-white w-96 shadow-sm mr-5">
            <figure className="h-74">
                <img
                    src="https://images.pexels.com/photos/33120628/pexels-photo-33120628.jpeg"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{mealPlan.name} - <span className="text-md text-primary">{mealPlan.price} HUF/Night/person</span></h2>
            </div>
        </div>
    )
}

export default MealPlansCard