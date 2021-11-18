import React, { useContext, useState } from "react";
import { AppContext } from "./Context";

const AddUser = () => {
	const { dispatchUserEvent } = useContext(AppContext);
	
	

	// const [name, setInput] = useState('')
	// const [age, setAge] = useState('')
	// const [bio, setBio] = useState('')
	const init = { fullName: "", age: "", bio: "" }
	const [input, setInput] = useState( init );

	const handleAddUser = () => {
		// const id = Math.random();
		// const user = [ id, input.fullName, input.age, input.bio];
		dispatchUserEvent("ADD_USER", input);
		setInput( init )
		// console.log(user);
	};
	// console.log(input)
	return (
		<div>
			<h3>Add New User</h3>
			{/* <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" /><br />
			<input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Enter your age" /><br />
			<textarea value={bio} onChange={e => setBio(e.target.value ) } placeholder="Enter your bio"></textarea><br /> */}

			<input
				value={input.fullName}
				onChange={(e) => setInput({ ...input, fullName: e.target.value })}
				placeholder="Enter your name"
			/>
			<br />
			<input
				type="number"
				value={input.age}
				onChange={(e) => setInput({ ...input,  age: e.target.value })}
				placeholder="Enter your age"
			/>
			<br />
			<textarea
				value={input.bio}
				onChange={(e) => setInput({ ...input,  bio: e.target.value })}
				placeholder="Enter your bio"></textarea>
			<br />

			<button onClick={handleAddUser}>Add User</button>
		</div>
	);
};

export default AddUser;
