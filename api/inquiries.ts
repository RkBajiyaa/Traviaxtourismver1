import type { VercelRequest, VercelResponse } from '@vercel/node';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import { z } from 'zod';
import { inquiries, insertInquirySchema } from '../shared/schema';

const { Pool } = pg;

let pool: pg.Pool | null = null;

function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  
  if (!pool) {
    pool = new Pool({ 
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });
  }
  
  return drizzle(pool);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const db = getDb();
      
      const [inquiry] = await db.insert(inquiries).values(validatedData).returning();
      
      return res.status(201).json(inquiry);
    } catch (error) {
      console.error('Error creating inquiry:', error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: 'Invalid inquiry data', details: error.errors });
      }
      return res.status(500).json({ error: 'Failed to create inquiry' });
    }
  }

  if (req.method === 'GET') {
    try {
      const db = getDb();
      const allInquiries = await db.select().from(inquiries);
      return res.status(200).json(allInquiries);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      return res.status(500).json({ error: 'Failed to fetch inquiries' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
