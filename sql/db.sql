CREATE TABLE campaigns (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    status TEXT CHECK (status IN ('Active', 'Paused')) NOT NULL,
    clicks INTEGER NOT NULL,
    cost FLOAT NOT NULL,
    impressions INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO campaigns (name, status, clicks, cost, impressions)
VALUES
('Summer Sale', 'Active', 150, 45.99, 1000),
('Black Friday', 'Paused', 320, 89.50, 2500),
('Winter Clearance', 'Active', 210, 67.30, 1800),
('New Year Blast', 'Active', 400, 120.75, 5000),
('Festive Offer', 'Paused', 95, 30.00, 900),
('Spring Launch', 'Active', 300, 80.20, 3200),
('Flash Deal', 'Paused', 50, 15.10, 600),
('Holiday Special', 'Active', 275, 95.60, 4100),
('Weekend Sale', 'Active', 180, 55.40, 1500),
('Clearance Sale', 'Paused', 600, 200.99, 7500);
