import Center from "./components/Center";
import Featured from "./components/Featured";
import Header from "./components/Header";
import ImageText from "./components/ImageText";
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Center />
      <ImageText />
      <Featured />
    </div>
  );
}

export default App;
