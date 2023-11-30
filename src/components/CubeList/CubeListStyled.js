import styled from "styled-components";

export const ItemsList = styled.ul`
  outline: 3px solid navy;
  width: 450px;
  height: 450px;
  display: flex;
  flex-wrap: wrap;
  li {
    outline: 2px solid brown;
    /* border: 2px solid brown; */
    width: 150px;
    height: 150px;
    div {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    /* object-fit: contain; */
      }
    }
  }
`;
