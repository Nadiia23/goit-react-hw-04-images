import { useState, useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGalleryList from "./ImageGallery/ImageCalleryList";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { getImages } from "helpers/api";
import s from './App.module.css';

const App = () => {

  //  state = {
  //   images: [],
  //   page: 1,
  //   query: '',
  //   isModalOpen: false,
  //   error: null,
  //   largeImageURL: '',
  //   largeImageALT: '',
  //   isLoading: false,
  // }


  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [largeImageALT, setLargeImageALT] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // async componentDidUpdate(_, prevState) {
  //   if (
  //     prevState.query !== this.state.query &&
  //     this.state.query !== ''
  //   ) {
  //     this.setState({ isLoading: true });
  //     const data = await getImages(this.state.query, this.state.page);
  //     // console.log(data);

  //     this.setState({
  //       images: data.hits,
  //       isLoading: false,
  //     });
  //   }

  //   if (this.state.page !== prevState.page && this.state.page !== 1) {
  //     const data = await getImages(this.state.query, this.state.page);
  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...data.hits],
  //       isLoading: false,
  //     }));
  //   }
  // }

  useEffect(() => {
    setIsLoading(true)
    const getApi = async () => {
      try {
        const data = await getImages();
        setImages(data.hits)
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getApi();
  }, [])
  
  useEffect(() => {
    const getApi = async () => {
      if (page !== 1) {
        const data = await getImages(query, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setIsLoading(false);
        return;
      }
      if (query) {
        setIsLoading(true);
        const data = await getImages(query, page);
        setIsLoading(false);
        setImages(data.hits);
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
        {query && !isLoading && (<Button onNextPage={loadMore} />)}
            
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