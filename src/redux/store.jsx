import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice"; 
import { authReducer } from "./authSlice"; 
import storage from "redux-persist/lib/storage";
// import { combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'



// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
     contacts: contactReducer,
 filter: filterReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);




// // const rootReducer = combineReducers({
// //     contacts: contactReducer,
// //   filter: filterReducer,
// //     auth:authReducer,
// // });


//  const persistConfig = {
//   key: 'auth',
//     storage,
//   whitelist: ['token'],
// }


//  const persistedContactsReducer = persistReducer(persistConfig, rootReducer)


// // export const store = configureStore({
// //     reducer: persistedContactsReducer,
// //     middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //       },
// //     }),
// // });
// export const persistor = persistStore(store)