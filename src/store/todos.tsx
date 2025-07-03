import { createContext, type ReactNode } from "react";

export type TodosProviderProps = {
    children : ReactNode;
}

export const todosContext = createContext(null);

export const TodosProvider = ({children}:TodosProviderProps) => {
    return <todosContext.Provider>
        {children}
    </todosContext.Provider>
}