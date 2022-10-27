import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './imageGallery.module.css';

const ImageGallery = ({images, onOpenModal}) => {
    return (
        <ul className={s.imageGallery}>
            {images.map(image => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        image={image}
                        onOpenModal={onOpenModal}
                    />
                )
            })}            
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
        })
    ),
    onOpenModal: PropTypes.func.isRequired,
}

export default ImageGallery;