import Connect from './connect';

export async function deleteUser(email: string) {
  const collection = await Connect('users');
  const result = await collection.deleteOne({ email });
  return result.deletedCount > 0; // Returns true if a user was deleted
}
