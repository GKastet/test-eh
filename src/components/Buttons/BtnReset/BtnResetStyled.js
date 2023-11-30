import styled from "styled-components";

export const BtnResetS = styled.button`
  width: 100px;
  padding: 10px;
  color: var(--text-color-navy);
  border: 1px solid var(--text-color-navy);
  border-radius: 10px;
  background-color: transparent;
  transition: border var(--transition-general), color var(--transition-general);
  &:hover {
    border: 1px solid var(--text-color-red);
    color: var(--text-color-red);
  }
`;
