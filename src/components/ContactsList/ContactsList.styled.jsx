import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const DeleteBtn = styled.button`
  /* CSS */

  align-items: center;
  background-color: #ffe7e7;
  background-position: 0 0;
  border: 1px solid #fee0e0;
  border-radius: 11px;
  box-sizing: border-box;
  color: #d33a2c;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  line-height: 33.4929px;
  list-style: outside url(https://www.smashingmagazine.com/images/bullet.svg)
    none;
  padding: 2px 12px;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-underline-offset: 1px;
  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  word-break: break-word;

  &:active,
  &:hover,
  &:focus {
    outline: 0;
  }

  &:active {
    background-color: #d33a2c;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
    color: #ffffff;
  }

  &:hover {
    background-color: #ffe3e3;
    border-color: #faa4a4;
  }

  &:active:hover,
  &:focus:hover,
  &:focus {
    background-color: #d33a2c;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
    color: #ffffff;
  }
`;
