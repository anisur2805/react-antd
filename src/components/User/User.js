import { useContext } from "react"
import { AppContext } from "./Context"

const User = ( {user, i }) => {
	
	console.log(user)
	const {dispatchUserEvent} = useContext(AppContext)
	
	const handleRemoveUser = (i) => {
		dispatchUserEvent('REMOVE_USER', i )
	}
	
	return (
		<div>
			<p>{i}</p>
			<h3> {user.fullName} </h3>
			<h5> {user.age} </h5>
			<p> {user.bio} </p>
			
			<button onClick={ () => handleRemoveUser(i) }>Delete User</button>
		</div>
	)
}
export default User;