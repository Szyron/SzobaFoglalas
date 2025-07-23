import React from 'react'

function RoomTypesCard({ roomType }) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm mr-5">
            <figure>
                <img
                    src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{roomType.name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default RoomTypesCard