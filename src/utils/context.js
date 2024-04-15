import { createContext } from "react";

export const context = createContext(null);

const Appcontext = ({ children }) => {
    return (
        <context.Provider value={{}}>
            {children}
        </context.Provider>
    )
}

export default Appcontext;