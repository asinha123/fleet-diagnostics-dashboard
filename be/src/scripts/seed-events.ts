import { parseLogLine } from "../modules/events/events.parser";
import { EventsService } from "../modules/events/events.service";

const service = new EventsService();

const logs = [
  "[2025-07-24 14:21:12] [VEHICLE_ID:2345] [ERROR] [CODE:C1234] [ABS wheel speed sensor failure]",
  "[2025-07-24 14:21:18] [VEHICLE_ID:6789] [WARN]  [CODE:P0171] [System too lean]",
  "[2025-07-24 14:21:25] [VEHICLE_ID:3456] [INFO]  [CODE:EVT02] [Engine temperature within range]",
  "[2025-07-24 14:21:33] [VEHICLE_ID:7890] [ERROR] [CODE:U0100] [Lost communication with ECM]",
  "[2025-07-24 14:21:41] [VEHICLE_ID:4567] [WARN]  [CODE:P0420] [Catalyst efficiency below threshold]",
  "[2025-07-24 14:21:49] [VEHICLE_ID:8901] [INFO]  [CODE:EVT03] [Brake system self-test passed]",
  "[2025-07-24 14:21:56] [VEHICLE_ID:5678] [ERROR] [CODE:B1000] [Airbag control module fault]",
  "[2025-07-24 14:22:04] [VEHICLE_ID:9012] [WARN]  [CODE:P0110] [Intake air temperature sensor issue]",
  "[2025-07-24 14:22:12] [VEHICLE_ID:6781] [INFO]  [CODE:EVT04] [Battery voltage stable]",
  "[2025-07-24 14:22:20] [VEHICLE_ID:1235] [ERROR] [CODE:U0073] [Control module communication bus off]",
  "[2025-07-24 14:22:28] [VEHICLE_ID:2346] [WARN]  [CODE:P0500] [Vehicle speed sensor malfunction]",
  "[2025-07-24 14:22:36] [VEHICLE_ID:3457] [INFO]  [CODE:EVT05] [Fuel system pressure normal]",
  "[2025-07-24 14:22:44] [VEHICLE_ID:4568] [ERROR] [CODE:C1101] [Traction control system failure]",
  "[2025-07-24 14:22:52] [VEHICLE_ID:5679] [WARN]  [CODE:P0700] [Transmission control system warning]",
  "[2025-07-24 14:23:00] [VEHICLE_ID:6782] [INFO]  [CODE:EVT06] [Steering calibration successful]",
  "[2025-07-24 14:23:08] [VEHICLE_ID:7891] [ERROR] [CODE:U0121] [Lost communication with ABS module]",
  "[2025-07-24 14:23:16] [VEHICLE_ID:8902] [WARN]  [CODE:P0087] [Fuel rail pressure too low]",
  "[2025-07-24 14:23:24] [VEHICLE_ID:9013] [INFO]  [CODE:EVT07] [Emission readiness test completed]",
  "[2025-07-24 14:23:32] [VEHICLE_ID:1123] [ERROR] [CODE:B0020] [Passenger airbag deployment loop fault]",
  "[2025-07-24 14:23:40] [VEHICLE_ID:2234] [WARN]  [CODE:P0128] [Coolant temperature below thermostat range]",
  "[2025-07-24 14:23:48] [VEHICLE_ID:3345] [INFO]  [CODE:EVT08] [Oil pressure within specification]",
  "[2025-07-24 14:23:56] [VEHICLE_ID:4456] [ERROR] [CODE:C0035] [Left front wheel speed sensor circuit]",
  "[2025-07-24 14:24:04] [VEHICLE_ID:5567] [WARN]  [CODE:P0457] [Evaporative emission system leak detected]",
  "[2025-07-24 14:24:12] [VEHICLE_ID:6678] [INFO]  [CODE:EVT09] [Throttle response normal]",
  "[2025-07-24 14:24:20] [VEHICLE_ID:7789] [ERROR] [CODE:U0155] [Lost communication with instrument cluster]",
];

(async () => {
  await service.truncate();
})();

(async () => {
  for (const log of logs) {
    const event = parseLogLine(log);
    await service.create(event);
    console.log("✅ Seed data inserted", event?.id);
  }
  console.log("✅ Seed data inserted");
})();
