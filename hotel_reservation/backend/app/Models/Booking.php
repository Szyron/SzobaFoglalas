<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\RoomType;
use App\Models\MealPlan;
use App\Models\BookingGuestAge;
use App\Models\Service;


class Booking extends Model
{
    protected $table = 'bookings';
    
    protected $fillable = [
        'check_in_date',
        'check_out_date',
        'room_type_id',
        'meal_plan_id',
        'number_of_guests',
        'special_requests'
    ];

    public function roomType()
    {
        return $this->belongsTo(RoomType::class);
    }

    public function mealPlan()
    {
        return $this->belongsTo(MealPlan::class);
    }

    public function guestAges()
    {
        return $this->hasMany(BookingGuestAge::class);
    }

    public function service()
    {
        return $this->belongsToMany(Service::class);
    }

}
