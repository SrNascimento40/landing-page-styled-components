import styled from 'styled-components';

interface iStyled {
    backgroundColor: string
}

export const Title = styled.h1<iStyled>`
    color: blue;
	font-size: 50px;
	background-color: ${props => props.backgroundColor};
		//com props é possível criar props para alterar a cor em cada situação

	span {
		color: #000;
	}

`
