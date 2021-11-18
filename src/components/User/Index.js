import React, { useState } from "react";
import styled from "styled-components";
import AddUser from "./AddUser";
import { AppContext } from "./Context";
import UserList from "./UserList";

const Users = styled.div`
	color: "#f00";
`;

export default function RootUser() {
	const [users, setUsers] = useState([]);

	const dispatchUserEvent = (actionType, payload) => {
		switch (actionType) {
			case "ADD_USER":
				setUsers((prev) => [...prev, payload]);
				return;
			case "REMOVE_USER":
				setUsers(users.splice(payload, 1));
				return;
			default:
				return;
		}
	};

	return (
		<Users>
			<AppContext.Provider value={{ users, dispatchUserEvent }}>
				<AddUser />
				<UserList />
			</AppContext.Provider>
		</Users>
	);
}
