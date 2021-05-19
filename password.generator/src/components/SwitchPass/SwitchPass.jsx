import {useState} from 'react';
import './SwitchPass.css'

const SwitchPass = ({onChange, name}) => {

    console.log('name :>> ', name);

    const defaultValue = (name === 'Lower case') ? true : false;
    const [active, setActive] = useState(defaultValue);

    return (
    <>
        <label className="switch">
            <input type="checkbox" checked={active} onChange={value => setActive(value && !active)}/>
            <span className="slider round"></span>
        </label>
    </>)
}

export default SwitchPass;
