import {useContext, useState} from 'react';
import './SwitchPass.css'
import GeneratorContext from 'context/generator';

const SwitchPass = ({name}) => {

    const {setStore} = useContext(GeneratorContext)


    const defaultValue = (name === 'Lower case') ? true : false;
    const [active, setActive] = useState(defaultValue);

    const handleActive = () => {
        setActive(!active)
        setStore(prev => ({...prev, [name]: !active}) );
    }

    return (
    <>
        <label className="switch">
            <input type="checkbox" checked={active} 
                   onChange={value => value && handleActive()}/>
            <span className="slider round"></span>
        </label>
    </>)
}

export default SwitchPass;
