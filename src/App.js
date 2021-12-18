import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      <Navbar title="ReactApp" />
      <TextForm heading="Convert the following text" />
    </>
  );
}

export default App;
