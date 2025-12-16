import { EventsRepository } from "./events.repo";
import { DiagnosticEvent } from "./events.model";

export class EventsService {
  private repo = new EventsRepository();

  create(event: DiagnosticEvent) {
    return this.repo.insert(event);
  }

  search(filters: any) {
    console.log("fil", filters);
    return this.repo.find(filters);
  }

  truncate() {
    return this.repo.truncate();
  }
}
