import { createContext } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <UsuarioContext.Provider value={{ isAuth, setIsAuth }}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export const Storage = {
    get() {

    },

    set() {

    },

    update() {

    },

    delete() {

    },
}