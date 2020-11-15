import styled from 'styled-components';

export const Container = styled.div`
    min-height:100%;
    text-align:center;
    background-image:linear-gradient(to bottom,rgba(0, 0, 230, 0.5),rgba(44, 140, 201, 0.9),rgba(108,128,128,1));
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
export const ProfileContainer = styled.div`
    height:70vh;
    display:flex;
    justify-content:center;
    background-image:url(${(props)=>props.srcBackground});
    padding-left:2%;
    padding-right:2%;
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
    opacity:90%;
`;
export const TextBox1 = styled.div`
    display:flex;
    flex-direction:column;
    background-color:rgba(50,10,250,0.5);
    width: 60%;
    align-self:center;
    border-radius:45px;
    padding-top:80px;
    padding-bottom:80px;
    margin-left:15px;
`;
export const ImgProfile = styled.img`
    src:${(props)=>props.src};
    height:70%;
    opacity:100%;
    align-self:center;
    border:10px double rgba(5,5,5,1);
    width:30%;  
    
` ;
export const ImgIcon = styled.img`
    src:${(props)=>props.src};
    width:45px;
    cursor:pointer;
     
` ;
export const IconContainer = styled.div`
    align-self:center;
    justify-content:space-between;
    width:15%;
    display:flex;
`;
export const ServicesContainer = styled.div`
    display:flex;
    margin-top:30px;
    flex-direction:column;
    align-itens:center;
`;
export const ServiceBox = styled.div`
    display:flex;
    background-color:rgba(105,105,105,0.7);
    width:80%;
    padding:10px 30px 10px 30px;
    align-self:center;    
    flex-direction:column;
`;
export const ServiceImg = styled.img`
    src:${(props)=>props.src};
    width:70px;
`;
export const ServiceImgTittle = styled.div`
    display:flex;
    justify-content:center;

`