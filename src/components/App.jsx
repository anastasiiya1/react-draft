// import { useState, createContext, useContext} from "react";
// import { Product } from "./Product.jsx";
// import { BookList, Card } from "./Test.jsx";
// import { Default } from './Default.jsx'
// import { HiUser } from 'react-icons/hi'
// import LangSwitcher from './LangSwitcher';
// import LoginForm from './LoginForm';
// import CoffeeSelector from './CoffeeSelector';
// import CoffeeCondiments from './CoffeeCondiments';
// import FeedbackForm from './FeedbackForm';
// import axios from "axios";
// import ArticleList from "./ArticleList";
// import { fetchArticlesWithTopics } from "./articles-api";
// import SearchForm from "./SearchForm";
// import VideoPlayer from "./VideoPlayer";

import { useParams } from "react-router-dom";
import { Routes, Route, NavLink} from "react-router-dom";
import clsx from "clsx";
import Home from '../pages/Home';
import About from "../pages/About";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import css from "./App.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

 const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to='/about' className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to='/products' className={buildLinkClass}>
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:productId" element={<ProductDetails/>}/>
      </Routes>
    </>
  );
};

export default App;

// const favouriteBooks = [
// 	{ id: 'id-1', name: 'JS for begginers'},
// 	{ id: 'id-2', name: 'React basics'},
// 	{ id: 'id-3', name: 'React Router overview'}
// ];

// const UserMenu = ({ name }) => {
//   return(
//     <div>
//       <p><HiUser className="my-icon" size="24"/>{name}</p>
//     </div>
//   )
// }

// const CustomBtn = ({ message, children}) => {
//   return (
//     <button onClick={() => alert(message)}>{children}</button>
//   )
// }

// const ClickCounter = ({ value, onUpdate}) => {
//   return <button onClick={onUpdate}>Current: {value}!</button>
// }

// export default function App() {
//  const ClickCounter = () => { // let clicks = 0;
//   const [ clicks, setClicks ] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked zero times`
//   }, [])

//   // const handleClick = () =>{
//   //    // clicks = clicks + 1;
//   //   setClicks(clicks + 1);
//   // };
//   return <button onClick={() => setClicks(clicks + 1)}>Current: {clicks}!</button>
// }

// // const [ clicks, setClicks ] = useState(0);
// // const handleClick = () =>{
// //   //      // clicks = clicks + 1;
// //       setClicks(clicks + 1);
// //     };

//   // const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1
//     })
//   };
//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y +1
//     })
//   };

//   // const Modal = () => {
//   //   useEffect(() => {
//   //     setInterval(() => {
//   //       console.log(`Interval - ${Date.now()}`);
//   //     }, 200)
//   //   }, []);

//   //   return <div>Modal</div>
//   // }

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/* <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal/>} */}
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>
//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     <UserMenu name="Alice" />
//     <button onClick={handleToggle}>{isOpen ? "hide" : "show"}</button>
//     {isOpen && <p>Hello Alice!</p>}
//     <h1>Books of the week</h1>
//     <ClickCounter></ClickCounter>
//     <ClickCounter></ClickCounter>
//     <ClickCounter ></ClickCounter>
//     {/* <button onClick={handleClick}>Current: {clicks}!</button> */}
//     <CustomBtn message="Playing music!">Play music</CustomBtn>
//     <CustomBtn message="Uploading data">Upload data</CustomBtn>
//     <BookList books={favouriteBooks}/>
//     <Card>
//       <h3>Card title</h3>
//       <Default variant="info" outlined elevated>Would you like to browse our recommended products?</Default>
//       <Default variant="error"outlined elevated>There was an error during your last transaction</Default>
//       <Default variant="success" elevated outlined> Payment received, thank you for your purchase</Default>
//       <Default variant="warning" elevated outlined> Please update your profile contact information</Default>
//       </Card>

//       <h2>Best selling</h2>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const myContext = createContext();
//   const contextValue = useContext(myContext);

//   async function handleSearch(topic) {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);

//       const data = await fetchArticlesWithTopics(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }

// useEffect(() => {
//   async function fetchArticles() {
//     try {
//       setLoading(true);
//       const data = await fetchArticlesWithTopics("react");
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }
//   fetchArticles();
// }, []);

//   return (
//     <>
//       <h1>Latest articles</h1>
//       <SearchForm onSearch={handleSearch} />
//       <VideoPlayer source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
//       {loading && <p>Loading data, please wait..</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </>
//   );
// };

// export default App;
