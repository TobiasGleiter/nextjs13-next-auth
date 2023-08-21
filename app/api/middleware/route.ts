export function GET() {
  return new Response('Welcome, this is protected with Middleware.', {
    status: 200,
  });
}
