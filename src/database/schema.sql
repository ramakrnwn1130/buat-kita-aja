-- ================================================
-- HR MASTER ACADEMY AI - DATABASE SCHEMA
-- Supabase PostgreSQL + pgvector
-- ================================================

-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- ================================================
-- USERS PROFILE
-- ================================================
CREATE TABLE IF NOT EXISTS users_profile (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  target_certification TEXT DEFAULT 'BOTH' CHECK (target_certification IN ('HR_STAFF', 'CHCO', 'BOTH')),
  exam_date DATE,
  study_hours_per_day INTEGER DEFAULT 2,
  current_level TEXT DEFAULT 'BEGINNER' CHECK (current_level IN ('BEGINNER', 'INTERMEDIATE', 'ADVANCED')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- PROGRAMS
-- ================================================
CREATE TABLE IF NOT EXISTS programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  certification_type TEXT NOT NULL CHECK (certification_type IN ('HR_STAFF', 'CHCO')),
  total_modules INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- MODULES
-- ================================================
CREATE TABLE IF NOT EXISTS modules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  total_lessons INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(program_id, slug)
);

-- ================================================
-- LESSONS
-- ================================================
CREATE TABLE IF NOT EXISTS lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  objective TEXT,
  definition TEXT,
  key_concepts TEXT,
  frameworks TEXT,
  process TEXT,
  business_example TEXT,
  case_study TEXT,
  exam_highlight TEXT,
  summary TEXT,
  order_index INTEGER NOT NULL,
  estimated_minutes INTEGER DEFAULT 30,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(module_id, slug)
);

-- ================================================
-- LEARNING PROGRESS
-- ================================================
CREATE TABLE IF NOT EXISTS learning_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'NOT_STARTED' CHECK (status IN ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED')),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- ================================================
-- NOTES
-- ================================================
CREATE TABLE IF NOT EXISTS notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- BOOKMARKS
-- ================================================
CREATE TABLE IF NOT EXISTS bookmarks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- ================================================
-- QUESTIONS
-- ================================================
CREATE TABLE IF NOT EXISTS questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  topic TEXT NOT NULL,
  difficulty TEXT DEFAULT 'MEDIUM' CHECK (difficulty IN ('EASY', 'MEDIUM', 'HARD')),
  certification_type TEXT DEFAULT 'BOTH' CHECK (certification_type IN ('HR_STAFF', 'CHCO', 'BOTH')),
  question TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  answer TEXT NOT NULL CHECK (answer IN ('A', 'B', 'C', 'D')),
  explanation TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- QUIZ ATTEMPTS
-- ================================================
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  certification_type TEXT NOT NULL CHECK (certification_type IN ('HR_STAFF', 'CHCO')),
  mode TEXT DEFAULT 'PRACTICE' CHECK (mode IN ('PRACTICE', 'SIMULATION')),
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER DEFAULT 0,
  score DECIMAL(5,2) DEFAULT 0,
  time_taken_seconds INTEGER,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- QUIZ ANSWERS
-- ================================================
CREATE TABLE IF NOT EXISTS quiz_answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  attempt_id UUID REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  selected_answer TEXT NOT NULL CHECK (selected_answer IN ('A', 'B', 'C', 'D')),
  is_correct BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- DOCUMENTS
-- ================================================
CREATE TABLE IF NOT EXISTS documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  status TEXT DEFAULT 'PROCESSING' CHECK (status IN ('PROCESSING', 'READY', 'ERROR')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- DOCUMENT CHUNKS (RAG)
-- ================================================
CREATE TABLE IF NOT EXISTS document_chunks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  embedding vector(1536),
  chunk_index INTEGER NOT NULL,
  page_number INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS document_chunks_embedding_idx 
  ON document_chunks USING ivfflat (embedding vector_cosine_ops) 
  WITH (lists = 100);

-- ================================================
-- AI HISTORY
-- ================================================
CREATE TABLE IF NOT EXISTS ai_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- STUDY PLAN
-- ================================================
CREATE TABLE IF NOT EXISTS study_plan (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  certification_type TEXT NOT NULL CHECK (certification_type IN ('HR_STAFF', 'CHCO')),
  plan_data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- COMPETENCY SCORES
-- ================================================
CREATE TABLE IF NOT EXISTS competency_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  score DECIMAL(5,2) DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, category)
);

-- ================================================
-- READINESS SCORE
-- ================================================
CREATE TABLE IF NOT EXISTS readiness_score (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  certification_type TEXT NOT NULL CHECK (certification_type IN ('HR_STAFF', 'CHCO')),
  learning_completion DECIMAL(5,2) DEFAULT 0,
  quiz_performance DECIMAL(5,2) DEFAULT 0,
  simulation_exam DECIMAL(5,2) DEFAULT 0,
  learning_consistency DECIMAL(5,2) DEFAULT 0,
  total_score DECIMAL(5,2) DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, certification_type)
);

-- ================================================
-- HR CALCULATIONS
-- ================================================
CREATE TABLE IF NOT EXISTS hr_calculations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  calculator_type TEXT NOT NULL,
  input_data JSONB NOT NULL,
  result JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- ROW LEVEL SECURITY
-- ================================================
ALTER TABLE users_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_chunks ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_plan ENABLE ROW LEVEL SECURITY;
ALTER TABLE competency_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE readiness_score ENABLE ROW LEVEL SECURITY;
ALTER TABLE hr_calculations ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON users_profile FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users can manage own progress" ON learning_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own notes" ON notes FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own bookmarks" ON bookmarks FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own quiz attempts" ON quiz_attempts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own quiz answers" ON quiz_answers FOR ALL USING (
  attempt_id IN (SELECT id FROM quiz_attempts WHERE user_id = auth.uid())
);
CREATE POLICY "Users can manage own documents" ON documents FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own document chunks" ON document_chunks FOR ALL USING (
  document_id IN (SELECT id FROM documents WHERE user_id = auth.uid())
);
CREATE POLICY "Users can manage own AI history" ON ai_history FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own study plan" ON study_plan FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own competency scores" ON competency_scores FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own readiness score" ON readiness_score FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own HR calculations" ON hr_calculations FOR ALL USING (auth.uid() = user_id);

-- Public read for programs, modules, lessons, questions
CREATE POLICY "Anyone can read programs" ON programs FOR SELECT USING (true);
CREATE POLICY "Anyone can read modules" ON modules FOR SELECT USING (true);
CREATE POLICY "Anyone can read lessons" ON lessons FOR SELECT USING (true);
CREATE POLICY "Anyone can read questions" ON questions FOR SELECT USING (true);

-- ================================================
-- TRIGGER: Auto-create user profile on signup
-- ================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO users_profile (id, email, full_name, avatar_url)
  VALUES (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ================================================
-- FUNCTION: Semantic search for RAG
-- ================================================
CREATE OR REPLACE FUNCTION match_document_chunks(
  query_embedding vector(1536),
  match_threshold FLOAT DEFAULT 0.78,
  match_count INT DEFAULT 5,
  p_user_id UUID DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  document_id UUID,
  content TEXT,
  chunk_index INT,
  page_number INT,
  similarity FLOAT
)
LANGUAGE SQL STABLE AS $$
  SELECT
    dc.id,
    dc.document_id,
    dc.content,
    dc.chunk_index,
    dc.page_number,
    1 - (dc.embedding <=> query_embedding) AS similarity
  FROM document_chunks dc
  JOIN documents d ON d.id = dc.document_id
  WHERE
    (p_user_id IS NULL OR d.user_id = p_user_id)
    AND 1 - (dc.embedding <=> query_embedding) > match_threshold
  ORDER BY dc.embedding <=> query_embedding
  LIMIT match_count;
$$;
