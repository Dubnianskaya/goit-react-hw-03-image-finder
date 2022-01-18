import React from 'react';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ smallImage, largeImage, tags }) => (
  <ImageGalleryItemStyled>
    <ImageGalleryItemImage src={smallImage} alt={tags} />
  </ImageGalleryItemStyled>
);

export default ImageGalleryItem;
