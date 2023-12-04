import styled from "styled-components";

export const PageWrapper = styled.main`
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SectionsWrapper = styled.div`  
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 100px;
  }
`;
