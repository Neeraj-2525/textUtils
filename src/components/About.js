import React, { useState } from 'react'
import materialColors from './Colors'

export default function About(props) {

    let outerBodyStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#633b48' : "#aed79a"
    }

    let bodyStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? materialColors.darkForm : materialColors.lightForm
    }

    return (
        <div classNameName='container' style={{ color: props.mode === 'dark' ? materialColors.lightBody : materialColors.darkBody }}>
            <h2 className='my-3'>About</h2>
            <div className="accordion" id="accordionExample" style={bodyStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={outerBodyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Text Capitalization
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={bodyStyle}>
                            Text Util provides a powerful text capitalization tool that allows you to easily convert text to different letter case styles, including uppercase, lowercase, title case, and more. Whether you need to make your text all uppercase or only capitalize the first letter of each word, Text Util has got you covered.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={outerBodyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Text To Speach
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={bodyStyle}>
                            With Text Util's text speak feature, you can convert regular text into a fun and playful text style that uses abbreviations and internet slang. It's perfect for adding a creative touch to your messages and social media posts. Express yourself with Text Util's text speak feature today!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={outerBodyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Text Copy
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={bodyStyle}>
                            Text Util's text copy feature makes it easy to copy and paste text quickly. Simply input your text, click the copy button, and the text will be copied to your clipboard. No more hassle with manually selecting and copying text. Text Util does it for you in a snap!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
