<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Booking;

class Service extends Model
{
    protected  $table = 'services';

    protected $fillable = [
        'name',
        'price',
    ];

    public function bookings()
    {
        return $this->belongsToMany(Booking::class, 'booking_service');
    }
}
