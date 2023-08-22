import { getServerSession } from 'next-auth/next';

export async function POST() {
  const session = await getServerSession();

  if (session && session.user) {
    console.log(session.user.email);
    console.log(session.user.id);
    return new Response('Welcome, this is protected with getServerSession.', {
      status: 200,
    });
  }
}

export async function GET() {
  const session = await getServerSession();

  if (session && session.user) {
    console.log(session.user.email);
    console.log(session.user.id);
    return new Response('Welcome, this is protected with getServerSession.', {
      status: 200,
    });
  }
}
