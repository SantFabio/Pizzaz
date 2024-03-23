import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 1.4rem 0 1.4rem 0;
  `;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-left: 2.0rem;
  width: 21.4rem;
  height: 4.0rem;
  font-size: ${({ theme }) => theme.font.sm};
  border: 1px solid ${({ theme }) => theme.color.hover};
  border-radius: 20px;
  cursor: pointer;
`;

export const DropdownContent = styled.ul`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const DropdownOption = styled.li`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;