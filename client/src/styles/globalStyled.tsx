import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
	${reset}

	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;700;800&display=swap');

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

	html, body {
		font-family: 'Montserrat', sans-serif;
		font-family: 'Poppins', sans-serif;
	}


`;
