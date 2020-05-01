import React, { useState, useEffect } from 'react';
import hexToRgba from 'hex-to-rgba';
// import rgb2hex from 'rgb2hex'
import './App.css';


function App() {
  const [ShiftR, setShiftR] = useState(0)
  const [ShiftD, setShiftD] = useState(0)
  const [Blur, setBlur] = useState(5)
  const [Opacity, setOpacity] = useState(1)
  const [Text, setText] = useState('Text')
  const [ShadowColor, setShadowColor] = useState('#004040')
  const [BackgroudColor, setBackgroudColor] = useState('#e0e0e0')
  const [TextColor, setTextColor] = useState('#000000')

  useEffect(() => {
    const object = document.querySelector('.text')
    object.style.textShadow = `${ShiftR}px ${ShiftD}px ${Blur}px ${hexToRgba(ShadowColor, Opacity)}`

    object.style.color = TextColor
  }, [ShiftD, ShiftR, Blur, Opacity, Text, ShadowColor, TextColor])

  useEffect(() => {
    const object = document.querySelector('.result')

    object.style.backgroundColor = BackgroudColor

  }, [BackgroudColor])


  return (
    <React.Fragment>
      <div className="container">
        <div className="result">
          <label className="text">{Text}</label>
        </div>
        <div className="code">
          <p>text-shadow: {ShiftR}px {ShiftD}px {Blur}px {hexToRgba(ShadowColor, Opacity)}</p>

        </div>



        <div className="infos">
          <input type="text" value={Text} onChange={(e) => setText(e.target.value)} />
          <div className="slide-container">
            <div>
              <label>Shift Right: </label>
              <input type="number" min="-40" max="40" name="ShiftR" value={ShiftR} onChange={(e) => setShiftR(e.target.value)} />
            </div>
            <input type="range" className="input" min="-40" max="40" value={ShiftR} onChange={(e) => setShiftR(e.target.value)} />
            <div>
              <label>Shift Down: </label>
              <input type="number" min="-40" max="40" name="ShiftD" value={ShiftD} onChange={(e) => setShiftD(e.target.value)} />
            </div>
            <input type="range" className="input" min="-40" max="40" value={ShiftD} onChange={(e) => setShiftD(e.target.value)} />
            <div>
              <label>Blur: </label>
              <input type="number" min="0" max="20" name="Blur" value={Blur} onChange={(e) => setBlur(e.target.value)} />
            </div>
            <input type="range" className="input" min="0" max="20" value={Blur} onChange={(e) => setBlur(e.target.value)} />
            <div>
              <label>Opacity: </label>
              <input type="number" step="0.01" min="0" max="1" name="Opacity" value={Opacity} onChange={(e) => setOpacity(e.target.value)} />
            </div>
            <input type="range" step="0.01" className="input" min="0" max="1" value={Opacity} onChange={(e) => setOpacity(e.target.value)} />
            <div>
              <label>Shadow Color: </label>
              <input type="color" name="Color" value={ShadowColor} onChange={(e) => setShadowColor(e.target.value)} />
            </div>
            <hr className="division" />
            <div>
              <label>Text Color: </label>
              <input type="color" name="Color" value={TextColor} onChange={(e) => setTextColor(e.target.value)} className="text-color" />
            </div>
            <div>
              <label>Backgroud Color: </label>
              <input type="color" name="Color" value={BackgroudColor} onChange={(e) => setBackgroudColor(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
