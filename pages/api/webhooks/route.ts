import type { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
interface FormData {
    employee: string;
    partner: boolean;
    children: number;
    children18: number;
    shabbat: boolean;
    roomNumber: string;
    attendees: number;
    connectingDoor: boolean;
    transportation: string;
    basketballTournament: boolean;
  }
// Function to validate form data.
const validateFormData = (data:FormData) => {
  if (!data.employee || typeof data.employee !== 'string') return false;
  if (typeof data.partner !== 'boolean') return false;
  if (isNaN(Number(data.children)) || Number(data.children18) < 0) return false;
  if (typeof data.shabbat !== 'boolean') return false;
  if (!data.roomNumber || typeof data.roomNumber !== 'string') return false;
  if (isNaN(Number(data.attendees))) return false;
  if (typeof data.connectingDoor !== 'boolean') return false;
  if (!data.transportation || typeof data.transportation !== 'string') return false;
  return true;
};

/* function that serves as a Next.js API route handler
that validates and saves form data to an SQLite database for POST requests.*/ 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const isValid = validateFormData(req.body as FormData);
    if (!isValid) {
      res.status(400).json({ error: 'Validation failed' });
      return;
    }
    try {
      const db = await open({
        filename: './eventDb.sqlite',
        driver: sqlite3.Database
      });
      
      await db.run(
        `INSERT INTO registrations (employee, partner, children, children18, shabbat, roomNumber, attendees, connectingDoor, transportation, basketballTournament)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          req.body.employee, req.body.partner ? 1 : 0, req.body.children, req.body.children18,
          req.body.shabbat ? 1 : 0, req.body.roomNumber, req.body.attendees, req.body.connectingDoor ? 1 : 0,
          req.body.transportation, req.body.basketballTournament ? 1 : 0
        ]
      );
      
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Failed to insert data:', error);
      res.status(500).json({ error: 'Failed to save data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}