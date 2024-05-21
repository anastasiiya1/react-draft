import { useState } from 'react';

const SearchBar = () => {
const [inputValue, setInputValue] = useState('');
const handleChange = (event) => {
	setInputValue(event.target.value);
}

	return(
		<>
		<input type="text" value={inputValue} onChange={handleChange}/>
		<p>{inputValue}</p>
		</>
	)
}

export default SearchBar