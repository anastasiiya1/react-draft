import { Product } from "./Product.jsx";
import { BookList, Card } from "./Test.jsx";
import { Default } from './Default.jsx'

const favouriteBooks = [
	{ id: 'id-1', name: 'JS for begginers'},
	{ id: 'id-2', name: 'React basics'},
	{ id: 'id-3', name: 'React Router overview'}
];

export default function App() {
  return (
    <div>
    <h1>Books of the week</h1>
    <BookList books={favouriteBooks}/>
    <Card>
      <h3>Card title</h3>
      <Default variant="info">Would you like to browse our recommended products?</Default>
      <Default variant="error">There was an error during your last transaction</Default>
      <Default variant="success"> Payment received, thank you for your purchase</Default>
      <Default variant="warning"> Please update your profile contact information</Default>
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

