import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';

export default async function DataPage() {
  const data = await getData();
  //console.log(data);

  return (
    <div className="pt-20  bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent h-screen">
      <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="text-2xl">Tasks</h2>
        <Suspense fallback="Loading">
          <TaskList promise={data} />
        </Suspense>
      </div>
    </div>
  );
}

async function getData() {
  const session = await getServerSession(authOptions);
  const token = session?.access_token;

  const res = await fetch('http://127.0.0.1:8000/task', {
    //headers: { Authorization: `Bearer ${token}` },
    cache: 'no-cache',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw Error();
  }

  const { data } = await res.json();
  const jsonData = JSON.parse(data.data);

  return jsonData;
}

export interface IPostList {
  promise: Promise<any>;
}

async function TaskList({ promise }: IPostList) {
  const tasks = await promise;

  return (
    <div className="flex flex-col gap-2 w-full">
      {tasks.map((task: any, i: number) => {
        return (
          <div key={i} className="p-1 bg-red-300 text-black rounded">
            {task.title}
          </div>
        );
      })}
    </div>
  );
}
