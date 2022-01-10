import React from 'react'
import {Button} from "@material-ui/core";
import styled from "styled-components";
import tokens from "../../data/tokens"
import "./Button.css"

const Btn = styled(Button)`
  && {
    text-transform: none;
    background-color: #808B96;
    color: ${tokens.colors.white};
    font-size: ${tokens.text.s.size};
    font-weight: ${tokens.text.s.weight};
    border: ${tokens.text.m.spacing};
    border-radius: ${tokens.radius.pill};
    padding: 1px 12px;
    line-height: ${tokens.spacing.xl};
    min-width: 6.25rem;
    outline: none;
  }
`;

const IconDiv = styled.div`
  color: ${tokens.colors.black};
  background: ${tokens.colors.white};
  border-radius: ${tokens.radius.circle};
  height: 1.6875rem;
  width: 1.6875rem;
  line-height: 2.1875rem;
  text-align: center;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const TextSpan = styled.span`
`

export const CustomButton = ({text,icon}) => {
    return (
     
          < Btn endIcon={icon? <IconDiv>{icon}</IconDiv>:null}>
              <TextSpan>{text}</TextSpan>
          </Btn>  
      
    )
}

export default CustomButton;