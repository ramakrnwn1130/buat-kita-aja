// =================== USERS ====================
export type UserProfile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  target_certification: "HR_STAFF" | "CHCO" | "BOTH";
  exam_date: string | null;
  study_hours_per_day: number;
  current_level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  created_at: string;
  updated_at: string;
};

// =================== PROGRAMS ====================
export type Program = {
  id: string;
  name: string;
  slug: string;
  description: string;
  certification_type: "HR_STAFF" | "CHCO";
  total_modules: number;
  created_at: string;
};

// =================== MODULES ====================
export type Module = {
  id: string;
  program_id: string;
  name: string;
  slug: string;
  description: string;
  order_index: number;
  total_lessons: number;
  created_at: string;
};

// =================== LESSONS ====================
export type Lesson = {
  id: string;
  module_id: string;
  title: string;
  slug: string;
  objective: string;
  definition: string | null;
  key_concepts: string | null;
  frameworks: string | null;
  process: string | null;
  business_example: string | null;
  case_study: string | null;
  exam_highlight: string | null;
  summary: string | null;
  order_index: number;
  estimated_minutes: number;
  created_at: string;
};

// =================== PROGRESS ====================
export type LearningProgress = {
  id: string;
  user_id: string;
  lesson_id: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  completed_at: string | null;
  created_at: string;
  updated_at: string;
};

// =================== NOTES ====================
export type Note = {
  id: string;
  user_id: string;
  lesson_id: string | null;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

// =================== BOOKMARKS ====================
export type Bookmark = {
  id: string;
  user_id: string;
  lesson_id: string;
  created_at: string;
};

// =================== QUESTIONS ====================
export type Question = {
  id: string;
  category: string;
  topic: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  certification_type: "HR_STAFF" | "CHCO" | "BOTH";
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  answer: "A" | "B" | "C" | "D";
  explanation: string;
  created_at: string;
};

// =================== QUIZ ====================
export type QuizAttempt = {
  id: string;
  user_id: string;
  certification_type: "HR_STAFF" | "CHCO";
  mode: "PRACTICE" | "SIMULATION";
  total_questions: number;
  correct_answers: number;
  score: number;
  time_taken_seconds: number | null;
  completed_at: string | null;
  created_at: string;
};

export type QuizAnswer = {
  id: string;
  attempt_id: string;
  question_id: string;
  selected_answer: "A" | "B" | "C" | "D";
  is_correct: boolean;
  created_at: string;
};

// =================== DOCUMENTS ====================
export type Document = {
  id: string;
  user_id: string;
  name: string;
  file_url: string;
  file_type: string;
  file_size: number;
  status: "PROCESSING" | "READY" | "ERROR";
  created_at: string;
};

export type DocumentChunk = {
  id: string;
  document_id: string;
  content: string;
  embedding: number[] | null;
  chunk_index: number;
  page_number: number | null;
  created_at: string;
};

// =================== AI ====================
export type AIHistory = {
  id: string;
  user_id: string;
  session_id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
};

// =================== STUDY PLAN ====================
export type StudyPlan = {
  id: string;
  user_id: string;
  certification_type: "HR_STAFF" | "CHCO";
  plan_data: StudyPlanData;
  created_at: string;
  updated_at: string;
};

export type StudyPlanData = {
  months: StudyMonth[];
};

export type StudyMonth = {
  month: number;
  theme: string;
  topics: string[];
  daily_tasks: string[];
};

// =================== ANALYTICS ====================
export type CompetencyScore = {
  id: string;
  user_id: string;
  category: string;
  score: number;
  updated_at: string;
};

export type ReadinessScore = {
  id: string;
  user_id: string;
  certification_type: "HR_STAFF" | "CHCO";
  learning_completion: number;
  quiz_performance: number;
  simulation_exam: number;
  learning_consistency: number;
  total_score: number;
  updated_at: string;
};

// =================== HR CALCULATIONS ====================
export type HRCalculation = {
  id: string;
  user_id: string;
  calculator_type: string;
  input_data: Record<string, number | string>;
  result: Record<string, number | string>;
  created_at: string;
};

// =================== NAV ====================
export type NavItem = {
  title: string;
  href: string;
  icon: string;
  badge?: string;
};
