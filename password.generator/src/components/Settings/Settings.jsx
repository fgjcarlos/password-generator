import {options} from 'container/options-settings';
import SwitchPass from 'components/SwitchPass/SwitchPass';

const Settings = () => {

    return(
        <>
            {
            Object.keys(options).map(option => 
                <div className="generator-options box" key={option}>
                    <span>Include {option}</span>
                    <SwitchPass 
                        name={option}/>
            </div>)
            }
        </>
    )
}

export default Settings;