import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Welcome = styled.h1 `
  font-size: 4em;
  margin-top: 80px;
`;

export const Instructions = styled.span `
  margin-top: 20px;
  font-size: 1.5em;
`;

export const Form = styled.form `
  margin-top: 40px;
  display: flex;
  height: 60px;
`;

export const Input = styled.input `
  height: 50px;
  font-size: 1.2em;
  padding: 0 24px;
  border-radius: 5px 0 0 5px;
  color: #095B9B;
  border: 2px solid #E90003;
  border-right: 0;

  ${(props) =>
    props.hasError &&
    css`
      border: 2px solid red;
    `}
`;

export const Button = styled.button`
  width: 210px;
  background: #095B9B;
  border-radius: 0 5px 5px 0;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;
  height: 50px;
  img {
    margin-left: 5px;
    height: 20px;
    width: 20px;
    vertical-align: bottom;
  }

  &:hover {
    background: ${shade(0.2, '#E90003')};
  }
`;

export const PokemonCard = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 500px;
  justify-content: space-evenly;
  background: #095B9B;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
`;

export const AvatarWrapper = styled.div`
  text-align: center;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 40px;
`;

export const Avatar = styled.img`
  height: 230px;
  width: 230px;
`;

export const PokemonDetails = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  font-size: 16px;
`;