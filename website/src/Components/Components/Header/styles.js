import styled from 'styled-components';
import {Link} from "react-router-dom"

export const Container = styled.div`
    min-height:20vh;
    text-align:center;
    background-image:linear-gradient(to bottom,rgba(59, 52, 52, 0.667),rgba(59, 52, 52, 0.567),rgba(59, 52, 52, 0.367));
    border-bottom:3px solid black;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;
export const DropdownContent = styled.div`    
    border-radius:10px;
    display: none;
    position: absolute;
    background-color: rgba(61, 59, 66, 0.705);
    border:1px solid rgba(70, 66, 82, 0.705);
    white-space:nowrap;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
       
`;
export const Dropdown = styled.div`    
    position: relative;
    display: inline-block;
    background-color:inherit;   
 
    &:hover {
        .${(props)=>props.dropcontentClass} {
            display: block;
        }
  }

`;
export const Dropdowns = styled.div`    
    display:flex;
    justify-content:space-evenly;
    background-color:inherit;    
    margin-bottom:10px;
`;
export const TextH1 = styled.h1`
   
    font-size:${(props)=>props.fontSize || "4rem"};
`;
export const TextH2 = styled.h2`
    
    font-size:${(props)=>props.fontSize || "3.5rem"};
`;
export const TextH3 = styled.h3`
    font-size:${(props)=>props.fontSize || "2.5rem"};
    font-family:FontQuicksand;  
     
    color:white;
    margin-top:${(props)=>props.marginTop || "auto"};
    margin-bottom:${(props)=>props.marginBottom || "auto"};
`;
export const TextH4 = styled.h4`
  
    font-size:${(props)=>props.fontSize || "2rem"};
`;
export const TextH5 = styled.h5`
   
    font-size:${(props)=>props.fontSize || "1.5rem"};
`;
export const TextH6 = styled.h6`
    
    font-size:${(props)=>props.fontSize || "1rem"};
`;
export const TextSpan = styled.text`
    font-family:FontQuicksand;
    font-size:${(props)=>props.fontSize || "1rem"};
`
export const StyledLink = styled(Link)`
    color:${(props)=>props.color ||"#000000"};
    display: block;
    text-decoration: none;
    font-size:${(props)=>props.fontSize || "2rem"};
    padding: 0 10px 0 10px;
    width:100%;
    margin: 5px 0 5px 0;
    
    &:hover{
        
        color:${(props)=>props.hcolor ||"#19c55b"};
    }
`;