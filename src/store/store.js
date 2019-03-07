import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";

import RootReducer from "../reducer/rootReducer";

const middlewares = [thunk];

if (process.NODE_ENV === "development") {
    const logger = createLogger();
    middlewares.push(logger)
}

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
let store = createStoreWithMiddlewares(RootReducer);

export default store;
