"use client";

import AddTask from "@/components/AddTask";
import { TaskTable } from "@/components/TaskTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-300">
      <AddTask />
      <TaskTable />
    </main>
  );
}
