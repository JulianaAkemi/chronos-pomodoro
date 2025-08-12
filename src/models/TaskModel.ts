import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //timer reaches 0
  interruptDate: number | null; //task is interrupted
  type: keyof TaskStateModel["config"];
};
