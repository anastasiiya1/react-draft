

function SearchForm({ onSearch }) {

	function handleSubmit(e){
		e.preventDefault();
		const form = e.target;
		const topic = form.elements.topic.value;

		onSearch(topic);
		form.reset();
	}

  return (
	<div>
		<form onSubmit={handleSubmit}>
			<input type='text' name='topic' placeholder='Search articles..'/>
			<button>Search</button>
		</form>
	</div>
  )
}

export default SearchForm