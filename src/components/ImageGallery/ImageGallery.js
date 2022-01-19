import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images, onModalShow }) => (
  <ImageGalleryList>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        smallImage={webformatURL}
        largeImage={largeImageURL}
        tags={tags}
        onModalShow={onModalShow}
      />
    ))}
  </ImageGalleryList>
);

export default ImageGallery;
