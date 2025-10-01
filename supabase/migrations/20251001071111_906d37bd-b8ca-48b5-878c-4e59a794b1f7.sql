-- Add created_by column to quotations table
ALTER TABLE quotations ADD COLUMN IF NOT EXISTS created_by text;