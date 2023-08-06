DROP DATABASE IF EXISTS ets_hotel;
CREATE DATABASE ets_hotel;
\ c ets_hotel;
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(20)
);
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(128),
    last_name VARCHAR(128) NOT NULL,
    cin VARCHAR(20) UNIQUE,
    society_name VARCHAR(128),
    number VARCHAR(20),
    email VARCHAR(50) NOT NULL,
    secondary_number VARCHAR(20),
    gender CHAR(1),
    birthdate DATE,
    id_role INT REFERENCES role(id) NOT NULL
);
CREATE TABLE payment_method (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);
CREATE TABLE city (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE hotel (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  id_city VARCHAR(255) NOT NULL,
  photos TEXT[],
  description TEXT NOT NULL,
  rating NUMERIC CHECK (rating >= 0 AND rating <= 5),
  cheapestPrice NUMERIC NOT NULL,
  featured BOOLEAN DEFAULT false
);
CREATE TABLE rating (
    id SERIAL PRIMARY KEY,
    rate INT CHECK (
        rate >= 0
        AND rate <= 5
    ),
    comment TEXT,
    id_user INT REFERENCES "user"(id) NOT NULL,
    id_hotel INT REFERENCES hotel(id) NOT NULL
);
CREATE TABLE conference_room (
    id SERIAL PRIMARY KEY,
    capacity INT NOT NULL,
    price_per_hour NUMERIC(20, 2) NOT NULL,
    id_hotel INT REFERENCES hotel(id) NOT NULL
);
CREATE TABLE discount (
    id SERIAL PRIMARY KEY,
    discount_name VARCHAR(255),
    discount_rate FLOAT CHECK (
        discount_rate >= 0
        AND discount_rate <= 20
    ),
    discount_start TIMESTAMP,
    discount_end TIMESTAMP
);
CREATE TABLE room_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    base_price NUMERIC(20, 2) NOT NULL
);
CREATE TABLE have_reduced_price_conference_room (
    id SERIAL PRIMARY KEY,
    id_conference_room INT REFERENCES conference_room(id) NOT NULL,
    id_discount INT REFERENCES discount(id) NOT NULL
);
CREATE TABLE have_reduced_price (
    id SERIAL PRIMARY KEY,
    id_discount INT REFERENCES discount(id) NOT NULL,
    id_room_type INT REFERENCES room_type(id) NOT NULL
);
CREATE TABLE room (
    id SERIAL PRIMARY KEY,
    id_room_type INT REFERENCES room_type(id) NOT NULL,
    id_hotel INT REFERENCES hotel(id) NOT NULL
);
CREATE TABLE room_option (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(20, 2)
);
CREATE TABLE have_room_option (
    id SERIAL PRIMARY KEY,
    id_room INT REFERENCES room(id) NOT NULL,
    id_room_option INT REFERENCES room_option(id) NOT NULL
);
CREATE TABLE IF NOT EXISTS reservation (
    id SERIAL PRIMARY KEY,
    creation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT REFERENCES "user"(id) NOT NULL,
    handler_id INT REFERENCES "user"(id) NOT NULL,
    room_id INT REFERENCES room(id),
    conference_room_id INT REFERENCES conference_room(id),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    special_requests TEXT,
    payment_method INT REFERENCES payment_method(id) NOT NULL,
    is_paid BOOLEAN DEFAULT false,
    is_cancelled BOOLEAN DEFAULT false,
    penalty_rate float DEFAULT 0,
    CONSTRAINT timestamp_check CHECK (
        start_time > CURRENT_TIMESTAMP
        AND end_time > start_time
    ),
    CONSTRAINT room_or_conference_not_null CHECK (
        room_id IS NOT NULL
        OR conference_room_id IS NOT NULL
    )
);