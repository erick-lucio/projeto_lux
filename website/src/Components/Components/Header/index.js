import React from 'react';

import { Container , TextH1 , Dropdowns , Dropdown ,  DropdownContent , TextSpan , StyledLink} from './styles';

const Header= () => {
  return (
    <Container>
      <StyledLink hcolor="#000000" fontSize="4rem" color="#000000" to="/" >Erick Dev</StyledLink>
      <Dropdowns>
        <Dropdown dropcontentClass="dropteste">
          <TextSpan fontSize="1.5rem">Todo List</TextSpan>
          <DropdownContent className="dropteste">
            <StyledLink to="/todos/ideas">Ideias</StyledLink>
            <StyledLink to="/todos/frontend">Front End</StyledLink>
            <StyledLink to="/todos/backend">Back End</StyledLink>
          </DropdownContent>
        </Dropdown>
        <Dropdown dropcontentClass="dropteste">
          <TextSpan fontSize="1.5rem">Wow</TextSpan>
          <DropdownContent className="dropteste">
            <StyledLink to="#">Link 0</StyledLink>
            <StyledLink to="#">Link 1</StyledLink>
            <StyledLink to="#">Link 2</StyledLink>
            <StyledLink to="#">Link 3</StyledLink>
            <StyledLink to="#">Link 4</StyledLink>
          </DropdownContent>
        </Dropdown>
        <Dropdown dropcontentClass="dropteste">
          <TextSpan fontSize="1.5rem">Blog</TextSpan>
          <DropdownContent className="dropteste">
            <StyledLink to="#">Blog</StyledLink>

          </DropdownContent>
        </Dropdown>
        <Dropdown dropcontentClass="dropteste">
          <TextSpan fontSize="1.5rem">Ti News</TextSpan>
          <DropdownContent className="dropteste">
          <StyledLink to="#">IA</StyledLink>
          <StyledLink to="#">Quantica</StyledLink>
          <StyledLink to="#">Desenvolvimento</StyledLink>
          <StyledLink to="#">Trending</StyledLink>
          
          </DropdownContent>
        </Dropdown>
        <Dropdown dropcontentClass="dropteste">
          <TextSpan fontSize="1.5rem">Paginas Avulsas</TextSpan>
          <DropdownContent className="dropteste">
          <StyledLink to="#">Projeto 1</StyledLink>
          <StyledLink to="#">Projeto 2</StyledLink>
          <StyledLink to="#">Projeto 3</StyledLink>
          <StyledLink to="#">Projeto 4</StyledLink>
          <StyledLink to="#">Projeto 5</StyledLink>
          </DropdownContent>
        </Dropdown>
      </Dropdowns>
    </Container>
  );
};

export default Header;
