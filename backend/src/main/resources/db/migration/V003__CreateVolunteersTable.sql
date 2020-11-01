DROP TABLE IF EXISTS volunteers;
DROP SEQUENCE IF EXISTS volunteers_id_seq;
CREATE SEQUENCE volunteers_id_seq;
CREATE TABLE volunteers (
    id INT DEFAULT nextval('volunteers_id_seq') PRIMARY KEY,
    first_name STRING,
    last_name STRING,
    birth_date DATE,
    verified BOOLEAN,
    city STRING,
    state STRING,
    zip STRING,
    car_color STRING,
    car_make STRING,
    car_model STRING,
    license_plate_number STRING,
    license_plate_state STRING,
    image STRING,
    image_thumb STRING
);
INSERT INTO volunteers (first_name, last_name, birth_date, verified, city, state, zip, car_color, car_make, car_model, license_plate_number, license_plate_state, image, image_thumb) VALUES
('Henry','Geyer','1981-02-14',true,'Amarillo','TX','79101', 'blue', 'Toyota', 'Corolla', 'BBE 456', 'TX', '/images/volunteers/vol-1.png', '/images/volunteers/vol-1-thumb.png'),
('Charles','Gibson','1977-03-25',true,'Lubbock','TX','79491', 'white', 'Toyota', 'Prius', 'POL 123', 'TX', '/images/volunteers/vol-2.png', '/images/volunteers/vol-2-thumb.png'),
('Abijah','Gilbert','2000-11-09',false,'Fort Worth','TX','76177', 'black', 'Chevrolet', 'Cavalier', 'GUS 455', 'TX', '/images/volunteers/vol-3.png', '/images/volunteers/vol-3-thumb.png'),
('Frederick','Gillett','1999-12-07',true,'Plano','TX','75252', 'black', 'Jeep', 'Cherokee', 'ABI 341', 'TX', '/images/volunteers/vol-4.png', '/images/volunteers/vol-4-thumb.png'),
('Carter','Glass','1997-02-01',true,'Odessa','TX','79760', 'white', 'Jeep', 'Wrangler', 'BUZZARD', 'TX', '/images/volunteers/vol-5.png', '/images/volunteers/vol-5-thumb.png'),
('Wendell','Ford','1993-01-17',true,'San Angelo','TX','76904', 'blue', 'Toyota', 'Camry', 'GOL 4578', 'TX', '/images/volunteers/vol-6.png', '/images/volunteers/vol-6-thumb.png'),
('Al','Franken','1994-05-09',true,'Round Rock','TX','78664', 'white', 'Toyota', 'GR Supra', 'JAX 1230', 'TX', '/images/volunteers/vol-7.png', '/images/volunteers/vol-7-thumb.png'),
('Frank','Flint','1985-05-28',true,'Laredo','TX','88278', 'black', 'Chevrolet', 'Blazer', 'OBT 0922', 'TX', '/images/volunteers/vol-8.png', '/images/volunteers/vol-8-thumb.png'),
('Felix','Grundy','1962-02-14',true,'McAllen','TX','88540', 'red', 'Chevrolet', 'Equinox', 'GAP 3410', 'TX', '/images/volunteers/vol-9.png', '/images/volunteers/vol-9-thumb.png'),
('William','Gwin','1953-02-14',true,'Beaumont','TX','77703', 'gray', 'Chevrolet', 'Impala', 'ZED 341', 'TX', '/images/volunteers/vol-10.png', '/images/volunteers/vol-10-thumb.png');
