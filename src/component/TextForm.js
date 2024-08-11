import React, { useState } from 'react';
export default function Textform(props){
    
    const toup =()=>{
        console.log("button cliked");
        let newText=text.toUpperCase();
        setText(newText);

    }
    const onChangee=(event)=>{
        console.log(event.target.value);
        setText(event.target.value);
    }
    function toclear(event){
        const cl="";
        setText(cl);

    }
    function tolow(){
        let low=text.toLowerCase();
        setText(low);
    }
    function toReverse(){
        const str=[...text].reverse().join("");
        setText(str);
    }
    const [text, setText] = useState("");

    return (
    <>
        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="form-floating">
                <textarea value ={text} className="form-control" onChange={onChangee} id="floatingTextarea" rows="8" autoFocus="true" placeholder=" type here"></textarea>
            </div>
            <div>
            <button type="button" className="btn btn-dark mx-1 my-2" onClick={toup}>To-upper</button>
            <button type="button" className="btn btn-dark mx-1 my-2" onClick={tolow}>To-lower</button>
            <button type="button" className="btn btn-dark mx-1 my-2" onClick={toReverse}>Reverse</button>
           
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={toclear}>clear</button>
            </div>
        </div>
        <div className='container'>
            <h1>
                your text's additional information:-
            </h1>
            <p>
                you text contains {text.split(" ").length} words and {text.length} character
            </p>
            <p>{0.008*text.split(" ").length} minutes to read your text</p>
            <h2>
                preview 
            </h2>
            <p>{text}</p>

        </div>
    </>
    
    );
}