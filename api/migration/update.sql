-- add column photo 
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