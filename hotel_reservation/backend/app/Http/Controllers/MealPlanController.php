<?php

namespace App\Http\Controllers;
use App\Models\MealPlan;

use Illuminate\Http\Request;

class MealPlanController extends Controller
{
    //GET ALL
    public function index()
    {
        return response()->json(MealPlan::getAllRoomTypes(), 200);
    }

    //CREATE
    public function create(Request $req)
    {
         $valid = $req->validate([
            'name'=>'required|string',
            'price'=>'required|integer|min:0'
         ]);
         $newMealPlan = MealPlan::createRoomType($valid);
         return response()->json(['id'=> $newMealPlan->id],200);
    }

    //UPDATE
    public function update(Request $req, $id)
    {
        $mealPlan = MealPlan::updateRoomType($id , $req->all());
        if(!$mealPlan)
        {
            return response()->json(['message'=>'Failed data update!'],400);
        }
        return response()->json([
            'message'=>'Data update succes!',
            'data' => $mealPlan
        ], 200);
    }

    //DELETE
    public function delete(Request $req)
    {
        $id = $req->input('id');
        $mealPlan = MealPlan::deleteRoomType($id);
        if(!$mealPlan)
        {
            return response()->json(['message'=>'Failed data deletion!'],404);
        }
        return response()->json([
            'message'=>'Data deletion successful!',
            'data' => $mealPlan
        ],200);
    }
}
