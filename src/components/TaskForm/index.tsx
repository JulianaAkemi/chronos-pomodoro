import type { FunctionComponent } from "react";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";

export const TaskForm: FunctionComponent = () => {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput id="meuInput" type="text" label="Task" />
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};
