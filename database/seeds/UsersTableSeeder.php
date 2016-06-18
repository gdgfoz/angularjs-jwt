<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        
        factory(App\User::class, 2)->create();
        
        App\User::create([
            'name' => 'Demo',
            'email' => 'demo@demo.com',
            'password' => bcrypt('demo'),
            'remember_token' => str_random(10),
        ]);
        
    }
}
