import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState('');
    //setText('new text')
    const handleUpCase = ()=>{
        console.log("handle upper case clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowCase = ()=>{
        console.log("handle lower case clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase","success");
    }
    const handleOnChange = (event)=>{
        console.log("handle on change");
        setText(event.target.value);
    }
    const handleClearText = (event)=>{
        console.log("handle on change");
        setText('');
        props.showAlert("Cleared Text","success");
    }
  return (
    <div>
        <div className="container" style={{color: props.mode=='light'? 'grey':'white'}}>
            <div className="mb-3">
            <h2 htmlFor="mybox" className="form-label">{props.heading}</h2>
            <textarea className="form-control" style={{backgroundColor: props.mode=='light'? 'white':'grey',color: props.mode=='light'? 'grey':'white'}} id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowCase}>Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container  my-4" style={{color: props.mode=='light'? 'grey':'white'}}>
            <h2> Your Text Summary</h2>
            <p> {text.split(" ").length} words  and {text.length} characters </p>
            <p> {0.008 * text.split(" ").length} minutes to read</p>
            <h2> Preivew </h2>
            <p> {text} </p>
        </div>
        
    </div>
  )
}
