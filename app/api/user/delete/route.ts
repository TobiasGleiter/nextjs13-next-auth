import Connect from '@/lib/mongodb/connect';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/options';

export async function POST() {
  const session = await getServerSession(authOptions);

  if (session && session.user) {
    const userId = new ObjectId(session.user.id);
    const A = await Connect('accounts');
    const U = await Connect('users');
    const account = await A.findOne({ userId: userId });
    console.log('account', account);
    const user = await U.findOne({ _id: userId });
    console.log('user', user);
    const resA = await A.deleteMany({ userId: userId });
    const resU = await U.deleteMany({ _id: userId });

    if (resA.deletedCount > 0 && resU.deletedCount > 0) {
      return new Response('Successfully deleted the Account.', {
        status: 200,
      });
    } else {
      return new Response('Error while delting the Account.', {
        status: 500,
      });
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
