import styled from 'styled-components';

export const Container = styled.div`
    
    background-color:rgba(21, 223, 88, 0.397);
`;

export const TodosBoxes = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    flex:1 1 200px;
    align-items:center;
`;


export const TextH1 = styled.h1`
    text-align:center;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    margin-left:10%;
    margin-right:10%;
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
