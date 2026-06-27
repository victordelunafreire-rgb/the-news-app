import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1a1a1a;
        font-family: 'Inter', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    `;
export const theme = {
	colors: {
		background: "#1A1A1A",
		card: "#2A2A2A",
		yellow: "#F5C842",
		white: "#FFFFFF",
		gray: "#888888",
		darkGray: "#444444",
	},
	fontSizes: {
		small: "11px",
		medium: "13px",
		large: "20px",
	},
};
