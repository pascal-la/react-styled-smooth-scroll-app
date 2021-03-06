import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  border-radius: 50px;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
  }
`;
