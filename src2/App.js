const el = 3;
import ReactDOM from "react-dom";
import EditalbleBlock from "./editabkeblock";
const onKeyUp = (e) => {
  if (e.keyCode == 13) {
    return <EditalbleBlock />;
  }
};
const App = () => {
  var row = [];
  for (let i = 0; i < 3; i++) {
    row.push(<EditalbleBlock key={i} />);
  }

  return <div>{row}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
