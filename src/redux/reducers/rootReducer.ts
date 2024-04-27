import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import taskReducer from './taskReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'],
};

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
