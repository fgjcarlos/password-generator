import { useContext, useState } from "react";
import {options, lettersUpperCase, lettersLowerCase, numbers, symbols } from 'container/options-settings';
import GeneratorContext from 'context/generator';
import { randomPosition, mixPassword } from 'utils/utils';

export const usePassword = () => {
    const [password, setPasword] = useState('Click generate password')
    const {store} = useContext(GeneratorContext)


    const activeSettings = options.map(option =>(store[option] === true) ? option : null)
                                   .filter(item => item !== null)

    const optionsPassword =
        {
            'Upper case' : lettersUpperCase,
            'Lower case' : lettersLowerCase,
            'Numbers' : numbers,
            'Symbols' : symbols
        }    

    const generatePassword = () => {

        let prePassword = activeSettings.map(item => optionsPassword[item])
        .flat()
        .join('');
        
        prePassword = mixPassword(prePassword).slice(0, store.slider.value)
        
        setPasword(prePassword)
    }
    
    console.log(password);

    return [password, generatePassword]
}