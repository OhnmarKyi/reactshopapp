import { createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers/rootReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
export default createStore(
    reducers,
  composeEnhancers(applyMiddleware(...middleware))
);