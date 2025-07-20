import 'cally'

function Rentmodule() {

    









    return (
        <div className="flex flex-col items-center justify-center px-4">
            <div className="mb-10">
                <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
                    <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                    <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                    <calendar-month></calendar-month>
                </calendar-date>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                {/* Room Type */}
                <div className="flex flex-col">
                    <h2 className="card-title text-2xl text-blue-400">Room Type</h2>
                    <select defaultValue="" className="select select-info">
                        <option disabled value="">Choose a room type</option>
                        <option>Single Room – 9,000 HUF/night</option>
                        <option>Double Room – 15,000 HUF/night</option>
                        <option>Double Room with 1 Extra Bed – 18,000 HUF/night</option>
                        <option>Double Room with 2 Extra Beds – 18,000 HUF/night</option>
                    </select>
                </div>

                {/* Number of Guests */}
                <div className="flex flex-col">
                    <h2 className="card-title text-2xl text-blue-400">Number of Guests</h2>
                    <select defaultValue="" className="select select-info">
                        <option disabled value="">Select number of guests</option>
                        <option>1 Person</option>
                        <option>2 Persons</option>
                        <option>3 Persons</option>
                        <option>4 Persons</option>
                    </select>
                </div>

                {/* Guests' Age */}
                <div className="flex flex-col w-full">
                    <h2 className="card-title text-2xl text-blue-400">Guests' Age</h2>
                    <div className="flex flex-row gap-4">
                        <input type="text" className="input input-info w-full"/>
                        <input type="text" className="input input-info w-full"/>
                        <input type="text" className="input input-info w-full"/>
                        <input type="text" className="input input-info w-full mr-10"/>
                    </div>
                    <p className="label text-red-600 mt-2">Children under 6 years receive a discount</p>
                </div>

                {/* Meal Options */}
                <div className="flex flex-col">
                    <h2 className="card-title text-2xl text-blue-400">Meal Options</h2>
                    <select defaultValue="" className="select select-info">
                        <option disabled value="">Choose a meal option</option>
                        <option>Breakfast – 900 HUF/day/person</option>
                        <option>Half Board – 2,900 HUF/day/person</option>
                        <option>Full Board – 4,900 HUF/day/person</option>
                    </select>
                </div>

                {/* Special Requests*/}
                <div className="md:col-span-2">
                    <h2 className="card-title text-2xl text-blue-400">Special Requests</h2>
                    <textarea className="textarea textarea-info w-full" placeholder="Any special requests?"></textarea>
                    <p className="label text-gray-600">Please let us know if you have any special requests</p>
                </div>
            </div>
        </div>
    )
}

export default Rentmodule