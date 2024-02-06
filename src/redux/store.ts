import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from './app'
import leaveRequestReducer from "./leaveRequest";

const rootReducer = combineReducers({
  app: appReducer,
  leaveRequest: leaveRequestReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

const stores = {
  store,
  persistor,
};

export default stores;
