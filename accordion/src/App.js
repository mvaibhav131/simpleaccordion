
import './App.css';

function App() {


  return (
   <div className="wrapper">
    <div className="accordion">
      {data.map((elem,ind)=>{
        return <div className="item">
        <div className="title">
             <h1>{elem.question}</h1>
             <span>+</span>
        </div>
        <div className="content">
          <p>{elem.answer}</p>
        </div>
            
        </div>
    })}
      
      
    </div>
   </div>
  );
}


const data= [
  {
    question : "que 1",
    answer : " lfjdsklj flksdjfklreoittof d lkfjsdlk ljlkfjdslfs vljdlvndnfjdkfj ljfjsdlkfjdsjkrjewfjklk vsdslfjdlkfjsdf dfjf"
  },
  {
    question : "que 2",
    answer : " lfjdsklj flksdjfklreoittof d lkfjsdlk ljlkfjdslfs vljdlvndnfjdkfj ljfjsdlkfjdsjkrjewfjklk vsdslfjdlkfjsdf dfjf"
  },
  {
    question : "que 3",
    answer : " lfjdsklj flksdjfklreoittof d lkfjsdlk ljlkfjdslfs vljdlvndnfjdkfj ljfjsdlkfjdsjkrjewfjklk vsdslfjdlkfjsdf dfjf"
  },
  {
    question : "que 4",
    answer : " lfjdsklj flksdjfklreoittof d lkfjsdlk ljlkfjdslfs vljdlvndnfjdkfj ljfjsdlkfjdsjkrjewfjklk vsdslfjdlkfjsdf dfjf"
  },

]



export default App;
