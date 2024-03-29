import Accordian from "./components/C1/index";
import BasicButtons from "./components/C1/Btn-ui";
import NewCourseForm from "./components/C1.1,C1.2/NewCourseForm";

import CourseSettings from "./components/C1.3,4/CourseSetting";

function App() {
  return (
    <div className="App">
      <Accordian />
      <BasicButtons />

      <NewCourseForm />
      <CourseSettings />
    </div>
  );
}

export default App;
