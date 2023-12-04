import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinksWrapper = styled.div`  
  display: flex;
  gap: 30px;
`;

export const SingleLink = styled(Link)`
  width: 30px;
  height: 30px;
  svg {
    fill: var(--text-color-navy);
    width: 100%;
    height: 100%;
    transition: fill var(--transition-general);
    &:hover {
      fill: var(--text-color-red);
    }
  }
`;
