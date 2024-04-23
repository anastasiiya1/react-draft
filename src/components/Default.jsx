import './Default.css';

  const getColor = variant => {
	switch (variant) {
		case 'info':
			return "blue";
		case 'success':
			return "green";
		case 'error':
			return "red";
		case "warning":
			return "yellow";
		default:
			throw new Error(`Unsupported variant prop value - ${variant}`)				
	}
  }
  
export const Default = ({ variant, outlined, elevated, children }) => {
	const className = ['alert', variant];
	
	if(outlined) {
		className.push('is-outlined');
	}

	if (elevated) {
		className.push('is-elevated');
	}

	return <p className={className.join(' ')} style={{
        backgroundColor: getColor(variant),
      }}>{children}</p>
}