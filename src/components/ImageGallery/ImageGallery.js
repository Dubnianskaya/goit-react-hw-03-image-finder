import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => (
  <ImageGalleryList>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        smallImage={webformatURL}
        largeImage={largeImageURL}
        tags={tags}
      />
    ))}
  </ImageGalleryList>
);

export default ImageGallery;
