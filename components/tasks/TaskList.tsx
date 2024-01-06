import { Suspense } from 'react';
import DeleteTaskButton from './DeleteTaskButton';

export interface IPostList {
  promise: Promise<any>;
}

export async function TaskList({ promise }: IPostList) {
  const tasks = await promise;

  if (!tasks) return <div>Nothing found</div>;

  return tasks.map((task: any, i: number) => {
    return (
      <div key={i} className="flex justify-between bg-white/20 rounded p-2">
        <p>{task.title}</p>
        <Suspense fallback="Loading Delete Button">
          <DeleteTaskButton taskId={task._id} />
        </Suspense>
      </div>
    );
  });
}
