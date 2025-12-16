import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '../../data/fleet.db');

export const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS diagnostic_events (
      id TEXT PRIMARY KEY,
      timestamp TEXT NOT NULL,
      vehicle_id TEXT NOT NULL,
      level TEXT NOT NULL,
      code TEXT NOT NULL,
      message TEXT NOT NULL
    )
  `);
});