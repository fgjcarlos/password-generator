import {createContext, useState} from "react";

const GeneratorContext = createContext({});

export const GeneratorContextProvider = ({children}) => {

    const [store, setStore] = useState({

            slider:{
                value: 4
            },


    });

    return (<GeneratorContext.Provider value={
        {store, setStore}
    }> {children} </GeneratorContext.Provider>);
}

export default GeneratorContext;