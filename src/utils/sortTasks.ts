// Generic function to sort the tasks array
//
// The .sort() method receives a function that compares two items (a, b) and must return:
// - A negative number (-1) if "a" should come before "b".
// - A positive number (1) if "a" should come after "b".
// - Zero (0) if the order doesn't need to be changed.
//
// The function takes care of:
// 1. If the value is null, it moves to the end of the list.
// 2. If it is a number, it sorts numerically (ascending or descending).
// 3. If it is a text, it sorts alphabetically (ascending or descending).
//
// The spread [...tasks] creates a copy of the original array to not alter it directly.

import type { TaskModel } from "../models/TaskModel";

// Define the expected parameters for the function
export type SortTasksOptions = {
  tasks: TaskModel[]; // List of tasks to be sorted
  direction?: "asc" | "desc"; // Sorting direction: ascending or descending (optional)
  field?: keyof TaskModel; // Which task field will be used for sorting (optional)
};

export function sortTasks({
  field = "startDate", // If the field is not specified, we use 'startDate' as the default
  direction = "desc", // If the direction is not specified, we use 'desc' (descending)
  tasks = [], // If no list is passed, we use an empty list
}: SortTasksOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    // We get the value of the chosen property (e.g. startDate) in each task
    const aValue = a[field];
    const bValue = b[field];

    // --- HANDLING NULL VALUES ---

    // If both are null, we maintain the current order
    if (aValue === null && bValue === null) return 0;

    // If only the first is null, it goes to the end
    if (aValue === null) return 1;

    // If only the second is null, it goes to the end
    if (bValue === null) return -1;

    // --- NUMERIC COMPARISON ---

    // If both values are numbers, we do a subtraction to sort
    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc"
        ? aValue - bValue // Ex: 1, 2, 3...
        : bValue - aValue; // Ex: 3, 2, 1...
    }

    // --- STRING COMPARISON ---

    // If both values are text, we use localeCompare to compare in alphabetical order
    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction === "asc"
        ? aValue.localeCompare(bValue) // A -> Z
        : bValue.localeCompare(aValue); // Z -> A
    }

    // --- UNHANDLED CASES ---

    // If neither is a number, nor text, nor null, we don't change the order
    return 0;
  });
}
