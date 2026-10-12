"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Brain, BookOpen, FileText, Zap, RotateCcw, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const QUICK_PROMPTS = [
  { label: "Jelaskan Talent Management", icon: "🎯" },
  { label: "Apa itu HCROI?", icon: "📊" },
  { label: "Buatkan 5 soal latihan CHCO", icon: "📝" },
  { label: "Ringkas Strategic HR", icon: "⚡" },
  { label: "Simulasi kasus CHCO", icon: "🎭" },
  { label: "Tips lulus ujian HR Staff", icon: "💡" },
];

const WELCOME_MSG: Message = {
  id: "welcome",
  role: "assistant",
  content: `Halo! Saya **AI HR Coach** Anda — Senior Human Capital Consultant & CHCO Mentor.

Saya siap membantu Anda dalam:
• 📚 **Penjelasan konsep** HR dan Human Capital
• 📝 **Pembuatan soal latihan** berdasarkan topik & level
• 📊 **Analisis kasus** CHCO strategis
• 💡 **Evaluasi jawaban** esai HR
• 🎯 **Panduan ujian** HR Staff & CHCO

Apa yang ingin Anda pelajari hari ini?`,
  timestamp: new Date(),
};

function formatContent(content: string) {
  // Simple markdown-like formatting
  return content
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return <strong key={i} className="font-bold">{line.slice(2, -2)}</strong>;
      }
      if (line.startsWith("• ")) {
        return <div key={i} className="flex gap-2 mt-1"><span>•</span><span>{line.slice(2)}</span></div>;
      }
      if (line === "") return <div key={i} className="h-2" />;
      // Handle inline bold
      const parts = line.split(/\*\*(.*?)\*\*/);
      return (
        <p key={i} className="leading-relaxed">
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="font-semibold">{p}</strong> : p)}
        </p>
      );
    });
}

export default function AICoachPage() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("session_default");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setSessionId(`session_${Date.now()}`);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userText,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
          sessionId,
        }),
      });

      if (!res.ok) throw new Error("Gagal mendapat respons AI");
      const data = await res.json();

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Maaf, terjadi kesalahan. Pastikan API key OpenAI sudah dikonfigurasi di .env.local",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([WELCOME_MSG]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="page-header mb-0">
          <div className="flex items-center gap-3">
            <div className="stat-icon bg-[#0B1F3A] animate-pulse-gold">
              <Brain className="w-5 h-5 text-[#D4A017]" />
            </div>
            <div>
              <h1 className="page-title text-2xl">AI HR Coach</h1>
              <p className="page-subtitle">Senior Human Capital Consultant & CHCO Mentor</p>
            </div>
          </div>
        </div>
        <button onClick={resetChat} className="btn-outline text-xs px-3 py-2">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Capability pills */}
      <div className="flex gap-2 flex-wrap mb-4">
        {[
          { label: "Jelaskan Konsep", icon: <BookOpen className="w-3 h-3" /> },
          { label: "Buat Soal Latihan", icon: <FileText className="w-3 h-3" /> },
          { label: "Simulasi CHCO", icon: <Zap className="w-3 h-3" /> },
        ].map(c => (
          <span key={c.label} className="badge-navy flex items-center gap-1 text-xs py-1 px-3">
            {c.icon} {c.label}
          </span>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-2xl border border-[#E2E8F0] flex flex-col overflow-hidden shadow-sm">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "flex-row")}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                msg.role === "user" ? "bg-[#0B1F3A]" : "bg-gradient-to-br from-[#D4A017] to-[#b8891a]"
              )}>
                {msg.role === "user"
                  ? <User className="w-4 h-4 text-white" />
                  : <Bot className="w-4 h-4 text-white" />
                }
              </div>
              <div className={cn(
                "max-w-[80%] px-4 py-3 rounded-2xl text-sm",
                msg.role === "user"
                  ? "chat-bubble-user"
                  : "chat-bubble-ai"
              )}>
                <div className="space-y-1">{formatContent(msg.content)}</div>
                <p className={cn(
                  "text-xs mt-2",
                  msg.role === "user" ? "text-white/60 text-right" : "text-[#A0AEC0]"
                )}>
                  {msg.timestamp.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A017] to-[#b8891a] flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="chat-bubble-ai flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-[#0B1F3A]" />
                <span className="text-[#718096] text-sm">AI sedang berpikir...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-[#718096] mb-2 font-medium">Pertanyaan cepat:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {QUICK_PROMPTS.map(qp => (
                <button
                  key={qp.label}
                  onClick={() => sendMessage(qp.label)}
                  className="text-left text-xs px-3 py-2 rounded-xl bg-[#F5F7FA] hover:bg-[#0B1F3A] hover:text-white transition-all duration-200 border border-[#E2E8F0] hover:border-[#0B1F3A] font-medium"
                >
                  {qp.icon} {qp.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-[#E2E8F0] p-3">
          <div className="flex gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tanyakan konsep HR, minta soal latihan, atau simulasi kasus CHCO..."
              rows={2}
              className="flex-1 input-field resize-none text-sm"
              disabled={loading}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              className={cn(
                "px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2",
                input.trim() && !loading
                  ? "btn-primary"
                  : "bg-[#E2E8F0] text-[#A0AEC0] cursor-not-allowed"
              )}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-[#A0AEC0] mt-1.5 text-center">
            Enter untuk kirim • Shift+Enter untuk baris baru
          </p>
        </div>
      </div>
    </div>
  );
}
