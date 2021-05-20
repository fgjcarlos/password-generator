import {useContext, useState} from 'react';
import './Generator.css';
import Settings from 'components/Settings/Settings';
import Slider from 'components/Slider/Slider';
import GeneratorContext from 'context/generator';
import {usePassword} from 'hooks/usePassword';

const GeneratorPassword = () => {

    const [password, generatePassword] = usePassword()
    const {store} = useContext(GeneratorContext)
    
    const handleGenerate = () => {
         generatePassword();
    }

    return (
        <div className="generator-wrapper">
            <h1>Password Generator</h1>
            <div className="generator-result box"> {password} </div>
            <span className="generator-lbl">Length: <strong>{store.slider.value}</strong></span>
            <Slider />
            <span className="generator-lbl">Settings</span>
            <Settings min={4}
                      max={32}
                      step={4}/>
            <button className="btn-generator"
                    onClick={handleGenerate}>generate password</button>
        </div>)
}

export default GeneratorPassword;
