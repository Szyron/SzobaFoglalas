import bgIMG from "../assets/img/backgroundIMG.jpg"
import { Link } from "react-router-dom"

function Main() {
    return (
        <div
            className="hero min-h-screen"
        >
            <img src={bgIMG} alt="hotelReservation" />
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-blue-500">Welcome to Your Perfect Stay</h1>
                <div className="max-w-md">
                    
                    <h1 className="mb-5 text-3xl font-bold text-blue-300">Guesthouse - Room reservation</h1>

                    <p className="mb-5">
                        Discover comfort, convenience, and a warm welcome. Whether you're traveling for business or leisure, our rooms offer the perfect place to rest, recharge, and feel at home.
                    </p>
                    <Link to="/calculator" className="btn bg-blue-500 text-white">Book a room now!</Link>
                </div>
            </div>
        </div>
    )
}

export default Main