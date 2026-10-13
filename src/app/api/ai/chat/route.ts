import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    // Fitur AI dinonaktifkan sementara agar aplikasi dapat berjalan stabil tanpa dependency API key eksternal
    return NextResponse.json({
      message:
        "🤖 **AI Coach Mode Offline**\n\nFitur konsultasi AI saat ini sedang dinonaktifkan sementara. Anda tetap dapat mengakses penuh seluruh materi pembelajaran di **Learning Center**, modul **HR Staff**, modul **CHCO**, **Bank Soal**, dan **HR Toolkit** di menu samping!",
      sessionId,
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("AI Chat error:", errMsg);
    return NextResponse.json(
      { message: "Fitur AI saat ini sedang tidak aktif." },
      { status: 200 }
    );
  }
}
