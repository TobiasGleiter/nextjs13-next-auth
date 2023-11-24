'server only';

import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth/next';
import Connect from './connect';

// Delete the user via server action

export async function deleteUser() {
  const session = await getServerSession();

  if (session && session.user) {
    const collection = await Connect('users');
    const result = await collection.deleteOne({
      _id: session.user.id as ObjectId,
    });
    return result.deletedCount > 0; // Returns true if a user was deleted
  }
  return false;
}
