-- Traviax Tourism Database Setup Script
-- Run this SQL in your Neon database console to create the required tables

-- Enable UUID generation (required for gen_random_uuid)
-- Note: Neon has this enabled by default, but run this just in case
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users table (for future authentication)
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Inquiries table (for contact form submissions)
CREATE TABLE IF NOT EXISTS inquiries (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Optional: Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
