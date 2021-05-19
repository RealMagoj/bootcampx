SELECT teachers.name, count(assistance_requests.teacher_id) as total_assistance_requests
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;