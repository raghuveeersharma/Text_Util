import Navbar from "./component/Navbar";
import Textform from "./component/TextForm";

function App() {
  return (
  <>
   
  <Navbar title="Text-Edit" about="about"/>
  <div className="container">
    <Textform heading="enter your text to analyzeee"/>
  </div>
  </>
  );
}

export default App;
