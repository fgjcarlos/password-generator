import { useContext, useEffect, useState } from 'react';
import './Slider.css'
import GeneratorContext from 'context/generator';

const Slider = ({min, max, step}) => {

    const {setStore} = useContext(GeneratorContext);
    const defaultMin = min || 4;
    const defaultMax = max || 32;
    const defaultStep = step || 4;
    const [value, setValue] = useState(defaultMin);

    const handleValue = (e) => {
        const currentValue = e.target.value;
        setValue(currentValue)
        setStore(prev => ({...prev, slider:{value:currentValue}}) );
    }

    return(
        <div className="generator-slider box">
           <span>{defaultMin}</span> 
           <input type="range" 
                   name='foo'
                   max={defaultMax} 
                   min={defaultMin} 
                   step={defaultStep} 
                   value={value}
                   onChange={e => handleValue(e)}
                   />
            <output for="foo" onforminput={value}></output>
           <span>{defaultMax}</span> 
        </div>
    )
}

export default Slider;