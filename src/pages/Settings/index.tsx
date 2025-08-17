import { RotateCcwIcon, SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const [focusInput, setFocusInput] = useState(state.config.focus);
  const [shortBreakInput, setShortBreakInput] = useState(
    state.config.shortBreak
  );
  const [longBreakInput, setLongBreakInput] = useState(state.config.longBreak);
  const [confirmResetSettings, setConfirmResetSettings] = useState(false);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    if (isNaN(focusInput) || isNaN(shortBreakInput) || isNaN(longBreakInput)) {
      formErrors.push("Type only numbers for all fields");
    }

    if (focusInput < 1 || focusInput > 99) {
      formErrors.push("Type a value between 1 and 99 for focus");
    }

    if (shortBreakInput < 1 || shortBreakInput > 30) {
      formErrors.push("Type a value between 1 and 30 for short break");
    }

    if (longBreakInput < 1 || longBreakInput > 60) {
      formErrors.push("Type a value between 1 and 60 for long break");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        focus: focusInput,
        shortBreak: shortBreakInput,
        longBreak: longBreakInput,
      },
    });
    showMessage.success("Saved!");
  }

  function handleResetSettings() {
    showMessage.dismiss();
    showMessage.confirm(
      "Are you sure you want to reset your settings?",
      (confirmation) => {
        setConfirmResetSettings(confirmation);
      }
    );
  }

  useEffect(() => {
    if (confirmResetSettings) {
      dispatch({
        type: TaskActionTypes.RESET_SETTINGS,
      });
      setConfirmResetSettings(false);
      showMessage.success("Settings reseted.");
    }
  }, [confirmResetSettings, dispatch]);

  useEffect(() => {
    setFocusInput(state.config.focus);
    setShortBreakInput(state.config.shortBreak);
    setLongBreakInput(state.config.longBreak);
  }, [state.config]);

  useEffect(() => {
    document.title = "Settings - Chronos Pomodoro";
  }, []);

  return (
    <MainTemplate>
      <Container>
        <Heading>
          Settings
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<RotateCcwIcon />}
              color="red"
              aria-label="Reset Settings"
              title="Reset Settings"
              onClick={handleResetSettings}
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <p className={styles.description}>
          Customize your focus, short break and long break time duration.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="focus"
              label="Focus"
              value={focusInput}
              type="number"
              onChange={(e) => setFocusInput(Number(e.target.value))}
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="shortBreak"
              label="Short Break"
              value={shortBreakInput}
              type="number"
              onChange={(e) => setShortBreakInput(Number(e.target.value))}
            />
          </div>

          <div className="formRow">
            <DefaultInput
              id="longBreak"
              label="Long Break"
              value={longBreakInput}
              type="number"
              onChange={(e) => setLongBreakInput(Number(e.target.value))}
            />
          </div>

          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Save Settings"
              title="Save Settings"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
