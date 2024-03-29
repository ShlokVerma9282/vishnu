import NewCourseForm from "./components/C1.1,C1.2/NewCourseForm";
import Page from "./components/C3/Page";
import CourseSettings from "./components/C1.3,4/CourseSetting";
import Add from "./components/C3/Add";
import Intro from "./components/C2/Intro";

function App() {
  return (
    <div className="App">
      <NewCourseForm />
      <CourseSettings />
      <Intro/>
      <Page />
      <Add/>
    </div>
  );
}

export default App;
