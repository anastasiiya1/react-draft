import clsx from "clsx";
import css from "./Default.module.css"

//   const getColor = variant => {
// 	switch (variant) {
// 		case 'info':
// 			return "blue";
// 		case 'success':
// 			return "green";
// 		case 'error':
// 			return "red";
// 		case "warning":
// 			return "yellow";
// 		default:
// 			throw new Error(`Unsupported variant prop value - ${variant}`)				
// 	}
//   }
  
export const Default = ({ variant, outlined, elevated, children }) => {
	return(
		<p 
		className ={ clsx(css[variant], {
			[css.isOutlined]: outlined,
			[css.isElevated]: elevated,
		})}>
		{children}
	</p>
	)
}