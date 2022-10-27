import s from './imageGallery.module.css';

const ImageGalleryItem = ({id, web, tags, largeImageURL, onOpenModal}) => {
    return (
        <li className={s.imageGalleryItem} key={id} onClick={() => onOpenModal(largeImageURL, tags)}>
            <img className={s.imageGalleryItemImage}
                src={web}
                alt={tags}
                />
        </li>
    )
}

export default ImageGalleryItem;