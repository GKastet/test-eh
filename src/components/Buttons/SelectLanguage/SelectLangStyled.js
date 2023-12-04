import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
`;

export const ButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid var(--text-color-navy);
  color: var(--text-color-navy);
  transition: border var(--transition-general), color var(--transition-general);

  &:hover {
    border: 1px solid var(--text-color-red);
    color: var(--text-color-red);
  }
`;

export const LanguageList = styled.ul`
  display: none;
  
  &.openSelect {
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: absolute;
    right: 0;
    top: calc(100% + 8px);
    padding: 15px 10px;
    background: white;
    background-image: linear-gradient(
      to bottom,
      var(--background-violet),
      var(--background-main),
      var(--background-violet)
    );
    border-radius: 20px;
    font-family: GilroyRegular, sans-serif;
    color: var(--text-color-navy);
    z-index: 1;
  }
`;

export const LangItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  label {
    cursor: pointer;
  }
`;
