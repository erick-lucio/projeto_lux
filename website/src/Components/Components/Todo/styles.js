import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
`;

export const TodosBoxes = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    height: 100%;

`;
export const Todos = styled.div`
    border-radius:20px;
    border:2px dashed rgba(51, 8, 151, 0.658);
    width:70%;    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    text-align:center;
    background-color:rgba(102, 248, 4, 0.5);
    padding-right:5%;
    padding-left:5%;
    margin-top:3%;
    margin-bottom:3%;
    padding-top:2%;
    padding-bottom:2%;
`;
export const ProgressBarIn = styled.div`
    background-color:${(props)=>props.progress<=25?"#cc1919":props.progress>25 & props.progress<80?"#c8f10d":props.progress>=80?"#09ff00":"#09ff00" };  
    width:${(props)=>(props.progress>=100?100:props.progress )+ "%" || 0};
    height: 15%;
    align-self:center;
    
    border:1px solid ${(props)=>props.progress<=25?"#cc1919":props.progress>25 & props.progress<80?"#c8f10d":props.progress>=80?"#09ff00":"#09ff00" };  
    border-radius:50px;
`;
export const ProgressBarOut = styled.div`
    width:80%;
    background-color:white;
    height: 15%;
    align-self:center;
    margin-bottom:1%;
    border-radius:50px;
`;


export const TextH1 = styled.h1`
   
    font-size:${(props)=>props.fontSize || "4rem"};
`;
export const TextH2 = styled.h2`
    margin-bottom:1%;
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
    margin-bottom:3%;
    font-size:${(props)=>props.fontSize || "1.5rem"};
    text-align:justify;
`;
export const TextH6 = styled.h6`
    
    font-size:${(props)=>props.fontSize + "rem" || "1rem"};
`;
