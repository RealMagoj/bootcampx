const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const argv = process.argv.slice(2);

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM cohorts
JOIN students ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, [`%${argv[0]}%`, argv[1]])
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));