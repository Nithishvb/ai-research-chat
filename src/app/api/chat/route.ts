import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (
      body.apiKey == null ||
      body.apiKey == undefined ||
      body.apiKey.trim() == ""
    ) {
      return new Response(
        JSON.stringify({
          status: 401,
          message: "Please Provide OpenAI KEY",
        }),
        { status: 401 }
      );
    }

    const openai = new OpenAI({
      apiKey: body.apiKey,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: body.prompt }],
      model: "gpt-4o",
    });

    let response = null;

    if (chatCompletion.choices[0].message.content?.includes("json")) {
      response = JSON.parse(
        chatCompletion.choices[0].message.content
          .replace(/```json/g, "")
          .replace(/```/g, "")
      );
    } else {
      if (chatCompletion.choices[0].message.content) {
        response = JSON.parse(
          chatCompletion.choices[0].message.content.replace(/``/g, "")
        );
      }
    }

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Data fetched successfully",
        data: JSON.stringify(response),
      })
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        status: 401,
        message:
          err.code === "invalid_api_key" ? "Invalid Api Key" : err.message,
      }),
      { status: 401 }
    );
  }
}
