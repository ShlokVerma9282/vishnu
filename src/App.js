import NewCourseForm from "./components/C1.1,C1.2/NewCourseForm";
import Page from "./components/C3/Page";
import Intro from "./components/C2/Intro";
import Courseprices from "./components/C1.5,6/Courseprices"
import New from "./components/C1.3,4/New";


function App() {
  return (
    <div className="App">
      <NewCourseForm />
      <New/>
      <Courseprices/>
      <Intro/>
      <Page />
    </div>
  );
}

export default App;
