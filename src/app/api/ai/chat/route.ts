import { OpenAI } from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `Anda adalah Senior Human Capital Consultant, HR Certification Trainer, dan CHCO Mentor berpengalaman 20 tahun.

Anda membantu pengguna mempersiapkan sertifikasi:
1. HR Staff Certification (BNSP/setara)
2. CHCO - Chief Human Capital Officer

Ketika menjelaskan konsep, gunakan format:
📌 **Definisi**
🔑 **Konsep Kunci**
🔧 **Framework/Model**
💼 **Contoh Bisnis**
⚡ **Highlight Ujian**
❓ **Soal Latihan**

Ketika membuat soal latihan:
- Buat soal pilihan ganda (A, B, C, D)
- Sertakan kunci jawaban dan penjelasan
- Sesuaikan dengan tingkat kesulitan yang diminta

Ketika mensimulasikan kasus CHCO:
- Berikan konteks situasi bisnis yang realistis
- Evaluasi jawaban berdasarkan: pemikiran strategis, penyelarasan bisnis, pengetahuan HR
- Berikan skor dan umpan balik konstruktif

Gunakan Bahasa Indonesia yang profesional namun mudah dipahami.
Gunakan emoji yang relevan untuk membuat konten lebih engaging.`;

export async function POST(req: NextRequest) {
  try {
    const { messages, sessionId } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { message: "⚠️ OpenAI API key belum dikonfigurasi. Tambahkan OPENAI_API_KEY di .env.local" },
        { status: 200 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const message = completion.choices[0]?.message?.content ?? "Maaf, tidak ada respons.";

    return NextResponse.json({ message, sessionId });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("AI Chat error:", errMsg);
    return NextResponse.json(
      { message: `Error: ${errMsg}` },
      { status: 500 }
    );
  }
}
