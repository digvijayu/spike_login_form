import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import LoginModal from './components/LoginModal';
import Home from './pages/Home/Home';

const store = configureStore();

function App() {
  return (
    <div className="modal-open">
      <Provider store={store}>
        <LoginModal/>
        <Home/>
      </Provider>
    </div>
  );
}

export default App;
