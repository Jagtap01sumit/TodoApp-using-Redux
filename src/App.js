import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo/>
     <Todo/>
    </div>
  );
}

export default App;









// step1 :create store give him reducer basic object
// step 2: wrap the root file into a <Provider> into index.js

//setp3 : define fuctionality is known as Slices

  //1.declare a intialState
  //2.use creaet Slice method which contains a name , intialState and a reducers

//step4: how to use a reducer fuctions
    //1. import useDespatch and a fuctionality we want to use ex. {addTodo}

    //2.dispatch and action ex. addTodo and take this data with you we'll be able to extract this data simply in the payload

//step5: Extract or send the data {removeTodo}
   //import useSelector and a fuctionality we want to use ex. {addTodo}
   //useSelector have access to callback



