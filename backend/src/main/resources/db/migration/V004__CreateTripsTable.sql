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
    est_miles INT,
    CONSTRAINT fk_pet
        FOREIGN KEY(pet_id)
        REFERENCES pets(id)
);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(1, '2020-07-07', 'Amarillo', 'TX', '79178', '2020-07-07', 'Laredo', 'TX', '78041', 624);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(2, '2020-06-27', 'Amarillo', 'TX', '79111', '2020-06-27', 'Beaumont', 'TX', '77704', 644);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(3, '2019-09-10', 'Odessa', 'TX', '79761', '2019-09-10', 'Houston', 'TX', '77001', 497);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(4, '2021-11-13', 'Round Rock', 'TX', '78728', '2021-11-13', 'Abilene', 'TX', '79699', 213);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(5, '2021-02-01', 'Houston', 'TX', '77024', '2021-02-01', 'Ardmore', 'OK', '73403', 359);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(6, '2020-12-25', 'San Angelo', 'TX', '76909', '2020-12-25', 'Beaumont', 'TX', '77709', 455);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(7, '2021-01-05', 'Waco', 'TX', '76797', '2021-01-05', 'Corpus Christi', 'TX', '78413', 309);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(8, '2020-12-12', 'Midland', 'TX', '79711', '2020-12-12', 'College Station', 'TX', '77842', 417);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(9, '2020-12-01', 'El Paso', 'TX', '79934', '2020-12-01', 'Longview', 'TX', '75615', 775);

INSERT INTO trips (pet_id, start_date, start_city, start_state, start_zip, end_date, end_city, end_state, end_zip, est_miles) VALUES
(10, '2021-03-03', 'Lubbock', 'TX', '79499', '2021-03-03', 'Indianapolis', 'IN', '46260', 1105);
