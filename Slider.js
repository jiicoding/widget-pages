import React,{useState} from 'react';
import InputRange from 'react-input-range'
export default function Slider() {
    const [value, setValue] = useState(4);

  return (<div> slider<br/>
          <InputRange
          draggableTrack
          maxValue={20}
          minValue={0}
          onChange={v => setValue(v) }
          onChangeComplete={value => console.log(value)}
          value={value} />

  
  </div>)
}