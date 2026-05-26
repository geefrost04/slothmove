-- Run in Supabase: SQL Editor (once). Fixes "Could not find the 'dept' column".
-- Values used by SlothMove: 'industry' | 'opsd'

ALTER TABLE scores ADD COLUMN IF NOT EXISTS dept text;

COMMENT ON COLUMN scores.dept IS 'course track: industry = สปอ., opsd = สปท.กห.';
