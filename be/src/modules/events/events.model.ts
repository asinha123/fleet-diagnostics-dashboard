export interface DiagnosticEvent {
  id: string;
  timestamp: string;
  vehicleId: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'CRITICAL';
  code: string;
  message: string;
}