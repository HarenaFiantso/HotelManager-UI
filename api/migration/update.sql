-- add column photo 
CREATE TABLE room_numbers (
    id SERIAL PRIMARY KEY,
    room_number VARCHAR(10) NOT NULL,
    is_available BOOLEAN NOT NULL,
    room_id INT REFERENCES room(id) NOT NULL
);

ALTER TABLE hotel
ADD COLUMN IF NOT EXISTS photo varchar(255);

ALTER TABLE room
ADD COLUMN IF NOT EXISTS photo varchar(300);

ALTER TABLE room
ADD COLUMN IF NOT EXISTS description text default 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Sed dicta commodi iusto fuga ipsam,
    reiciendis quidem consequuntur corporis,
    vero assumenda cum cupiditate architecto aspernatur,
    molestiae quas velit ea sint repudiandae.
    avec piscine';

ALTER TABLE room ADD COLUMN IF NOT EXISTS unavailable_dates DATE[];