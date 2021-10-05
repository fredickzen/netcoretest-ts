import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import { TRedux } from "../../../types/TRedux";
import { GlobalReducers } from "../reducers/globalReducers";
import { UsuariosReducers } from "../reducers/usuariosReducers";
import { loadFromSessionStorage, saveToSessionStorage } from "./localStorage";

const reducers = combineReducers({
  global: GlobalReducers,
  usuarios: UsuariosReducers
});

export const store = createStore(
  reducers,
  loadFromSessionStorage()
);


// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRedux> = useSelector

// listen for store changes and use saveToLocalStorage to
// save them to localStorage en cada cambio
store.subscribe(() => saveToSessionStorage(store.getState()));
//save on close o refresh
// window.onbeforeunload = () => saveToSessionStorage(store.getState())