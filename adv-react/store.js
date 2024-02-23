import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./src/reducers";
import rootSaga from "./src/sagas";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
   reducer: rootReducer,
   middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;