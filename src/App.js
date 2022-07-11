import "./App.css";
import Counter from "./Counter";

import team1Logo from "./team1-logo.svg";
import team2Logo from "./team2-logo.svg";

function App() {
  return (
    <div className="App">
      <Counter logo={team1Logo} />
      <Counter logo={team2Logo} />
    </div>
  );
}

export default App;
