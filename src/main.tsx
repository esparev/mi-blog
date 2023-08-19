import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, compose, Reducer } from 'redux';
import reducer from './reducers/index.reducer';
import App from './routes/App';
import './styles/index.css';
import initialState from '../initialState';

type ActionProps = {
  type: string;
  payload: string | undefined;
};

declare const window: CustomWindow;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer as Reducer<BlogPosts, ActionProps>, initialState, composeEnhancers());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
