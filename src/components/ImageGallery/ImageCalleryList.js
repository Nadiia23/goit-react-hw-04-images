import React, { Component } from 'react';
// import ImageGalleryItems from './ImageGalleryItem';
import { getImages } from 'helpers/api';
import s from './imageGallery.module.css';

export class ImageGalleryList extends Component {
  state = {
    images: [],
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && this.props.value !== '') {
      const data = await getImages(this.props.value);
      this.setState({
        images: data,
      });
    }
  }

  render() {
    return (
      <ul className={s.imageGallery}>
        {this.state.images.map(item => (
        //   <ImageGalleryItems
        //         key={item.id}
        //     src={item.webformatURL}
        //     alt={item.tags}
        //   />
            <li key={item.id}>
              <img height="250px" alt={item.tags} src={item.webformatURL} />
            </li>
        ))}
      </ul>
    );
  }
}

export default ImageGalleryList;
