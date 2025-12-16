import { Router } from "express";
import { getEvents } from "./events.controller";

const router = Router();

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Retrieve diagnostic events
 *     parameters:
 *       - in: query
 *         name: vehicle_id
 *         schema:
 *           type: string
 *         description: Vehicle ID
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         description: Error code
 *       - in: query
 *         name: level
 *         schema:
 *            type: string
 *            enum:
 *             - INFO
 *             - WARN
 *             - ERROR
 *             - CRITICAL
 *         description: Severity
 *       - in: query
 *         name: from
 *         required: false
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Start timestamp (ISO 8601, inclusive)
 *
 *       - in: query
 *         name: to
 *         required: false
 *         schema:
 *           type: string
 *           format: date-time
 *         description: End timestamp (ISO 8601, inclusive)
 *     responses:
 *       200:
 *         description: List of diagnostic events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   vehicle_id:
 *                     type: string
 *                   level:
 *                     type: string
 *                   code:
 *                     type: string
 *                   message:
 *                     type: string
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 */
router.get("/", getEvents);

export default router;
