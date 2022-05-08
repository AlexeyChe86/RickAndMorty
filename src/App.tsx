import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './core/frameworks/redux';
import Routes from './routes';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
