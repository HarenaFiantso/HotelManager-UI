INSERT INTO role (role_name)
VALUES ('Admin'),
  ('Manager'),
  ('Receptionist'),
  ('Guest'),
  ('Customer'),
  ('Staff'),
  ('Supervisor'),
  ('Coordinator'),
  ('Accountant'),
  ('Security');
INSERT INTO "user" (
    username,
    password,
    first_name,
    last_name,
    cin,
    email,
    id_role
  )
VALUES (
    'admin',
    'admin123',
    'John',
    'Doe',
    'AB123456',
    'admin@example.com',
    1
  ),
  (
    'manager',
    'manager123',
    'Jane',
    'Smith',
    'CD987654',
    'manager@example.com',
    2
  ),
  (
    'reception',
    'password',
    'Robert',
    'Johnson',
    'EF246810',
    'reception@example.com',
    3
  ),
  (
    'guest',
    'password',
    'Emma',
    'Davis',
    'GH135792',
    'guest@example.com',
    4
  ),
  (
    'customer1',
    'pass123',
    'Michael',
    'Wilson',
    'IJ642380',
    'customer1@example.com',
    5
  ),
  (
    'customer2',
    'pass123',
    'Emily',
    'Brown',
    'KL987654',
    'customer2@example.com',
    5
  ),
  (
    'staff1',
    'pass123',
    'Daniel',
    'Taylor',
    'MN123456',
    'staff1@example.com',
    6
  ),
  (
    'staff2',
    'pass123',
    'Olivia',
    'Anderson',
    'OP987654',
    'staff2@example.com',
    6
  ),
  (
    'accountant',
    'pass123',
    'David',
    'Thomas',
    'QR246810',
    'accountant@example.com',
    9
  ),
  (
    'security',
    'pass123',
    'Sophia',
    'Martinez',
    'ST135792',
    'security@example.com',
    10
  );
INSERT INTO payment_method (name)
VALUES ('Credit Card'),
  ('Cash'),
  ('Bank Transfer'),
  ('PayPal'),
  ('Cheque'),
  ('Mobile Payment'),
  ('Cryptocurrency'),
  ('Gift Card'),
  ('Direct Debit'),
  ('Venmo');
INSERT INTO city (name)
VALUES ('Antananarivo'),
  ('Mahajanga'),
  ('Toamasina'),
  ('Antsiranana'),
  ('Toliara'),
  ('Antsirabe');
INSERT INTO hotel (name, address, is_active, id_city)
VALUES ('Grand Plaza', '123 Main St, ', true, 1),
  ('Royal Palace', '456 Park Ave, London', true, 1),
  (
    'Metropolitan',
    '789 Broadway, New Yorksdfsd',
    true,
    1
  ),
  ('Sakura Inn', '101 Sakura Dori, sfsd', true, 1),
  ('Seaside Resort', '50 Beach Rd, fsdfy', true, 1),
  (
    'City Center Hotel',
    '15 Hauptstrasse, Berlinsdqf',
    true,
    1
  ),
  ('Eternal City Inn', '30 Via Roma, Romeqsdf', true, 1),
  (
    'Desert Oasis Hotel',
    '500 Sheikh Zayed Rd, Dubaisdqf',
    true,
    1
  ),
  (
    'Lakeview Lodge',
    '100 Lakeshore Blvd, Torontoqsdf',
    true,
    1
  ),
  (
    'Kremlin Hotel',
    '10 Red Square, Moscowsdqfq',
    true,
    1
  ),
('Grand Plaza', '123 Main St, Paris', true, 2),
  ('Royal Palace', '456 Park Ave, Londonsdfqs', true, 2),
  (
    'Metropolitan',
    '789 Broadway, New Yorksdfqs',
    true,
    2
  ),
  ('Sakura Inn', '101 Sakura Dori, Tokyo zearz', true, 2),
  ('Seaside Resort', '50 Beach Rd, Sydneymlmlk', true, 2),
  (
    'City Center Hotel',
    '15 Hauptstrasse, Berlinikljk',
    true,
    2
  ),
  ('Eternal City Inn', '30 Via Roma, Romekjhjlkhlkj', true, 2),
  (
    'Desert Oasis Hotel',
    '500 Sheikh Zayed Rd, Dubaikjlkmjmlk',
    true,
    2
  ),
  (
    'Lakeview Lodge',
    '100 Lakeshore Blvd, Torontokjklmjmk',
    true,
    2
  ),
  (
    'Kremlin Hotel',
    '10 Red Square, Moscowkjlmkjml',
    true,
    2
  ),
  ('Grand Plaza', '123 Main St, Paristuyuyi', true, 3),
  ('Royal Palace', '456 Park Ave, London iuoiu', true, 3),
  (
    'Metropolitan',
    '789 Broadway, New York ioupiupoi',
    true,
    3
  ),
  ('Sakura Inn', '101 Sakura Dori, Tokyofgdhd', true, 3),
  ('Seaside Resort', '50 Beach Rd, Sydney iouopiuo', true, 3),
  (
    'City Center Hotel uiyoiuyo',
    '15 Hauptstrasse, Berlin',
    true,
    3
  ),
  ('Eternal City Inn', '30 Via Roma, Rome oiuopiupoi', true, 3),
  (
    'Desert Oasis Hotel',
    '500 Sheikh Zayed Rd, Dubai oiuoipuopi',
    true,
    3
  ),
  (
    'Lakeview Lodge',
    '100 Lakeshore Blvd, Toronto lmjlkmjmlk',
    true,
    3
  ),
  (
    'Kremlin Hotel',
    '10 Red Square, Moscow lkjmlkjlmk',
    true,
    3
  ),
  ('Grand Plaza', '123 Main St, Paris kjlhmlkjmok', true, 4),
  ('Royal Palace', '456 Park Ave, London lkjklmj', true, 4),
  (
    'Metropolitan',
    '789 Broadway, New York jklhlkjh',
    true,
    4
  ),
  ('Sakura Inn', '101 Sakura Dori, Tokyo jkhklj', true, 4),
  ('Seaside Resort', '50 Beach Rd, Sydne nkjlnjy', true, 4),
  (
    'City Center Hotel',
    '15 Hauptstrasse, Berlkljmlkin',
    true,
    4
  ),
  ('Eternal City Inn', '30 Via Roma, Rokljmlkjme', true, 4),
  (
    'Desert Oasis Hotel',
    '500 Sheikh Zayed Rd, Dubkljmlkjai',
    true,
    4
  ),
  (
    'Lakeview Lodge',
    '100 Lakeshore Blvd, Torlkjmlkjonto',
    true,
    4
  ),
  (
    'Kremlin Hotel',
    '10 Red Square, Moscklmjlkjow',
    true,
    4
  ),
  ('Grand Plaza', '123 Main St, Parilkjklms', true, 1),
  ('Royal Palace', '456 Park Ave, Londlkjmlkmjon', true, 1),
  (
    'Metropolitan',
    '789 Broadway, New Yorkljmlkk',
    true,
    1
  ),
  ('Sakura Inn', '101 Sakura Dori, Tokkljnjlyo', true, 5),
  ('Seaside Resort', '50 Beach Rd, Sydnlljlkjey', true, 5),
  (
    'City Center Hotel',
    '15 Hauptstrasse, Berljklkhkjin',
    true,
    5
  ),
  ('Eternal City Inn', '30 Via Roma, Rojhlkjhlme', true, 5),
  (
    'Desert Oasis Hotel',
    '500 Sheikh Zayed Rd, Dukjhlkjhbai',
    true,
    5
  ),
  (
    'Lakeview Lodge',
    '100 Lakeshore Blvd, Toronjkhlkjhlkjto',
    true,
    5
  ),
  (
    'Kremlin Hotel',
    '10 Red Square, Moscoljlkjhkljhw',
    true,
    5
  ),
  ('Grand Plaza', '123 Main St, Palkjhkjlris', true, 6),
  ('Royal Palace', '456 Park Ave, Loubilubndon', true, 6),
  (
    'Metropolitan',
    '789 Broadway, New York',
    true,
    6
  ),
  ('Sakura Inn', '101 Sakura Dori, Tokyjkhluhno', true, 6),
  ('Seaside Resort', '50 Beach Rd, Sydniinkjney', true, 6),
  (
    'City Center Hotel',
    '15 Hauptstrasse, Berlikjnkjn',
    true,
    6
  ),
  ('Eternal City Inn', '30 Via Roma, Rojhgkjhme', true, 6),
  (
    'Desert Oasis Hotel',
    '500 Sheikh Zayed Rd, Dubkhlkuhlkai',
    true,
    6
  ),
  (
    'Lakeview Lodge',
    '100 Lakeshore Blvd, Torohjklhjlkhnto',
    true,
    6
  ),
  (
    'Kremlin Hotel',
    '10 Red Square, Moskjlhjllhkcow',
    true,
    6
  ),
  (
    'Kremlin Hotel',
    '10 Red Square, Mosjlkhjlkhcow',
    true,
    6
  );
INSERT INTO conference_room (capacity, price_per_hour, id_hotel)
VALUES (50, 100.00, 1),
  (100, 150.00, 2),
  (30, 75.00, 3),
  (80, 120.00, 4),
  (40, 90.00, 1),
  (60, 110.00, 2),
  (20, 60.00, 3),
  (70, 130.00, 4),
  (50, 100.00, 1),
  (40, 90.00, 2);
INSERT INTO discount (
    discount_name,
    discount_rate,
    discount_start,
    discount_end
  )
VALUES ('Summer Sale', 10.00, '2023-07-01', '2023-07-31'),
  ('Early Bird', 15.00, '2023-08-01', '2023-08-15'),
  (
    'Last Minute Deal',
    20.00,
    '2023-08-16',
    '2023-08-31'
  );
INSERT INTO room_type (name, base_price)
VALUES ('Standard', 100.00),
  ('Deluxe', 150.00),
  ('Suite', 200.00),
  ('Executive', 250.00),
  ('Penthouse', 500.00),
  ('Single', 80.00),
  ('Double', 120.00),
  ('Twin', 120.00),
  ('Family', 180.00),
  ('Accessible', 100.00);
INSERT INTO have_reduced_price_conference_room (id_conference_room, id_discount)
VALUES (1, 1),
  (2, 2),
  (3, 3),
  (4, 1),
  (5, 2),
  (6, 3),
  (7, 1),
  (8, 2),
  (9, 3),
  (10, 1);
INSERT INTO have_reduced_price (id_discount, id_room_type)
VALUES (1, 1),
  (2, 2),
  (3, 3),
  (1, 4),
  (2, 5),
  (3, 6),
  (1, 7),
  (2, 8),
  (3, 9),
  (1, 10);
INSERT INTO room (id_room_type, id_hotel)
VALUES (1, 1),
  (2, 1),
  (3, 2),
  (4, 2),
  (5, 3),
  (6, 3),
  (7, 4),
  (8, 4),
  (9, 5),
  (10, 5);
INSERT INTO room_option (name, description, price)
VALUES (
    'Breakfast',
    'Includes complimentary breakfast',
    10.00
  ),
  ('WiFi', 'High-speed internet access', 5.00),
  ('Parking', 'On-site parking available', 15.00),
  ('Gym', 'Access to fitness center', 10.00),
  ('Spa', 'Relaxing spa services', 20.00),
  ('Pool', 'Outdoor swimming pool', 10.00),
  ('Room Service', 'In-room dining service', 8.00),
  (
    'Laundry',
    'Laundry and dry cleaning service',
    12.00
  ),
  ('Minibar', 'Stocked minibar in the room', 15.00),
  ('Pet Friendly', 'Allows pets in the room', 10.00);
INSERT INTO have_room_option (id_room, id_room_option)
VALUES (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9),
  (10, 10);
INSERT INTO rating (rate, comment, id_user, id_hotel)
VALUES (4, 'Great hotel!', 1, 1),
  (5, 'Excellent service!', 2, 2),
  (3, 'Average experience', 3, 3),
  (4, 'Comfortable rooms', 4, 4),
  (5, 'Highly recommended', 1, 5),
  (4, 'Friendly staff', 2, 1),
  (3, 'Needs improvement', 3, 2),
  (5, 'Fantastic stay!', 4, 3),
  (4, 'Good value for money', 1, 4),
  (5, 'Beautiful location', 2, 5);
INSERT INTO reservation (
    creation_timestamp,
    user_id,
    handler_id,
    room_id,
    conference_room_id,
    start_time,
    end_time,
    special_requests,
    payment_method,
    is_paid,
    is_cancelled,
    penalty_rate
  )
VALUES (
    '2023-07-15 10:00:00',
    1,
    3,
    1,
    NULL,
    '2023-07-20 14:00:00',
    '2023-07-25 12:00:00',
    'Non-smoking room',
    1,
    true,
    false,
    0
  ),
  (
    '2023-07-16 09:30:00',
    2,
    3,
    NULL,
    2,
    '2023-07-22 10:00:00',
    '2023-07-28 18:00:00',
    'Audio equipment required',
    3,
    true,
    false,
    0
  ),
  (
    '2023-07-18 11:45:00',
    3,
    2,
    2,
    NULL,
    '2023-07-23 15:00:00',
    '2023-07-25 11:00:00',
    '',
    2,
    true,
    false,
    0
  ),
  (
    '2023-07-20 14:30:00',
    4,
    1,
    4,
    NULL,
    '2023-07-25 16:00:00',
    '2023-07-30 10:00:00',
    'Extra bed required',
    1,
    false,
    false,
    0
  ),
  (
    '2023-07-21 16:15:00',
    1,
    2,
    5,
    NULL,
    '2023-07-24 12:00:00',
    '2023-07-26 10:00:00',
    'Late check-out requested',
    2,
    true,
    false,
    0
  ),
  (
    '2023-07-22 10:30:00',
    2,
    1,
    NULL,
    1,
    '2023-07-27 09:00:00',
    '2023-08-01 17:00:00',
    'Projector required',
    4,
    false,
    false,
    0
  ),
  (
    '2023-07-25 12:45:00',
    3,
    1,
    4,
    NULL,
    '2023-07-29 14:00:00',
    '2023-08-02 11:00:00',
    '',
    3,
    true,
    false,
    0
  ),
  (
    '2023-07-28 09:00:00',
    4,
    3,
    2,
    NULL,
    '2023-08-02 10:00:00',
    '2023-08-07 16:00:00',
    'Early check-in requested',
    1,
    false,
    false,
    0
  ),
  (
    '2023-07-30 15:30:00',
    1,
    2,
    1,
    NULL,
    '2023-08-04 12:00:00',
    '2023-08-09 11:00:00',
    'High floor preferred',
    2,
    true,
    false,
    0
  ),
  (
    '2023-08-02 13:20:00',
    2,
    1,
    NULL,
    2,
    '2023-08-06 16:00:00',
    '2023-08-11 14:00:00',
    '',
    3,
    false,
    false,
    0
  );
INSERT INTO reservation (
    creation_timestamp,
    user_id,
    handler_id,
    room_id,
    conference_room_id,
    start_time,
    end_time,
    special_requests,
    payment_method,
    is_paid,
    is_cancelled,
    penalty_rate
  )
VALUES (
    '2023-07-23 11:00:00',
    3,
    2,
    3,
    NULL,
    '2023-07-28 14:00:00',
    '2023-08-01 10:00:00',
    'Quiet room preferred',
    2,
    false,
    true,
    0
  ),
  (
    '2023-07-25 09:30:00',
    4,
    1,
    1,
    NULL,
    '2023-07-29 12:00:00',
    '2023-08-02 11:00:00',
    '',
    1,
    false,
    true,
    0
  ),
  (
    '2023-07-28 14:15:00',
    2,
    3,
    NULL,
    3,
    '2023-08-02 16:00:00',
    '2023-08-07 12:00:00',
    'Additional chairs required',
    3,
    false,
    true,
    0
  ),
  (
    '2023-07-30 10:45:00',
    1,
    2,
    5,
    NULL,
    '2023-08-04 14:00:00',
    '2023-08-09 11:00:00',
    'Late check-out requested',
    2,
    false,
    true,
    0
  ),
  (
    '2023-08-02 13:30:00',
    3,
    1,
    4,
    NULL,
    '2023-08-06 09:00:00',
    '2023-08-11 15:00:00',
    '',
    3,
    false,
    true,
    0
  );