import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const accessToken: any = req.nextUrl.searchParams.get("token");
  const emailToFetch: any = req.nextUrl.searchParams.get("emailToFetch");

  if (!accessToken) {
    return new Response(
      JSON.stringify({
        status: 401,
        message: "Access token is missing. Authorization required.",
      }),
      { status: 401 }
    );
  }

  try {
    const oauth2Client = new OAuth2Client();
    oauth2Client.setCredentials({ access_token: accessToken });

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    // Fetch the list of messages
    const response : any = await gmail.users.messages.list({
      userId: "me",
      maxResults: parseInt(emailToFetch),
    });

    // Fetch the details of each message
    const messages = await Promise.all(
      response?.data?.messages.map(async (message: any) => {
        const msg: any = await gmail.users.messages.get({
          userId: "me",
          id: message.id,
        });
        const headers = msg.data.payload?.headers;
        const subjectHeader = headers?.find((header: any) => header.name === 'Subject');
        const subject = subjectHeader?.value;
        msg.data.subject = subject;
        return msg.data;
      })
    );

    return new NextResponse(
      JSON.stringify({
        status: 200,
        message: messages,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: 500,
        message: "Error Fetching Emails",
        data: error?.message,
      }),
      { status: 500 }
    );
  }
}
