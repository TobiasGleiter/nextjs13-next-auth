import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession();

  if (session && session.user)
    return new Response('Welcome, this is protected with getServerSession.', {
      status: 200,
    });

  return new Response('Not logged in. (getServerSession)', { status: 401 });
}
