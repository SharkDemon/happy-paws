DROP TABLE IF EXISTS pets;
DROP SEQUENCE IF EXISTS pets_id_seq;
CREATE SEQUENCE pets_id_seq;
CREATE TABLE pets (
    id INT DEFAULT nextval('pets_id_seq') PRIMARY KEY,
    name STRING,
    gender STRING,
    age STRING,
    weight INT,
    breed STRING,
    image STRING,
    image_thumb STRING,
    adopt_date DATE
);
INSERT INTO pets (name, gender, age, weight, breed, image, image_thumb, adopt_date) VALUES
('Charlie', 'male', '6', 35, 'Beagle', '/images/pets/1-beagle.png', '/images/pets/1-beagle-thumb.png', '2020-06-09'),
('Max', 'male', 'Unknown', 32, 'Pembroke Welsh Corgi', '/images/pets/2-corgi.png', '/images/pets/2-corgi-thumb.png', '2020-05-11'),
('Buddy', 'male', 'Unknown', 42, 'Beagle', '/images/pets/3-beagle.png', '/images/pets/3-beagle-thumb.png', '2019-08-09'),
('Duke', 'male', '3', 27, 'Siberian Husky', '/images/pets/4-husky.png', '/images/pets/4-husky-thumb.png', '2021-11-12'),
('Oliver', 'male', '4', 25, 'Beagle', '/images/pets/5-beagle.png', '/images/pets/5-beagle-thumb.png', '2021-01-03'),
('Zoey', 'female', '6', 24, 'Alaskan Malamute', '/images/pets/6-malamute.png', '/images/pets/6-malamute-thumb.png', '2020-12-13'),
('Maggie', 'female', '5.5', 27, 'Beagle', '/images/pets/7-beagle.png', '/images/pets/7-beagle-thumb.png', '2020-12-28'),
('Bella', 'female', '8', 28, 'Siberian Husky', '/images/pets/8-husky.png', '/images/pets/8-husky-thumb.png', '2020-12-03'),
('Daisy', 'female', '2.5', 17, 'Beagle', '/images/pets/9-beagle.png', '/images/pets/9-beagle-thumb.png', '2020-11-27'),
('Sadie', 'female', '8', 32, 'Pembroke Welsh Corgi', '/images/pets/10-corgi.png', '/images/pets/10-corgi-thumb.png', '2021-02-11');
