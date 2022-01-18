import React, { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from '../Searchbar';
import ImagesInfo from '../ImageGallery/ImageInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    imageForSeach: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageForSeach: imageName });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImagesInfo imageForSeach={this.state.imageForSeach} />
        <ToastContainer />
      </Container>
    );
  }
}

export default App;
