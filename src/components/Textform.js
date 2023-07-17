import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");    //Important
    // text = "new text"    // wrong way to change the state
    // setText("new text")   // correct way to change the state


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text; 

        // Get the list of available voices
        let voices = window.speechSynthesis.getVoices();

        // Find the desired female voice
        let desiredVoice = voices.find((voice) => voice.name === "Microsoft Swara Online (Natural) - Hindi (India)");
        if (!desiredVoice) {
            desiredVoice = voices.find((voice) => voice.lang === "hi-IN");
        }

        msg.voice = desiredVoice;
        window.speechSynthesis.speak(msg);

        const toggleSpeaktext = document.getElementById("toggleSpeak");
        if (toggleSpeaktext.textContent === "Speak"){
            toggleSpeaktext.innerHTML = "Stop";
            msg.onend = () => {
                toggleSpeaktext.innerHTML = "Speak";
              };
        }
        else{
            toggleSpeaktext.innerHTML = "Speak"
            if (toggleSpeaktext.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }

        props.showAlert("Reading out loud your text", "success")

        
    };


    const clearText = () => {
        setText("")
        props.showAlert("Textbox Cleared", "success")
    }

    const upFirstLetter = () => {
        let words = text.split(" ");
        let capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        setText(capitalizedWords.join(" "));
        props.showAlert("Capitalized first letter of every word", "success")
    }

    const [cpyBtnText, setCpyBtnText] = useState("Copy")

    const handleCopy = () =>{
        var text = document.getElementById("myTextBox");
        navigator.clipboard.writeText(text.value);
        setCpyBtnText("Copied");

        setTimeout(() => {
            setCpyBtnText("Copy")
        }, 5000);
        props.showAlert("Check your clipboard", "success")
    }

    return (
        <>
            <div className='container' >
                <h2 className={`fw-medium text-opacity-75 mb-4 text-${props.mode==='dark'?'white':'black'}`}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control border-primary border-opacity-25" style={{backgroundColor: props.mode==='dark'?'#1b1d1f':'#f8faff', color: props.mode==='light'?'#000':'white'}} value={text} onChange={handleOnChange} id="myTextBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1 shadow-sm' onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1 shadow-sm' onClick={handleLowClick}>Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1 shadow-sm' onClick={upFirstLetter}>Camel Case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-1 shadow-sm' onClick={handleCopy}>{cpyBtnText}</button>
                <button disabled={text.length===0} className='btn btn-success mx-2 my-1 shadow-sm' id='toggleSpeak' onClick={speak} >Speak</button>
                <button disabled={text.length===0} className='btn btn-danger mx-2 my-1 shadow-sm' onClick={clearText}>Clear</button>
            </div>
            <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2 className='fw-light'>Your text summary</h2>
                <p>{text.length>0?(text.split(" ").length):0} Words | {text.length} Characters</p>
                <p>{text.length>0?(0.48 * text.split(" ").length):0} Seconds to read</p>
                <h3 className='fw-light'>Preview</h3>
                <p>{text.length>0?text: "Nothing To Preview"}</p>
            </div>
        </>
    )
}

