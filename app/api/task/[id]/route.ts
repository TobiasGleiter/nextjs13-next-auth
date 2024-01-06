import createApiBearerToken from '@/lib/auth/createToken';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: any) {
  const bearerToken = createApiBearerToken({
    payload: { username: 'Tobias Gleiter' },
  });

  const { id } = params;

  const res = await fetch(`${process.env.API_URL}/task/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

  const data = await res.json();

  console.log(data);

  return NextResponse.json({ status: 201 });
}
