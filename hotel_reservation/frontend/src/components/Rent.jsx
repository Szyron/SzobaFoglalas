import topIMG from '../assets/img/rentIMG.jpg'
import Rentmodule from './Rentmodule'

function Rent() {





  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 px-4 py-10">
      <div className="card w-full max-w-4xl bg-base-100 shadow-md rounded-lg">
        <figure className="px-10 pt-10 w-full">
          <img
            src={topIMG}
            alt="Room"
            className="rounded-xl border-blue-950 border-2 max-h-54 max-w-54 w-full"
          />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl text-blue-500">Select Date</h2>
          <p className="text-gray-600 mb-6">Please select the date for your room reservation</p>

          <Rentmodule />

          <div className="card-actions mt-6">
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rent