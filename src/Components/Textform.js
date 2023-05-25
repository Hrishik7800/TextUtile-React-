import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase...!", "Success")

    }
    const handleLowClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase...!", "Success")
    }
    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
    }

    const handleCapClick = ()=>{
        //console.log("Uppercase was clicked" + text);
         let newText = text.toLowerCase();
         newText = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(newText)
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleOnChange = (event)=>{
        //console.log("Uppercase was clicked");
        setText(event.target.value);
    }
    
    const handleVoClick = () => {
        let countChar = 0;
        for (count = 0; count <= text.length; count++) {
          if (text.charAt(count).match(/[aeiouAEIOU]/)) {
            countChar++;   
          }
        }
        setCount (countChar);
    }

    const handleCoClick = () => {
        let countCons = 0;
        for (count1 = 0; count1 <= text.length; count1++) {
          if (
            text
              .charAt(count1)
              .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
          ) {
            countCons++;
          }
        }
        setCount1(countCons);
    }

    const countWords = (text) => {
        let arr = text.split(" ");
        let newArr = arr.filter((word) => {
            return word!== String("");
        });
        return newArr.length;
    }


    const [text, setText] = useState('');
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    // text = "New text"; // Wrong way
    //setText("Enter Text"); // Correct way 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark' ?'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            
            <button  className="btn btn-warning mx-1" onClick = {handleUpClick}> Convert to Uppercase</button>
            <button  className="btn btn-warning mx-1"  onClick = {handleLowClick}> Convert to Lowercase</button>
            <button  className="btn btn-warning mx-1"  onClick = {handleCapClick}> Convert to Capitalize case</button>
            <button  className="btn btn-warning mx-1"  onClick = {handleClearClick}> Clear Text</button>
            <button className="btn btn-warning mx-1" onClick={handleVoClick}> Count Vowels </button>
            <button className="btn btn-warning mx-1" onClick={handleCoClick}> Count Consonants</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-1">Speak</button>
        </div>  
        <div className="container my-3" style={{color: props.mode==='dark' ?'white' : 'black'}}>
            <h2>Your text Summary</h2>
            <p>{countWords(text)} words and {text.length} charecters </p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text: "Enter Somthing in above textbox to preview it here"}</p>
            <h3>You have entered:</h3>
           <p>{count} No. of Vowels</p>
           <p>{count1} No. of Consonants</p>
        </div>
        </>           
    )
}
