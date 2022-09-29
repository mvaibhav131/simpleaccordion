import {useState} from 'react';
import './App.css';

function App() {
  const [selected,setSelected]= useState(null);

  const toggle =(i)=>{
    if(selected === i){
      return setSelected(null);
    }
    setSelected(i);
  }


  return (
   <div className="wrapper">
    <div className="accordion">
      {data.map((elem,i)=>(
        <div key={i} className="item">
        <div className="title" onClick={()=>toggle(i)}>
             <h1>{elem.question}</h1>
             <span>{selected === i ? "-" : "+"}</span>
        </div>
        <div className={selected === i ? "content show" : "content"}>
          <p>{elem.answer}</p>
        </div>
            
        </div>
    ))}
      
      
    </div>
   </div>
  );
}


const data= [
  {
    question : "What are the features of React?",
    answer : "  React is a JavaScript Library created by Facebook for creating dynamic and interactive applications and building better UI/UX design for web and mobile applications. React is an open-source and component-based front-end library. React is responsible for the UI design. React makes code easier to debug by dividing them into components. "
  },
  {
    question : "What is JSX?",
    answer : " JSX is a React extension to the JavaScript language syntax which provides a way to structure component rendering using syntax familiar to many developers. It is similar in appearance to HTML."
  },
  {
    question : "Can web browsers read JSX directly?",
    answer : " Browsers can't read JSX because there is no inherent implementation for the browser engines to read and understand them. "
  },
  {
    question : "What is the virtual DOM?",
    answer : " A virtual DOM is a lightweight JavaScript representation of the Document Object Model used in declarative web frameworks such as React, Vue.js, and Elm. Updating the virtual DOM is comparatively faster than updating the actual DOM."
  },

]



export default App;
