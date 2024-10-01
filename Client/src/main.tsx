import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/reducer';

// const store = configureStore({ reducer });
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
