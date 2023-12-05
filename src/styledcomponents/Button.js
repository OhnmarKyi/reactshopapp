import styled from "styled-components";

export const StyledButton=styled.button`
background:${props => props.primary? "#BF4F74" : "white"};
color:${props => props.primary? "white" : "#BF4F74"};
font-size: 1.2em;
padding: 1em 5em;
border:${props => props.primary? "3px solid #BF4F74" : "3px solid #007aa5;"}; 
border-radius: 3px;
`