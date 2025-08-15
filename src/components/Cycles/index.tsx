import { getNextCycle } from "../../contexts/TaskContext/getNextCycle";
import { getNextCycleType } from "../../contexts/TaskContext/getNextCycleType";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    focus: "Focus",
    shortBreak: "Short Break",
    longBreak: "Long Break",
  };

  return (
    <div className={styles.cycles}>
      <span>Cycles:</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicator of cycle of type ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicator of cycle of type ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
