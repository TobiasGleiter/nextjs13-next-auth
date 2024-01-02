/*
 * THIS IS A PROXY TO THE TASK BACKEND
 */

export async function GET() {
  return new Response('/tasks', { status: 200 });
}
