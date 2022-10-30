import { useState, useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGalleryList from "./ImageGallery/ImageCalleryList";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { getImages } from "helpers/api";
import s from './App.module.css';

const App = () => {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [largeImageALT, setLargeImageALT] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0)

  
  useEffect(() => {
    const getApi = async () => {
      if (page !== 1) {
        const data = await getImages(query, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setIsLoading(false);
        setTotalHits(data.totalHits);
        return;
      }
      if (query) {
        setIsLoading(true);
        const data = await getImages(query, page);
        setImages(data.hits);
        setIsLoading(false);
        setTotalHits(data.totalHits);
      }
    };
    getApi();
  }, [page, query]);


  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

    const handleSubmit = query => {
      setQuery(query);
      setPage(1);
    }

    const toggleModal = () => {
      setIsModalOpen(prevIsModalOpen => !prevIsModalOpen)
    }

    const handleImageClick = (url, alt) => {
      setLargeImageURL(url);
      setLargeImageALT(alt);
      toggleModal();
    }
  
    return (
      <div className={s.app}>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading ?
          (<Loader />) :
       
          (<ImageGalleryList images={images} onOpenModal={handleImageClick} />)}
        
        {totalHits > images.length && query && !isLoading && (<Button onNextPage={loadMore} />)}
            
        {isModalOpen && (
          <Modal
            src={largeImageURL}
            alt={largeImageALT}
            onModalClose={toggleModal}
          />)}
                 
      </div>
    )
  }

export default App;