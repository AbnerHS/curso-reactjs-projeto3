import { useCounterContext } from '../../contexts/CounterContext';

function App() {
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <h1>Oi</h1>
    </div>
  );
}

export default App;
