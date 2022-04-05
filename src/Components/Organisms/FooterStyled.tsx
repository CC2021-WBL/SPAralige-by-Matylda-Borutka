import styled from '@emotion/styled';

// import { styled } from '@mui/material/styles';

const FooterStyled = styled('div')`
  height: 266px;
  width: 100%;
  color: white;
  background-color: tomato;
  display: flex;
  justify-content: space-between;
  .footFirst {
    text-align: left;
  }
  .footSecond {
    text-align: right;
  }
`;

export default FooterStyled;
