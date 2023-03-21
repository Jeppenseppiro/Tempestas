<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Location;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Location::create([
            'address' => 'Isabel, Leyte',
            'latitude' => 10.9235,
            'longitude' => 124.446
        ]);

        Location::create([
            'address' => 'Ormoc, Leyte',
            'latitude' => 11.0496,
            'longitude' => 124.605
        ]);
    }
}
