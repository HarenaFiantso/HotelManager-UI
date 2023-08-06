-- Table role
INSERT INTO role (role_name) VALUES
  ('Admin'),
  ('User');

-- Table user
INSERT INTO "user" (username, password, first_name, last_name, cin, society_name, number, email, secondary_number, gender, birthdate, id_role) VALUES
  ('john_doe', 'password123', 'John', 'Doe', '123456789', 'ABC Company', '1234567890', 'john.doe@example.com', '9876543210', 'M', '1990-01-01', 2),
  ('jane_smith', 'password456', 'Jane', 'Smith', '987654321', 'XYZ Corporation', '9876543210', 'jane.smith@example.com', '1234567890', 'F', '1985-05-15', 2),
  ('admin_user', 'adminpassword', 'Admin', 'User', '567890123', NULL, '1234567890', 'admin@example.com', '9876543210', 'M', '1980-12-31', 1);

-- Table payment_method
INSERT INTO payment_method (name) VALUES
  ('Credit Card'),
  ('Cash'),
  ('Bank Transfer');

-- Table city
INSERT INTO city (name) VALUES
  ('Antananarivo'),
  ('Mahajanga'),
  ('Toamasina'),
  ('Fianarantsoa'),
  ('Toliara'),
  ('Antsiranana');

-- Table hotel
INSERT INTO hotel (name, address, id_city, photos, description, rating, cheapestPrice, featured) VALUES
  ('Hotel A', '123 Main Street, Antananarivo', 1, '{"image1.jpg", "image2.jpg"}', 'This is a beautiful hotel in the heart of the city.', 4.5, 100, true),
  ('Hotel B', '456 Broad Street, Mahajanga', 2, '{"image3.jpg", "image4.jpg"}', 'A cozy hotel with a view of the ocean.', 3.8, 80, false),
  ('Hotel C', '789 Park Avenue, Toamasina', 3, '{"image5.jpg", "image6.jpg"}', 'A modern hotel with excellent amenities.', 4.2, 120, true),
  ('Hotel D', '321 Forest Road, Fianarantsoa', 4, '{"image7.jpg", "image8.jpg"}', 'A historic hotel with traditional charm.', 4.0, 90, false);

-- Table rating
INSERT INTO rating (rate, comment, id_user, id_hotel) VALUES
  (4, 'Great hotel with friendly staff.', 1, 1),
  (3, 'Nice location but needs improvement.', 2, 2),
  (5, 'Excellent service and facilities.', 1, 3),
  (4, 'Loved the ambiance and decor.', 3, 4);

-- Table conference_room
INSERT INTO conference_room (capacity, price_per_hour, id_hotel) VALUES
  (50, 200, 1),
  (30, 150, 3);

-- Table discount
INSERT INTO discount (discount_name, discount_rate, discount_start, discount_end) VALUES
  ('Summer Sale', 10, '2023-07-01', '2023-07-31'),
  ('Winter Promotion', 15, '2023-12-01', '2023-12-31');

-- Table room_type
INSERT INTO room_type (name, base_price) VALUES
  ('Standard Room', 80),
  ('Deluxe Room', 120);

-- Table have_reduced_price_conference_room
INSERT INTO have_reduced_price_conference_room (id_conference_room, id_discount) VALUES
  (1, 1),
  (2, 2);

-- Table have_reduced_price
INSERT INTO have_reduced_price (id_discount, id_room_type) VALUES
  (2, 1),
  (1, 2);

-- Table room
INSERT INTO room (id_room_type, id_hotel) VALUES
  (1, 1),
  (2, 1),
  (1, 3),
  (2, 4);

-- Table room_option
INSERT INTO room_option (name, description, price) VALUES
  ('Breakfast', 'Includes complimentary breakfast.', 10),
  ('Wi-Fi', 'High-speed internet access.', 5),
  ('Parking', 'Parking facilities available.', 8);

-- Table have_room_option
INSERT INTO have_room_option (id_room, id_room_option) VALUES
  (1, 1),
  (1, 2),
  (2, 1),
  (2, 3),
  (3, 2),
  (4, 1),
  (4, 3);

-- Table reservation
INSERT INTO reservation (user_id, handler_id, room_id, conference_room_id, start_time, end_time, special_requests, payment_method, is_paid, is_cancelled, penalty_rate) VALUES
  (1, 3, 1, NULL, '2023-08-10 12:00:00', '2023-08-15 10:00:00', 'Late check-in', 1, true, false, 0),
  (2, 3, 3, NULL, '2023-09-20 14:00:00', '2023-09-22 12:00:00', 'Quiet room preferred', 2, true, false, 0),
  (1, 3, NULL, 1, '2023-07-05 09:00:00', '2023-07-05 18:00:00', 'Audio-visual equipment needed', 1, true, false, 0),
  (3, 3, 4, NULL, '2023-11-12 15:00:00', '2023-11-15 11:00:00', 'Early check-out', 3, false, true, 0.15);
