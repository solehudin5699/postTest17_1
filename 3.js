// Buatlah query untuk mendapatkan top 10 user yang melakukan perjalanan terjauh pada sebuah aplikasi ride sharing app. Dengan output sebagai berikut :

// users.name distance_traveled total_fares
let query =
  "SELECT users.name, rides.distance AS distance_traveled, (rides.distance*rides.fare) as total_fares FROM users JOIN rides ON users.id=rides.user_id ORDER BY total_fares DESC LIMIT 10 OFFSET 0";
