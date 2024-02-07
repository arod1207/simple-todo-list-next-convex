import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function AddTask() {
  const [task, setTask] = useState("");

  const addTask = useMutation(api.tasks.createTask);

  const handleAddTask = () => {
    addTask({ text: task, isCompleted: false });
    setTask("");
  };

  return (
    <div className="w-full  flex gap-3 m-auto p-6 md:w-1/3">
      <Input
        type="text"
        placeholder="Add A Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
}
