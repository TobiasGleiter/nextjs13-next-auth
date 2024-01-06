import createApiBearerToken from '@/lib/auth/createToken';
import { NextResponse } from 'next/server';

/***
 * This API Endpoints fetches data from an external API endpoint
 */

export async function GET() {
  // Create short-lived JSON Webtoken
  const bearerToken = createApiBearerToken({
    payload: { username: 'Tobias Gleiter' },
  });

  // Make the call to external API endpoint with bearer token
  const res = await fetch(process.env.API_URL + '/task', {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
    cache: 'force-cache',
  });

  if (!res.ok) {
    return NextResponse.json({ status: 500 });
  }

  const data = await res.json();

  console.log(data.data);

  return NextResponse.json(data.data, { status: data.status });
}

export async function POST(req: Request) {
  const bearerToken = createApiBearerToken({
    payload: { username: 'Tobias Gleiter' },
  });

  const { title } = await req.json();

  const body = {
    user_id: '6582bc1f8f4d23c9fc8d751d',
    title: title,
    description: 'yaaa',
  };

  // Make the call to external API endpoint with bearer token
  const res = await fetch(process.env.API_URL + '/task', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  console.log(data.data);

  return NextResponse.json(data.data, { status: data.status });
}
