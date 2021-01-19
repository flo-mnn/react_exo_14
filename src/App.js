import './App.css';

function App() {

  const [fruit, setFruit] = useState('la fraise');

  return (
    <div className="App">
      <h1>Mon fruit préféré est {fruit}</h1>
    </div>
  );
}

export default App;
