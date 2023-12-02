import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");
   
    const handleOnClickUpCase= ()=>{
      let  toUppercaseText=text.toUpperCase();
        setText(toUppercaseText);
        props.showAlert('Text Converted to UpperCase','Success');
    }
    const handleOnClickLowerCase= ()=>{
      let  toLowerText=text.toLowerCase();
        setText(toLowerText);
        props.showAlert('Text Converted to LowerCase','Success');
    }
    const handleOnClickCapCase= ()=>{
        const arr = text.split(" ");

        //loop through each element of the array and capitalize the first letter.
        
        
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        
        }
        
        //Join all the elements of the array back into a string 
        //using a blankspace as a separator 
        const capCase = arr.join(" ");
        setText(capCase);
        props.showAlert('Text Converted to capCase','Success');
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
   }
   const handleOnClickCopy= ()=>{
    
    navigator.clipboard.writeText(text);
    props.showAlert('Text Copied','Success');
   }
   const handleOnClickExtraSpaces= (event)=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed!','Success');
   }
   const handleOnClickClear = ()=>{
    setText('');
    props.showAlert('Text Cleard','Success');
   }
  return (
   <>

   <div className={`container py-5 text-${props.mode==='light'?'dark':'light'}`}>
   <h3>{props.heading}</h3>
   <div className='mb-3'>
    <textarea style={{backgroundColor:props.mode==='light'?'white':'#100b22',color:props.mode==='light'?'black':'white'}}className='form-control' id="textBox" rows="8" value={text} onChange={handleOnChange}></textarea>

   </div>
   <button className='btn btn-primary mx-1 my-1' disabled={text.length===0}  onClick={handleOnClickUpCase}>UPPERCASE</button>
   <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleOnClickLowerCase}>lowercase</button>
   <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleOnClickCapCase}>CapCase</button>
   <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleOnClickCopy}>Copy Text</button>
   <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleOnClickExtraSpaces}>Extra Spaces</button>
   <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleOnClickClear}>Clear</button>
   </div>
   <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((text)=> text.length!==0).length} Words And {text.length} Characters</p>
        <p>  Read Time {0.008 * text.split(/\s+/).filter((text)=> text.length!==0).length} Minuties </p>
        <h2>Preview</h2>
        <p> {text} </p>
   </div>
   </>
  )
}
