import './App.css';
import { Button } from '../../components/Button';
import { useCounterContext } from '../../contexts/CounterContext';
import { Heading } from '../../components/Heading';

function App() {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <div>
      <Heading />
      <Button handleClick={actions.increase}>Increment</Button>
      <Button handleClick={actions.decrease}>Decrement</Button>
      <Button handleClick={actions.reset}>Reset</Button>
      <Button handleClick={() => actions.setCounter({ counter: 10 })}>Set 10</Button>
      <Button disabled={state.loading} handleClick={actions.asyncIncrease}>
        Async Increment
      </Button>
      <Button disabled={state.loading} handleClick={handleError}>
        Async Error
      </Button>
    </div>
  );
}

export default App;
