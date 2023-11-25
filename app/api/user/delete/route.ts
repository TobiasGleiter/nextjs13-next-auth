import Connect from '@/lib/mongodb/connect';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/options';

export async function POST() {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    const userId = new ObjectId(session.user.id);

    const A = await Connect('accounts');
    const U = await Connect('users');

    await A.findOne({ userId: userId });
    await U.findOne({ _id: userId });

    const resA = await A.deleteMany({ userId: userId });
    const resU = await U.deleteMany({ _id: userId });

    // Account deletion status
    if (resA.deletedCount > 0 && resU.deletedCount > 0) {
      return NextResponse.json(
        { success: 'Account successfully deleted.' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    console.log(session.user.email);
    console.log(session.user);
    console.log(session.user.id);
    return new Response('Welcome, this is protected with getServerSession.', {
      status: 200,
    });
  }
}
