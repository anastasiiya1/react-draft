
export const BookList = ({ books }) => {
	return(
		<ul>
		{books.map((book) => {
			return <li key={book.id}>{book.name}</li>
		})
		}
		</ul>
	)
}

export const Card = ({ children }) => {
	return(
		<>
		<div>{children}</div>
		</>
	)
}