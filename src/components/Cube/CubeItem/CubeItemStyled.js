import styled from "styled-components";

export const ItemS = styled.li`
  outline: 2px solid brown;  
  width: 150px;
  height: 150px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  div {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;      
    }
  }
`;
