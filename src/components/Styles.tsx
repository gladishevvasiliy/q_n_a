import styled from 'styled-components'

export const StyledButton = styled.button`
  display: block;
  margin-bottom: 4px;
  min-width: 100px;
  padding: 10px;
  margin: 10px;
  border: 2px solid ${({ active }) => (active ? `#1cb0f6` : `#e5e5e5`)};
  border-bottom: ${({ active }) =>
    active ? `2px solid #1cb0f6` : `4px solid #e5e5e5`};
  color: ${({ active }) => (active ? `#1cb0f6` : `#000`)};
  background-color: ${({ active }) => (active ? `#ddf4ff` : `#fff`)};
  border-radius: 10px;

  :hover {
    background-color: ${({ active }) => (active ? `#ddf4ff` : `#f7f7f7`)};
    border-bottom: 2px solid ${({ active }) => (active ? `#1cb0f6` : `#e5e5e5`)};
  }
  :active {
    color: #1cb0f6;
    background-color: #ddf4ff;
    border: 2px solid #1cb0f6;
  }
`
