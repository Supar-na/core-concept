import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const flowers= ['Rose','Sunflower','Lily','jesmine']
  const products = [
    { name: 'photoshop' ,price:'30$'},
    { name:  'illustrator' , price :'20$'},
    { name:  'XD', price:'45$'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Hello I an React </h2>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            flowers.map(flower => <li>{flower}</li>)
          }
        </ul>
        <ol>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ol>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        <Reaction name="happy" job="laughing"></Reaction>
        <Reaction name="sad" job="crying"></Reaction>
      </header>
    </div>
  );
}

function Users(){
  const [users , setUsers] = useState([]);
  useEffect(() =>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data));

  },[])


  return (
    <div>
      <h2>Dynamic users : {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count , setCount] = useState(30);
  const handleCount =()=> setCount(count + 1 );
 
  return(
    <div>
      <h2>count :{count}</h2>
      <button onClick = {handleCount}>Add</button>
      <button onClick = {()=> setCount(count - 1 )}>Remove</button>
    </div>
    
  )
}

function Product(props){
  const {name,price} = props.product;
  const productStyle ={
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'maroon',
    height: '200px',
    width: '200px',
    float: 'left',
  }
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  )
}

function Reaction(props){
  return (
    <div style ={{border:'2px solid red',margin: '10px'}}>
      <h2>My name : {props.name}</h2>
      <h3> My job : {props.job}</h3>
    </div>
  );
}
export default App;
