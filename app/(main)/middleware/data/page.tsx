import TaskForm from '@/components/form/TaskForm';
import { TaskList } from '@/components/tasks/TaskList';
import { getData } from '@/lib/tasks/getTasks';
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
          called which calls the external API endpoint. The api endpoint is
          called everytime the page is requested, therefore it produces many
          requests.
        </h2>
      </div>
      <div className="space-y-2 text-neutral-300">
        <Suspense fallback="Loading Form">
          <TaskForm />
        </Suspense>
        <Suspense fallback="Loading">
          <TaskList promise={data} />
        </Suspense>
      </div>
    </div>
  );
}
