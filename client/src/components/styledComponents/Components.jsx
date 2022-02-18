import React from "react";
import styled from "styled-components";


export const CustomButton = styled.div`

width:${props=>props.width || "200px" };
height:${props=>props.height || "40px"};
padding:${props=>props.padding || "1rem"} ;
background-color:${props=>props.background || "red"};
margin-right:10px;
border-radius:.2rem;


`