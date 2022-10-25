// import PropTypes from 'prop-types';
import s from './imageGallery.module.css'

export const ImageGalleryItems = ({ id, webformatURL, tags }) => {
    return (
        <li className={ s.imageGalleryItem} key={id}>
            <img className={s.imageGalleryItemImage } src={webformatURL} alt={tags} />
        </li>

    )
}

export default ImageGalleryItems

// ImageGalleryItems.propTypes = {
//     id: PropTypes.string.isRequired,
//     webformatURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
// }

