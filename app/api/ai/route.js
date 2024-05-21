import { NextResponse } from 'next/server'
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey:process.env.NEXT_PUBLIC_OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
  });

export async function POST(request){ // POST-TIP DE REQUEST HTTP

    const mesaj = await request.json();

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: mesaj.prompt}],
        model: "gpt-3.5-turbo",
    });
    return NextResponse.json({raspunsGpt: completion}, {status: 200})
}