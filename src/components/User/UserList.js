import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./Context";
import User from "./User";

const UserStyle = styled.div`
	color: inherit;
`;
export default function UserList() {
	const { users } = useContext(AppContext);

	return (
		<UserStyle>
			<h3>Available Users</h3>
			{users.map((user, i) => (
				<User key={i} i={i} user={user} />
			))}
		</UserStyle>
	);
}
