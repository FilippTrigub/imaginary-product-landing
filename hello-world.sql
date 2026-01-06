-- Hello World in SQL
-- This can be run with SQLite: sqlite3 < hello-world.sql

-- Basic SELECT
SELECT 'Hello, World!' AS greeting;

-- Using UNION for multiple greetings
SELECT 'Hello, World!' AS greeting
UNION ALL
SELECT 'Hello, SQL!'
UNION ALL
SELECT 'Hello, Database!';

-- Create a temporary table
CREATE TEMP TABLE greetings (
    id INTEGER PRIMARY KEY,
    greeting TEXT,
    name TEXT
);

-- Insert data
INSERT INTO greetings (greeting, name) VALUES
    ('Hello', 'Alice'),
    ('Hi', 'Bob'),
    ('Hey', 'Charlie'),
    ('Greetings', 'Dave');

-- Query the table
SELECT greeting || ', ' || name || '!' AS message
FROM greetings;

-- Aggregate example
SELECT 
    COUNT(*) AS total_greetings,
    'Hello, World!' AS message
FROM greetings;

-- Case statement
SELECT 
    name,
    CASE 
        WHEN LENGTH(name) > 5 THEN 'Hello, ' || name || ' (long name)!'
        ELSE 'Hello, ' || name || '!'
    END AS personalized_greeting
FROM greetings;

-- Subquery
SELECT 
    'Hello, ' || name || '!' AS greeting
FROM (
    SELECT 'World' AS name
    UNION ALL
    SELECT 'SQL'
);

-- Clean up
DROP TABLE greetings;

-- Final message
SELECT '=== SQL Hello World Complete ===' AS status;
