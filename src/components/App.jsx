import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGalleryList from "./ImageGallery/ImageCalleryList";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { getImages } from "helpers/api";
import s from './App.module.css'

class App extends Component {

  state = {
    images: [],
    page: 1,
    query: '',
    isModalOpen: false,
    error: null,
    largeImageURL: '',
    largeImageALT: '',
    isLoading: false,
  }

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query &&
      this.state.query !== ''
    ) {
      this.setState({ isLoading: true });
      const data = await getImages(this.state.query, this.state.page);
      // console.log(data);

      this.setState({
        images: data.hits,
        isLoading: false,
      });
    }

    if (this.state.page !== prevState.page && this.state.page !== 1) {
      const data = await getImages(this.state.query, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        isLoading: false,
      }));
    }
  }

  loadMore = () => {
  this.setState((prevState) => ({page: prevState.page + 1}))
}

  handleSubmit = query => {
    this.setState({
      
      query,
      page: 1,
    });
  }

  toggleModal = () => {
    this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
  }

  handleImageClick = (url, alt) => {
    this.setState({ largeImageURL: url, largeImageALT: alt });
    this.toggleModal();
  }

  render() {
    const { images, isModalOpen, largeImageALT, largeImageURL } = this.state
    
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading ?
          (<Loader />) :
       
          (<ImageGalleryList images={images} onOpenModal={this.handleImageClick} />)}
        {this.state.query && !this.state.isLoading && (<Button onNextPage={this.loadMore}/>)}
            
            {isModalOpen && (
              <Modal
                src={largeImageURL}
                alt={largeImageALT}
                onModalClose={this.toggleModal}
              />)}
                 
      </div>
    )
  }  
}

export default App;