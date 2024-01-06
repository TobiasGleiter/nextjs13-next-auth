'use client';
import { useState } from 'react';

interface TaskFormProps {}

const TaskForm: React.FC<TaskFormProps> = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        // Optionally handle the response if needed
        const data = await response.json();
        console.log('Task created:', data);
        // Invoke the callback to handle form submission (optional)
        // Optionally, reset the title after successful submission
        setTitle('');
      } else {
        // Handle errors if the request fails
        console.error('Failed to create task');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div>
        <label className="">
          Create new Task:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full bg-white/20 border rounded-lg px-2"
          />
        </label>
      </div>
      <button type="submit" className="bg-white rounded-full text-black">
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
