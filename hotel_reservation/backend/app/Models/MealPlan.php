<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Booking;

class MealPlan extends Model
{
    protected $table = 'meal_plans';

    protected $fillable = [
        'name',
        'price',
    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class, 'meal_plan_id');
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
        $mealPlan = self::find($id);
        if(!$mealPlan)
        {
            return null;
        }
        $mealPlan->update($data);
        return $mealPlan;
    }

    //DELETE A ROOM TYPE

    public static function deleteRoomType($id)
    {
        $mealPlan = self::find($id);
        if(!$mealPlan)
        {
            return null;
        }
        $mealPlan->delete();
        return $mealPlan;
    }
}
