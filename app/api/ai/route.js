import { NextResponse } from 'next/server'
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(request){ // POST-TIP DE REQUEST HTTP
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });
    return NextResponse.json({raspunsGpt: completion}, {status: 200})
}