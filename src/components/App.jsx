import { useState } from 'react';
import { Product } from "./Product.jsx";
import { BookList, Card } from "./Test.jsx";
import { Default } from './Default.jsx'
import { HiUser } from 'react-icons/hi'

const favouriteBooks = [
	{ id: 'id-1', name: 'JS for begginers'},
	{ id: 'id-2', name: 'React basics'},
	{ id: 'id-3', name: 'React Router overview'}
];

const UserMenu = ({ name }) => {
  return(
    <div>
      <p><HiUser className="my-icon" size="24"/>{name}</p>
    </div>
  )
}

const CustomBtn = ({ message, children}) => {
  return (
    <button onClick={() => alert(message)}>{children}</button>
  )
}

// const ClickCounter = ({ value, onUpdate}) => {
//   return <button onClick={onUpdate}>Current: {value}!</button>
// }

export default function App() {
 const ClickCounter = () => { // let clicks = 0; 
  const [ clicks, setClicks ] = useState(0);

  const handleClick = () =>{
     // clicks = clicks + 1;
    setClicks(clicks + 1);
  };
  return <button onClick={handleClick}>Current: {clicks}!</button> 
}

// const [ clicks, setClicks ] = useState(0);
// const handleClick = () =>{
//   //      // clicks = clicks + 1;
//       setClicks(clicks + 1);
//     };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1
    })
  };
  const updateY = () => {
    setValues({
      ...values,
      y: values.y +1
    })
  };
  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    <UserMenu name="Alice" />
    <button onClick={handleToggle}>{isOpen ? "hide" : "show"}</button>
    {isOpen && <p>Hello Alice!</p>}
    <h1>Books of the week</h1>
    <ClickCounter></ClickCounter>
    <ClickCounter></ClickCounter>
    <ClickCounter ></ClickCounter>
    {/* <button onClick={handleClick}>Current: {clicks}!</button> */}
    <CustomBtn message="Playing music!">Play music</CustomBtn>
    <CustomBtn message="Uploading data">Upload data</CustomBtn>
    <BookList books={favouriteBooks}/>
    <Card>
      <h3>Card title</h3>
      <Default variant="info" outlined elevated>Would you like to browse our recommended products?</Default>
      <Default variant="error"outlined elevated>There was an error during your last transaction</Default>
      <Default variant="success" elevated outlined> Payment received, thank you for your purchase</Default>
      <Default variant="warning" elevated outlined> Please update your profile contact information</Default>
      </Card>
    
      <h2>Best selling</h2>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}

