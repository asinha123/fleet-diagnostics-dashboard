export interface DiagnosticEvent {
  id: number;
  timestamp: string;
  vehicleId: string;
  vehicle_id: string;
  level: 'ERROR' | 'WARN' | 'INFO';
  code: string;
  message: string;
}
