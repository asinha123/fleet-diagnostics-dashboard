import { v4 as uuid } from 'uuid';
import { DiagnosticEvent } from './events.model';

export function parseLogLine(line: string): DiagnosticEvent {
  const regex =
    /\[(.*?)\]\s+\[VEHICLE_ID:(.*?)\]\s+\[(.*?)\]\s+\[CODE:(.*?)\]\s+\[(.*?)\]/;

  const match = line.match(regex);
  console.log("match", match);
  if (!match) {
    throw new Error('Invalid log format');
  }

  return {
    id: uuid(),
    timestamp: new Date(match[1]).toISOString(),
    vehicleId: match[2],
    level: match[3] as any,
    code: match[4],
    message: match[5]
  };
}