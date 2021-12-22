import * as React from "react";
import StudentsList from "./StudentsList/StudentsList";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <React.Fragment>
      <StudentsList />
    </React.Fragment>
  );
};

export default Main;
