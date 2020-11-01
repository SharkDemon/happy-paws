DROP TABLE IF EXISTS trip_legs;
DROP SEQUENCE IF EXISTS trip_legs_id_seq;
CREATE SEQUENCE trip_legs_id_seq;
CREATE TABLE trip_legs (
    id INT DEFAULT nextval('trip_legs_id_seq') PRIMARY KEY,
    trip_id INT NOT NULL,
    volunteer_id INT NOT NULL,
    pickup_location STRING,
    pickup_date TIMESTAMP,
    pickup_city STRING,
    pickup_state STRING,
    pickup_zip STRING,
    drop_location STRING,
    drop_date TIMESTAMP,
    drop_city STRING,
    drop_state STRING,
    drop_zip STRING,
    CONSTRAINT fk_trip
        FOREIGN KEY(trip_id)
        REFERENCES trips(id),
    CONSTRAINT fk_volunteer
        FOREIGN KEY(volunteer_id)
        REFERENCES volunteers(id)
);
