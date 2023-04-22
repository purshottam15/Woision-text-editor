import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,settext]=useState('Enter the text here')
    const onclickhandle=()=>{
       let newText=text.toUpperCase()
        settext(newText)
        props.showalert("Text change to upper case","success")
    }
    const onclickhandle1=()=>{
       let newText=text.toLowerCase()
        settext(newText)
        props.showalert("Text change to Lower case","success")
    }
    const onclickhandle2=()=>{
     
        settext(" ")
        props.showalert("Text is cleared","success")
    }
    const onclickhandle3=()=>{
     let form=document.getElementById('form')
      form.select()
      navigator.clipboard.writeText(form.value)
      props.showalert("Text Copy to clipboard","success")
    
       
        
     }
    const onchangehandle=(event)=>{
        settext(event.target.value)
    }
   
    const onclickhandle4=()=>{
      // let form=document.getElementById('form').value;?
     let split_text=text.split(" ")
     let sum=" "
     for(let i in split_text){
      sum=sum + split_text[i][0].toUpperCase() + split_text[i].slice(1) + " "
     }
     settext(sum);
     props.showalert("Text is capitalize","success")
     
        
         
      }
 
  return (
    <>
   
   
       
<div className="mb-3 container mt-4">
    <h1>{props.heading}</h1>
 
  <textarea className="form-control" value={text} id="form" onChange={onchangehandle} style={{backgroundColor:props.mode==="dark"?'#042743':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
  <button className='btn btn-primary mx-3'  onClick={onclickhandle}>Change to uppercase</button>
  <button className='btn btn-primary mx-3'  onClick={onclickhandle1}>Change to Lowercase</button>
  <button className='btn btn-primary mx-3'  onClick={onclickhandle2}>Clear the text</button>
  <button className='btn btn-primary mx-3'  onClick={onclickhandle3}>Copy to clipboard</button>
  <button className='btn btn-primary mx-3'  onClick={onclickhandle4}>Capitalize the text</button>

  


</div>
<div className="summary container">
    <h1>Your text summary</h1>
    <p>Your word {text.split(" ").length-1} and your character is {text.length-text.split(" ").length+1}</p>
    <h2>Preview</h2>
    <p id='preview'>{text}</p>
</div>

</>
  )
}
