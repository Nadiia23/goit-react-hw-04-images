import s from './imageGallery.module.css';

const ImageGalleryItem = ({image, onOpenModal}) => {
    return (
        <li className={s.imageGalleryItem} key={image.id}>
            <img className={s.imageGalleryItemImage}
                src={image.webformatURL}
                alt={image.tags}
                onClick={() => onOpenModal(image.largeImageURL, image.tags)}/>
        </li>
    )
}

export default ImageGalleryItem;