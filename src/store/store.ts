import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage' //
import {tripReducer} from "./reducers/tripReducer";


const rootReducer = combineReducers({
    tripsPageState: tripReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

})

export const persistor = persistStore(store)

// @ts-ignore
window.store = store
export default store