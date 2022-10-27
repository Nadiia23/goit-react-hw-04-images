import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageCalleryList";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { getImages } from '../helpers/api';
import s from './App.module.css'


export class App extends Component {

  state = {
    status: 'idle',
    images: [],
    currentPage: 1,
    query: '',
    isModalOpen: false,
    error: null,
    largeImageURL: '',
    largeImageALT: '',
    totalImages: 0,
  }
  
  componentDidUpdate(_, prevState) {

    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending' })
      
      setTimeout(() => {
        this.getImagesApi(); 
      }, 1000)
           
    }
  }

  

getImagesApi = async () => {
    const { currentPage, query } = this.state;
    
    try {
      const { hits, totalHits } = await getImages(query, currentPage);
 
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
          status: 'resolved',
          totalImages: hits.length,
        }))
      
        if (totalHits === 0) {
          this.setState({ status: 'rejected' })
        }

    } catch (error) {
      console.log(error)    
      this.setState({ error })
    }
}
  

  handleSubmit = query => {
    this.setState({
      images: [],
      query: query,
      currentPage: 1,
      error: null
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
    const { status, images, isModalOpen, largeImageALT, largeImageURL } = this.state
    
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        {status === 'idle' && <h2 className={s.title}>Please enter your request</h2>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h2 className={s.title}>Unfortunately, nothing was found for your request</h2>}
        {status === 'resolved' && (
          <>
            <ImageGallery images={images} onOpenModal={this.handleImageClick} />
            <Button onNextPage={this.getImagesApi}/>
            {isModalOpen && (
              <Modal
                src={largeImageURL}
                alt={largeImageALT}
                onModalClose={this.toggleModal}
              />)}
          </>
        )}      
      </div>
    )
  }  
}

export default App;