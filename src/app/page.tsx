"use client";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { TaskTable } from "@/components/TaskTable";
import AddTask from "@/components/AddTask";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-300">
      <AddTask />
      <TaskTable />
    </main>
  );
}
