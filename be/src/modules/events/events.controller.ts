import { Request, Response } from "express";
import { EventsService } from "./events.service";

const service = new EventsService();

export const getEvents = async (req: Request, res: Response) => {
  // console.log("req", req.query);
  const events = await service.search(req.query);
  res.json(events);
};
