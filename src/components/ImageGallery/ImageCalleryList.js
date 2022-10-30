import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './imageGallery.module.css';

const ImageGalleryList = ({ images, onOpenModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            web={image.webformatURL}
            largeImageURL={image.largeImageURL}
            alt= { image.tags }
            onOpenModal={onOpenModal}
          />
        );
      })}
    </ul>
  );
};

ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryList;
