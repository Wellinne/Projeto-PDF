import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #A92397;
  font-family: 'Hind Guntur', sans-serif;
  font-weight: 500;
  font-size: 2rem;
`;

export const Button = styled.button`
  width: 150px;
  background-color: #FFFFFF;
  border: 1px solid #E7E7E7;
  border-radius: 14px;
  color: #A92397;
  font-family: 'Hind Guntur', sans-serif;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #E7E7E7;
  }
`;