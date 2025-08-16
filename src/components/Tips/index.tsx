import { getNextCycle } from "../../contexts/TaskContext/getNextCycle";
import { getNextCycleType } from "../../contexts/TaskContext/getNextCycleType";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    focus: <span>Focus for {state.config.focus}min</span>,
    shortBreak: <span>Rest for {state.config.shortBreak}min</span>,
    longBreak: <span>Long Rest</span>,
  };

  const tipsForNoActiveTask = {
    focus: (
      <span>
        The next cycle has <b>{state.config.focus}min</b>
      </span>
    ),
    shortBreak: <span>The next rest is of {state.config.shortBreak}min</span>,
    longBreak: <span>The next rest is long</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}
