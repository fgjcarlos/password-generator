import {useState} from 'react';
import './Generator.css';
import SwitchPass from 'components/SwitchPass/SwitchPass';

const GeneratorPassword = () => {

    const [password, setPasword] = useState('Click generate password')

    const options = ['Upper case', 'Lower case', 'Numbers', 'Symbols']

    return (
        <div className="generator-wrapper">
            <h1>Password Generator</h1>
            <div className="generator-result box"> {password} </div>
            <div className="generator-slider box"></div>
            {
            options.map(option => 
                <div className="generator-options box" key={option}>
                    <span>Include {option}</span>
                    <SwitchPass 
                        onChange={val => console.log('valor switch', val)}
                        name={option}/>
            </div>)
            } 
            <button className="btn-generator">generate password</button>
        </div>)
}

export default GeneratorPassword;
