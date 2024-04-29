import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    // text = "new text" // Wrong way to change the start
    // setText = "new text" // Correct way to change the start

    const handleUpClick = () => {
        // console.log("UpperCase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("The text is converted to UpperCase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lower was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("The text is converted to LowerCase!", "success");
    }

    const handleClearClick = () => {
        let newText = ' ';
        setText(newText);
        props.showAlert("The text is cleared!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("The text is copied to clipboard!", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("The extra space between words are removed!", "success");
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <div>
                    <button className="btn btn-primary mx-1 mx-1" onClick={handleUpClick}>Convert to upperCase</button>
                    <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to lowerCase</button>
                    <button className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary my-1 mx-1" onClick={handleExtraSpace}>Extract Extra Space</button>
                </div>
            </div >
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
            </div >
        </>
    )
}
