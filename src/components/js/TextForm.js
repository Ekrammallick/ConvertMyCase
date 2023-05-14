import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("enter your text");
   
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
   const handleOnClickClear = ()=>{
    setText('');
    props.showAlert('Text Cleard','Success');
   }
  return (
   <>
   <div className={`container py-5 text-${props.mode==='light'?'dark':'light'}`}>
   <h3>{props.heading}</h3>
   <div className='mb-3'>
    <textarea style={{backgroundColor:props.mode==='light'?'white':'#100b22',color:props.mode==='light'?'black':'white'}}className='form-control' id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>

   </div>
   <button className='btn btn-primary mx-1' onClick={handleOnClickUpCase}>UPPERCASE</button>
   <button className='btn btn-primary mx-1' onClick={handleOnClickLowerCase}>lowercase</button>
   <button className='btn btn-primary mx-1' onClick={handleOnClickCapCase}>CapCase</button>
   <button className='btn btn-primary mx-1' onClick={handleOnClickClear}>Clear</button>
   </div>
   <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h3>Your Text Summary</h3>
        <p>{text.split(' ').length}Words And {text.length} Characters</p>
        <p>  Read Time {0.008 * text.split(' ').length} Minuties </p>
        <h2>Preview</h2>
        <p> {text} </p>
   </div>
   </>
  )
}
