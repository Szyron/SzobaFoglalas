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
}
