import React, { Component } from 'react';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

export default class ImagesInfo extends Component {
  state = {
    images: null,
    status: 'idle',
    page: 1,
  };

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  searchImages = () => {
    const KEY = '24391071-3bb2721b0275ed041db341680';
    const currentSeach = this.props.imageForSeach;

    this.setState({ status: 'pending' });

    return fetch(
      `https://pixabay.com/api/?q=${currentSeach}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    ).then(response => response.json());
  };

  componentDidUpdate(prevProps, prevState) {
    const previousSeach = prevProps.imageForSeach;
    const currentSeach = this.props.imageForSeach;

    if (previousSeach !== currentSeach) {
      this.resetPage();
      this.searchImages().then(images => {
        if (images.totalHits !== 0) {
          return this.setState({ images: images.hits, status: 'resolved' });
        }
        return this.setState({ status: 'rejected' });
      });
    }
  }

  onLoadMore = () => {
    this.incrementPage();
    this.searchImages().then(images => {
      this.setState(prevProps => ({
        images: [...prevProps.images, ...images.hits],
      }));
      this.setState({ status: 'resolved' });
    });
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <h2>Enter a query to seach for images</h2>;
    }

    if (status === 'pending') {
      return <p>loading</p>;
    }

    if (status === 'rejected') {
      return <p>Images by your query are not founded</p>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} />
          <Button onLoadMore={this.onLoadMore} />
        </>
      );
    }
  }
}
