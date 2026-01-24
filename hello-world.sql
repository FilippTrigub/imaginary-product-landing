-- Hello World in SQL
-- Demonstrates basic SQL queries and database operations
-- Compatible with PostgreSQL, MySQL, and SQLite (with minor adjustments)

-- Display a simple message
SELECT 'Hello, World!' AS greeting;

-- Display with current timestamp
SELECT 
    'Hello, World!' AS greeting,
    CURRENT_TIMESTAMP AS current_time;

-- Create a temporary table with greetings
CREATE TEMPORARY TABLE IF NOT EXISTS greetings (
    id INTEGER PRIMARY KEY,
    message VARCHAR(100),
    language VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample greetings
INSERT INTO greetings (id, message, language) VALUES
    (1, 'Hello, World!', 'English'),
    (2, 'Hola, Mundo!', 'Spanish'),
    (3, 'Bonjour, Monde!', 'French'),
    (4, 'Hallo, Welt!', 'German'),
    (5, 'Ciao, Mondo!', 'Italian'),
    (6, 'こんにちは、世界！', 'Japanese'),
    (7, '你好，世界！', 'Chinese'),
    (8, 'Привет, мир!', 'Russian');

-- Query all greetings
SELECT 
    id,
    message,
    language,
    created_at
FROM greetings
ORDER BY id;

-- Count greetings by language
SELECT 
    COUNT(*) AS total_greetings,
    'Multiple Languages' AS note
FROM greetings;

-- Display a specific greeting
SELECT 
    CONCAT('Greeting #', id, ': ', message, ' (', language, ')') AS formatted_greeting
FROM greetings
WHERE language = 'English';

-- Clean up
DROP TABLE IF EXISTS greetings;

-- Final message
SELECT 
    'SQL Hello World executed successfully!' AS status,
    CURRENT_TIMESTAMP AS completed_at;
