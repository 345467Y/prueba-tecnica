import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducers";
import { monitoresReducers } from "../reducers/monitoresReducers";
import { monitoriasReducers } from "../reducers/monitoriasReducers";
import { registerReducers } from "../reducers/registerReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducersEnviar = combineReducers({
        login: loginReducers,
        register: registerReducers,
        monitorias: monitoriasReducers,
        monitores: monitoresReducers

})

export const store= createStore(
    reducersEnviar,
        composeEnhancers(
        applyMiddleware(thunk)
    )
)