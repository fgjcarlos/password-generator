import {options} from 'container/options-settings';
import SwitchPass from 'components/SwitchPass/SwitchPass';

const Settings = () => {

    return(
        <>
            {
            options.map(option => 
                <div className="generator-options box" key={option}>
                    <span>Include {option}</span>
                    <SwitchPass 
                        onChange={val => console.log('valor switch', val)}
                        name={option}/>
            </div>)
            }
        </>
    )
}

export default Settings;