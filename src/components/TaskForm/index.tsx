import { useRef, type FunctionComponent } from "react";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../contexts/TaskContext/getNextCycle";
import { getNextCycleType } from "../../contexts/TaskContext/getNextCycleType";

import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export const TaskForm: FunctionComponent = () => {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!taskNameInput.current) {
      return;
    }

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleStopCurrentTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form className="form" action="" onSubmit={handleCreateNewTask}>
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          label="Task"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            icon={<PlayCircleIcon />}
            aria-label="Start New Task"
            title="Start New Task"
            type="submit"
            key="startNewTask"
          />
        ) : (
          <DefaultButton
            icon={<StopCircleIcon />}
            aria-label="Stop Current Task"
            title="Stop Current Task"
            color="red"
            type="button"
            onClick={handleStopCurrentTask}
            key="stopCurrentTask"
          />
        )}
      </div>
    </form>
  );
};
