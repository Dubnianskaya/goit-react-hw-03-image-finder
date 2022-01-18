import React from 'react';
import { LoadMoreBtn, ButtonContainer } from './Button.styled';

const Button = ({ onLoadMore }) => (
  <ButtonContainer>
    <LoadMoreBtn type="button" onClick={onLoadMore}>
      Load more
    </LoadMoreBtn>
  </ButtonContainer>
);

export default Button;
