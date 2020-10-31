DROP TABLE IF EXISTS trips;
DROP SEQUENCE IF EXISTS trips_id_seq;
CREATE SEQUENCE trips_id_seq;
CREATE TABLE trips (
    id INT DEFAULT nextval('trips_id_seq') PRIMARY KEY,
    pet_id INT NOT NULL,
    start_date DATE,
    start_city STRING,
    start_state STRING,
    start_zip STRING,
    end_date DATE,
    end_city STRING,
    end_state STRING,
    end_zip STRING,
    CONSTRAINT fk_pet
        FOREIGN KEY(pet_id)
        REFERENCES pets(id)
);
INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip) VALUES
(1, '2020-07-07', 'Amarillo', 'TX', '79178', '2020-07-07', 'Laredo', 'TX', '78041'),
(2, '2020-06-27', 'Amarillo', 'TX', '79111', '2020-06-27', 'Beaumont', 'TX', '77704'),
(3, '2019-09-10', 'Odessa', 'TX', '79761', '2019-09-10', 'Houston', 'TX', '77001'),
(4, '2021-11-13', 'Round Rock', 'TX', '78728', '2021-11-13', 'Abilene', 'TX', '79699'),
(5, '2021-02-01', 'Houston', 'TX', '77024', '2021-02-01', 'Ardmore', 'OK', '73403');
