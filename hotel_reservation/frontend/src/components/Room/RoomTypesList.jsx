import RoomTypesCard from "./RoomTypesCard"
import ServiceContext from "../Context/ServiceContext"
import { useContext } from "react";

function RoomTypesList() {

  const { roomTypes, setRoomTypes, refresh } = useContext(ServiceContext);




  return (
    <div>
    <div className="bg-base-200 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-primary">Kategória Lista</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          roomTypes.map((roomType) => (<RoomTypesCard key={roomType.id} roomType={roomType} />))
        }
      </div>
    </div>
    </div>
  )
}

export default RoomTypesList