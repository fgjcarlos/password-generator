import { useContext, useState } from "react";
import {options} from 'container/options-settings';
import GeneratorContext from 'context/generator';
import { ShuffledArr } from 'utils/utils';

export const usePassword = () => {
    const [password, setPasword] = useState('Click generate password')
    const {store} = useContext(GeneratorContext)  

        const activeSettings =  Object.keys(options).map(option =>
                                    (store[option] === true) ? option : null)
                                    .filter(item => item !== null)

    /*
        - Mix password
        - Slice length
        - flat to string
    */
    const mixPassword = (arrayPassword, lenPassword) => {

       return ShuffledArr(arrayPassword)
                .slice(0, lenPassword)
                .join('')
    }

    /*
        .map => for each enabled option it is mixed and truncated to the appropriate proportion
        then => prePassword is mixed and truncated to the size of the slider value
    */

    const generatePassword = () => {

        const lenPassword = store.slider.value
        const lenSettings = activeSettings.length
        const lenOptionFraction = lenPassword / lenSettings

        let prePassword = activeSettings.map(item => 
                            mixPassword(options[item], lenOptionFraction))
                            .flat()
                            .join('');
    
        prePassword = mixPassword(prePassword, lenPassword)

        setPasword(prePassword)
    }
    
    return [password, generatePassword]
}