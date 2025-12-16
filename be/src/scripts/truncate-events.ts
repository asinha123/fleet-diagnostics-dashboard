import { EventsService } from '../modules/events/events.service';

const service = new EventsService();

(async () => {
  await service.truncate();
})();
