-- Create the city table
CREATE TABLE city (
    city_id SERIAL PRIMARY KEY,
    city_name VARCHAR(255) NOT NULL,
    country_id INTEGER REFERENCES country(country_id),
    last_update TIMESTAMP DEFAULT current_timestamp
);
