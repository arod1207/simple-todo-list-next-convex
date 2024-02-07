import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const createTask = mutation({
  args: {
    text: v.string(),
    isCompleted: v.boolean(),
  },
  handler: async (ctx, args) => {
    const newTaskId = await ctx.db.insert("tasks", {
      text: args.text,
      isCompleted: args.isCompleted,
    });
    return newTaskId;
  },
});

export const updateStatus = mutation({
  args: {
    _id: v.id("tasks"),
    isCompleted: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args._id, { isCompleted: args.isCompleted });
  },
});

export const deleteTask = mutation({
  args: { _id: v.id("tasks") },
  handler: async (ctx, args) => {
    const task = await ctx.db.delete(args._id);
    return task;
  },
});
