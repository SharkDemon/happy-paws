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
    adopt_date DATE
);
INSERT INTO pets (name, gender, age, weight, breed, image, adopt_date) VALUES
('Charlie', 'male', '6', 35, 'Beagle', '', '2020-06-09'),
('Max', 'male', 'Unknown', 32, 'Pembroke Welsh Corgi', '', '2020-05-11'),
('Buddy', 'male', 'Unknown', 42, 'Beagle', '', '2019-08-09'),
('Duke', 'male', '3', 27, 'Siberian Husky', '', '2021-11-12'),
('Oliver', 'male', '4', 25, 'Beagle', '', '2021-01-03'),
('Zoey', 'female', '6', 24, 'Alaskan Malamute', '', '2020-12-13'),
('Maggie', 'female', '5.5', 27, 'Beagle', '', '2020-12-28'),
('Bella', 'female', '8', 28, 'Siberian Husky', '', '2020-12-03'),
('Daisy', 'female', '2.5', 17, 'Beagle', '', '2020-11-27'),
('Sadie', 'female', '8', 32, 'Pembroke Welsh Corgi', '', '2021-02-11');
