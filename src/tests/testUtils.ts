import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/rootReducer';

interface TestStore {
  store: ReturnType<typeof configureStore>;
  initialState: ReturnType<typeof rootReducer>;
}

export const createTestStore = (initialState: any): TestStore => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
  const wrappedStore = {
    store,
    initialState: store.getState(),
  };
  return wrappedStore;
};
