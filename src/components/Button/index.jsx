import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Button = ({ children, handleClick, disabled = false }) => {
  const [state, actions] = useCounterContext();
  return (
    <button style={{ fontSize: '60px' }} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  handleClick: P.func.isRequired,
  disabled: P.bool,
};
