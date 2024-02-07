import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegTrashAlt } from "react-icons/fa";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import React, { useState } from "react";
import { BlobOptions } from "buffer";

export function TaskTable() {
  const tasks = useQuery(api.tasks.get);
  const status = useMutation(api.tasks.updateStatus);
  const deleteTask = useMutation(api.tasks.deleteTask);

  console.log(tasks);

  const handleStatus = (id: any, currentState: boolean) => {
    status({ _id: id, isCompleted: !currentState });
  };

  return (
    <Table className="w-2/3 m-auto">
      <TableCaption>Your task to complete</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Todo</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center">Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {tasks?.map(({ isCompleted, text, _id }) => (
          <TableRow
            key={_id}
            className={isCompleted ? "line-through text-red-500" : ""}
          >
            <TableCell className="flex gap-1 items-center">
              <Checkbox
                onCheckedChange={() => handleStatus(_id, isCompleted)}
              />
              {text}
            </TableCell>
            <TableCell>{isCompleted ? "completed" : "not completed"}</TableCell>
            <TableCell className="text-center">
              <button onClick={() => deleteTask({ _id })}>
                <FaRegTrashAlt color="red" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
