import GeneratorPassword from "components/Generator/Generator";
import './App.css'
import {GeneratorContextProvider} from 'context/generator'

function App() {
  return (
    <div className="App">
      <GeneratorContextProvider>
        <GeneratorPassword />
      </GeneratorContextProvider>
    </div>
  );
}

export default App;
