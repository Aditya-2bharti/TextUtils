import React, {useState} from 'react'

export default function Textform(props) {
   
     
    const handleUpClick = ()=>{
        // console.log('convert to upper case' + text)
        let upText = text.toUpperCase()
        setText(upText)
        props.showAlert(": UpperCase mode has been enabled","success")
    }
    const handleLoClick = ()=>{
        // console.log('convert to upper case' + text)
        let lowerText = text.toLowerCase()
        setText(lowerText)
        props.showAlert(": LowerCase mode has been enabled","success")
    }
    
    const handleClear = ()=>{
        // console.log('convert to upper case' + text)
        let  clear = ""
        setText(clear) 
        props.showAlert(":  All text has been cleared","danger")
    }
    const handleOnChange = (event)=>{
        // console.log('convert to upper case');
        setText(event.target.value);
    }
    const[text, setText] = useState("");
    return (
        <>
        <div className= "container"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div  className="mb-3 "> 
                <textarea  className="form-control heading"   onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#3f4e5c':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="MyBox" rows="8"></textarea>
            </div>
            
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
           
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}    >
            <h2>Your text length</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Mintes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here."}</p>
        </div>
        </>
    )
}
