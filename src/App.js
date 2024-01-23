import './App.css';

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true,
  });

  async function loadDogs() {
    const resp = await fetch('http://localhost:5001/dogs');
    const data = await resp.json();
    setDogs({
      data,
      isLoading: false,
    });
  }

  if (dogs.isLoading) {
    loadDogs();
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;