import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	
	body {
		background-color: ${({ theme }) => theme.colors.body};
		font-size: 20px;
	}
`