//creating a DB sqlite.

const sqlite3 = require('sqlite3').verbose();

// Open a database handle.
let db = new sqlite3.Database('./eventDB.sqlite', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create a new table.
db.run(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee TEXT NOT NULL,
    partner BOOLEAN,
    children INTEGER,
    children18 INTEGER,
    shabbat BOOLEAN,
    roomNumber TEXT,
    attendees INTEGER,
    connectingDoor BOOLEAN,
    transportation TEXT,
    basketballTournament BOOLEAN
  )`, 
  
  //Error of creating table.
  (err) => {
  if (err) {
    console.error('Error creating table', err);
  } else {
    console.log('Table created or already exists');
  }
});

//Error closing DB.
db.close((err) => {
    if (err) {
      console.error('Error closing database', err.message);
    } else {
      console.log('Closed the database connection.');
    }
  });
