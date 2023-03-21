<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;
use Inertia\Inertia;

class LocationsController extends Controller
{
    public function index(Request $request){
        return Inertia::render('Locations/Index', [
            'locations' => Location::when($request->address, function($query, $address){
                $query->where('address', 'LIKE', '%'.$address.'%');
            })->paginate()
        ]);
    }
}
