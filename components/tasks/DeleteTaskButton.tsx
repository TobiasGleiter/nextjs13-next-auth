'use client';

export interface IDeleteTaskButton {
  taskId: string;
}

export default function DeleteTaskButton({ taskId }: IDeleteTaskButton) {
  const handleDelete = async () => {
    if (!taskId) {
      return;
    }
    const res = await deleteTask(taskId);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="border border-red-600 px-4 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
}

export const deleteTask = async (id: any) => {
  const res = await fetch(`/api/task/${id}`, {
    method: 'PATCH',
  });

  return res;
};
