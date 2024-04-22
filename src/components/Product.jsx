export const Product = ({ name, imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder", price }) => {
  return (
    <>
      <h2>{name}</h2>
      <img
        src={imgUrl}
        alt={name}
        width="640"
      />
      <p>Price: {price} credits</p>
    </>
  );
};


export const Mailbox = ({username, message}) => {
	return(
		<>
		<p>Hello {username}!</p>
		{message.length > 0 && (
			<p>You have {message.length} unread messages</p>
		)}
		</>
	)
}