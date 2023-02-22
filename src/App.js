import './App.css';
import {Routes, Route} from "react-router-dom"
import Main from "./components/Main"


function App() {
  return (
    <div>
      <Routes>

        <Route exact path="/">
          <Main />
        </Route>
      </Routes>
    </div>


  );
}

export default App;
