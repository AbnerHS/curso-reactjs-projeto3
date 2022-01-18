import P from 'prop-types';
import { useContext, useState } from 'react';
import { Context } from './context';
import { initialState } from './data';

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useCounterContext inside <CounterContextProvider />');
  }

  return [context[0], context[1]];
};
