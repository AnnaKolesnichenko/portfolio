import styled from 'styled-components';

export const TechStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  box-sizing: border-box;
  background-color: #0f1933;
  max-width: 1440px;
  border-top: 2px solid #182544;
`;

export const MainTitleStyled = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #e2e8f0;
  margin-top: 0;
  font-family: 'Montserrat', sans-serif;
`;

export const TechListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  // max-width: 974px;

  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TechItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #182544;
  border-radius: 15px;
  padding: 10px 20px;

  &:hover {
    transform: scale(115%);
    transition: transform 500ms ease;
    cursor: pointer;
  }
`;

export const TechImgStyled = styled.img`
  width: 60px;
  height: 60px;
`;

export const TechNameStyled = styled.span`
  display: block;
  width: 110px;
  color: #94a3b8;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;
