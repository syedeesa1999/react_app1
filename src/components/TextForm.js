import React, {useState} from 'react'


export default function TextForm(props) {

  const [text,setText] = useState(() => {
    return ''
  });
  const handleUpClick = () => {
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleDownClick = () => {
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
}
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Lowercase</button>
        <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
      </div>
      <div className="container my-3">
        <h1>You text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
      </div>
      <h1 className='my-3'>Preview</h1>
      <p>{text}</p>
    </>
  )
}
