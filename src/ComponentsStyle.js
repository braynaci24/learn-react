import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: blue;
  ${props => props.theme === 'dark' && css`
    background: #000;
    color: #fff;
  `}
`;


