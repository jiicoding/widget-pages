import React,{useState} from 'react';
import InputRange from 'react-input-range'

function SliderOne() {
  const  [value, setValue] = useState(4);

  return (<InputRange
          draggableTrack
          maxValue={20}
          minValue={0}
          onChange={v => setValue(v) }
          onChangeComplete={value => console.log(value)}
          value={value} />)


}

function SliderTwo() {
  const  [value, setValue] = useState({min:3,max:38});

  return (<InputRange
          draggableTrack
          maxValue={100}
          minValue={0}
          onChange={v => setValue(v) }
          onChangeComplete={value => console.log(value)}
          value={value} />)


}

export default function Slider() {
    const [value, setValue] = useState(4);

  return (<div> slider<br/>
         <SliderOne/>
         <SliderTwo/>
  </div>)
}


