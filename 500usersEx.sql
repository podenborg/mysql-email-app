-- Exercise 1
-- SELECT DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date
-- FROM users
-- ORDER BY created_at ASC
-- LIMIT 1;

-- Exercise 2
-- SELECT 
--     email,
--     created_at
-- FROM users
-- ORDER BY created_at ASC
-- LIMIT 1;

-- Exercise 3
-- SELECT
--     MONTHNAME(created_at) AS month,
--     COUNT(*) AS count
-- FROM users
-- GROUP BY month
-- ORDER BY count DESC;

-- Exercise 4
-- SELECT COUNT(*) AS yahoo_users
-- FROM users
-- WHERE email LIKE '%yahoo.com';

-- Exercise 5
SELECT 
    CASE
        WHEN email LIKE '%gmail.com' THEN 'gmail'
        WHEN email LIKE '%yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    COUNT(*) AS total_users
FROM users
GROUP BY provider;