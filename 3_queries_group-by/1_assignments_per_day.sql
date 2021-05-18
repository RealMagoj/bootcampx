SELECT day, count(assignments.day) as total_assignments
FROM assignments
GROUP BY assignments.day
ORDER BY assignments.day;