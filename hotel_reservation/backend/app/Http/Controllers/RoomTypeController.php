<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomType;

class RoomTypeController extends Controller
{
    //GET ALL
    public function index()
    {
        return response()->json(RoomType::getAllRoomTypes(), 200);
    }

    //CREATE
    public function create(Request $req)
    {
         $valid = $req->validate([
            'name'=>'required|string',
            'price'=>'required|integer|min:0'
         ]);
         $newRoomType = RoomType::createRoomType($valid);
         return response()->json(['id'=> $newRoomType->id],200);
    }

    //UPDATE
    public function update(Request $req, $id)
    {
        $roomType = RoomType::updateRoomType($id , $req->all());
        if(!$roomType)
        {
            return response()->json(['message'=>'Failed data update!'],400);
        }
        return response()->json([
            'message'=>'Data update succes!',
            'data' => $roomType
        ], 200);
    }

    //DELETE
    public function delete(Request $req)
    {
        $id = $req->input('id');
        $roomType = RoomType::deleteRoomType($id);
        if(!$roomType)
        {
            return response()->json(['message'=>'Failed data deletion!'],404);
        }
        return response()->json([
            'message'=>'Data deletion successful!',
            'data' => $roomType
        ],200);
    }
}
