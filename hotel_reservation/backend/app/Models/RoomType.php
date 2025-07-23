<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Booking;


class RoomType extends Model
{
    protected $table = 'room_types';

    protected $fillable = [
        'name',
        'price',
    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'room_type_id');
    }

    //GET ALL ROOM TYPES
    public static function getAllRoomTypes()
    {
        return self::all();
    }

    //CREATE/POST A NEW ROOM TYPE

    public static function createRoomType(array $newdata)
    {
        return self::create($newdata);
    }

    //UPDATE A ROOM TYPE

    public static function updateRoomType($id , array $data =[])
    {
        $roomType = self::find($id);
        if(!$roomType)
        {
            return null;
        }
        $roomType->update($data);
        return $roomType;
    }

    //DELETE A ROOM TYPE

    public static function deleteRoomType($id)
    {
        $roomType = self::find($id);
        if(!$roomType)
        {
            return null;
        }
        $roomType->delete();
        return $roomType;
    }


}
