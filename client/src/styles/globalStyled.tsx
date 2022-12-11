import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
	${reset}

	*, *::after, *::before {
		box-sizing: border-box;
		margin:0;
		padding:0;
	}

	:root {
		--color-primary: #490fb4;
  		--color-secondary: #da4bfd;
		--color-secondary-200: #d94bfdc7;
	}


`;
