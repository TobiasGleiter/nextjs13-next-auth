import createApiBearerToken from '@/lib/auth/createToken';
import { Suspense } from 'react';

export default async function DataPage() {
  const data = getData();

  return (
    <div className="pt-20  bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent h-screen">
      <div className="space-y-2 mb-4">
        <h1 className="font-bold text-4xl">
          Load Data from external API with
          <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Authorization Header
          </span>
          .
        </h1>
        <h2 className="font-semibold text-xl">
          In this case if the client loads the page the /api/task endpoint is
          called which calls the external API endpoint.
        </h2>
      </div>
      <div className="space-y-2 text-neutral-300">
        <p className="">
          Data Loaded from the external API endpoint: Server Side:
        </p>
        <Suspense fallback="Loading">
          <TaskList promise={data} />
        </Suspense>
      </div>
    </div>
  );
}

async function getData() {
  // Create short-lived JSON Webtoken
  const bearerToken = createApiBearerToken({
    payload: { username: 'Tobias Gleiter' },
  });

  const res = await fetch('http://localhost:8080/task', {
    headers: { Authorization: `Bearer ${bearerToken}` },
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

  return tasks.map((task: any, i: number) => {
    return (
      <div key={i} className="bg-white/20 rounded p-2">
        {task.title}
      </div>
    );
  });
}
