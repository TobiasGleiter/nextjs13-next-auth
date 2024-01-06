'use client';
import TaskForm from '@/components/form/TaskForm';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Task {
  user_id: string;
  title: string;
  description: string;
  created_at: string;
  completed_at: string | null;
  // Add other properties if available in your task object
}

export default function ClientPage() {
  const { data, isLoading } = useSWR('/api/task', fetcher);

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (data && data.data) {
      const parsedData = JSON.parse(data.data);
      setTasks(parsedData);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="pt-20  bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent h-screen">
        Loading...
      </div>
    );
  }
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
        <TaskForm />
        <p className="">Data Loaded from the external API endpoint:</p>
        {tasks.map((task: Task, i: number) => {
          return (
            <div key={task.created_at} className="bg-white/20 rounded p-2">
              {i + 1}: {task.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
