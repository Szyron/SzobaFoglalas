<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Booking;

class BookingGuestAge extends Model
{
    protected $table = 'booking_guest_ages';

    protected $fillable = [
        'booking_id',
        'age_group',
        'number_of_guests'
    ];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
}
