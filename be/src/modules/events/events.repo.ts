import { db } from "../../config/db";
import { DiagnosticEvent } from "./events.model";

export class EventsRepository {
  insert(event: DiagnosticEvent): Promise<void> {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO diagnostic_events VALUES (?, ?, ?, ?, ?, ?)`,
        [
          event.id,
          event.timestamp,
          event.vehicleId,
          event.level,
          event.code,
          event.message,
        ],
        (err) => (err ? reject(err) : resolve())
      );
    });
  }

  find(filters: any): Promise<DiagnosticEvent[]> {
    let query = `SELECT * FROM diagnostic_events WHERE 1=1`;
    const params: any[] = [];

    if (filters.vehicle_id) {
      query += ` AND vehicle_id = ?`;
      params.push(filters.vehicle_id);
    }

    if (filters.code) {
      query += ` AND code = ?`;
      params.push(filters.code);
    }

    if (filters.level) {
      query += ` AND level = ?`;
      params.push(filters.level);
    }

    // ✅ FROM date filter
    if (filters.from) {
      query += ` AND timestamp >= ?`;
      params.push(filters.from);
    }

    // ✅ TO date filter
    if (filters.to) {
      query += ` AND timestamp <= ?`;
      params.push(filters.to);
    }

    // Optional sorting and pagination
    const LIMIT = filters?.limit ? ` LIMIT ${filters?.limit}` : " ";
    const OFFSET = filters?.offset ? ` OFFSET ${filters?.offset}` : " ";
    query += ` ORDER BY timestamp DESC ${LIMIT} ${OFFSET}`;
    console.log("que", query);

    return new Promise((resolve, reject) => {
      db.all(query, params, (err, rows) =>
        err ? reject(err) : resolve(rows as any)
      );
    });
  }

  truncate(): Promise<void> {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM diagnostic_events`, (err) => {
        if (err) return reject(err);
      });
    });
  }
}
