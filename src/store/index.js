import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import FavoritesReducer from "./slices/favoritesSlice";
import { persistStore, persistReducer } from 'redux-persist'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import MessagesReducer from "./slices/messagesSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    MessagesReducer,
    // FavoritesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = configureStore(
    {
        reducer: persistedReducer,
        // reducer: rootReducer,
        // middleware: getDefaultMiddleware({
        //     serializableCheck: false,
        //   }),
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    }
);

export const persistor = persistStore(setupStore)

