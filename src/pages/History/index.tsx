import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import { useEffect, useState } from "react";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function History() {
  const { state, dispatch } = useTaskContext();
  const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    }
  );
  const hasTasks = state.tasks.length > 0;

  function handleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
    const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    if (!confirm("Are you sure you want to delete all history?")) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  useEffect(() => {
    setSortTaskOptions((prevState) => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>

          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color="red"
                aria-label="Delete all history"
                title="Delete all history"
                onClick={handleResetHistory}
              />
            </span>
          )}
        </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: "name" })}
                    className={styles.thSort}
                  >
                    Task ↕
                  </th>

                  <th
                    onClick={() => handleSortTasks({ field: "duration" })}
                    className={styles.thSort}
                  >
                    Duration ↕
                  </th>

                  <th
                    onClick={() => handleSortTasks({ field: "startDate" })}
                    className={styles.thSort}
                  >
                    Date ↕
                  </th>

                  <th>Status</th>

                  <th>Type</th>
                </tr>
              </thead>

              <tbody>
                {sortTasksOptions.tasks.map((task) => {
                  const taskTypeDictionary = {
                    focus: "Focus",
                    shortBreak: "Short Break",
                    longBreak: "Long Break",
                  };

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "3rem",
            }}
          >
            You still don't have any created task.
          </p>
        )}
      </Container>
    </MainTemplate>
  );
}
