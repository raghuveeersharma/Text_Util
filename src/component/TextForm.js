import React, { useState } from 'react';
export default function Textform(props){
    
    const toup =()=>{
        console.log("button cliked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converter to upper case!","success")

    }
    const onChangee=(event)=>{
        console.log(event.target.value);
        setText(event.target.value);
    }
    function toclear(event){
        const cl="";
        setText(cl);
        props.showAlert("Clear the text area!","success")
        

    }
    function tolow(){
        let low=text.toLowerCase();
        setText(low);
        props.showAlert("converter to lower case!","success")
    }
    function toReverse(){
        const str=[...text].reverse().join("");
        setText(str);
        props.showAlert("converter to reverse!","success")
    }
    const [text, setText] = useState("");
    const toCopy=()=>{
        let text= document.getElementById("floatingTextarea");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success")


    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra space!","success")
    }
   



    return (
    <div className='container my-3'>
        <div className='container' style={{backgroundColor:props.mode==='light'?'white':'#214071',
            color:props.mode==='light'?'black':'white'
        }}>
            <h3>{props.heading}</h3>
            <div className="form-floating">
                <textarea value ={text} className="form-control" onChange={onChangee} id="floatingTextarea" rows="8" autoFocus={true}placeholder=" type here" style={{backgroundColor:props.mode==='light'?'white':'#292828',
                    color:props.mode==='light'?'black':"white"
                }}></textarea>
            </div>
            <div>
            <button type="button" className="btn btn-dark mx-1 my-2" onClick={toup}>To-upper</button>
            <button type="button" className="btn btn-dark mx-1 my-2" onClick={tolow}>To-lower</button>
            <button type="button" className="btn btn-dark mx-1 my-2" onClick={toReverse}>Reverse</button>
            <button type="button" className="btn btn-dark mx-1 my-2" onClick={toCopy}>Copy text</button>
            <button type="button" className="btn btn-dark mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
           
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={toclear}>clear</button>
            </div>
        </div>
        <div className='container' style={{backgroundColor:props. mode==='light'?'white':'#214071',
            color:props.mode==='light'?'black':'white'
        }}>
            <h1>
                your text's additional information:-
            </h1>
            <p>
                your text contains {text.length===0?0:text.split(" ").length} words and {text.length} character.
            </p>
            <p>{text.length===0?0:0.008*text.split(" ").length} minutes to read your text</p>
            <h2>
                preview 
            </h2>
            <p>{text.length>0?text:"Enter your Text to preview!!"}</p>

        </div>
    </div>
    
    
    
    );
}