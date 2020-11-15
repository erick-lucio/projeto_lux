import React from 'react';
//styled
import { Container ,TextH1,ProfileContainer,TextBox1,TextH2,TextH3,ImgProfile,ImgIcon,IconContainer,ServicesContainer,ServiceBox,ServiceImg,ServiceImgTittle} from './styles';

//Imgs
import PersonalImg from "../../../../assets/imgs/eu 1.png"
import BackGroundGif from "../../../../assets/imgs/4k-abstract-blue-wireframe-hitech-background-clip.gif"
import IconShop from "../../../../assets/icons/icons8-shop-96.png"
//Icons
import EmailIcon from "../../../../assets/icons/email_icon.png"
import WhatsAppIcon from "../../../../assets/icons/whatsapp_icon.png"

const MainLandingPage = () => {
  return (
    <Container>
      <ProfileContainer srcBackground={BackGroundGif}>        
        <ImgProfile src={PersonalImg}></ImgProfile>
        <TextBox1>
          <TextH3 fontSize={"2rem"} marginTop={"15px"}>
            Ola sou Erick Lucio,trabalho com desenvolvimento de aplicações Web, Mobile e Sistemas.
          </TextH3>
          <TextH3 fontSize={"2rem"} marginTop={"15px"}>
            Ofereço consultoria para você ou sua empresa,na qual busco compreender suas demandas e oferecer a melhor solução para o seu negocio.
          </TextH3>
          <TextH3 fontSize={"2rem"} marginTop={"15px"}>
            Possui Interesse? Entre ja em contato.
          </TextH3>
          <IconContainer>
            <ImgIcon src={EmailIcon}></ImgIcon>
            <ImgIcon src={WhatsAppIcon}></ImgIcon>
          </IconContainer>

        </TextBox1>
      </ProfileContainer>
      <ServicesContainer>
        <TextH1>Alguns soluções a qual disponibilizo</TextH1>
        <ServiceBox>
          <ServiceImgTittle>
            <ServiceImg src={IconShop}></ServiceImg>
            <TextH3>Lojas Virtuais </TextH3>
          </ServiceImgTittle>
          <TextH3>Lojas Virtuais customizadas Com apropriada integração ao meios de pagamentos mais famosos como boleto,cartão...</TextH3>
        </ServiceBox>
      </ServicesContainer>
    </Container>
  );
};

export default MainLandingPage;
