import React, { Component } from 'react';
import ImageGalleryList from './ImageGallery/ImageCalleryList';
import { Searchbar } from './Searchbar/Searchbar';
import Button from './Button/Button';

export class App extends Component {
  state = {
    page: 1,
    query: '',
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  loadMore = e => {
    e.preventDefault();
    if (e) {
      this.setState(prevState => {
        return {
          page: prevState.page + 1,
        };
      });
    }
  };


  //   handleChange = e => {
  //     // e.preventDefault();
  //     this.setState({
  //       page: 1,
  //       query: '',
  //     });
  //     // e.target.reset();
  // }

  //   async componentDidMount() {
  //     const images = await API.getImages();
  //     this.setState({ images });
  // }

  //   componentDidUpdate(_, prevState) {
  //     if (
  //       prevState.page !== this.state.page ||
  //       prevState.query !== this.state.query
  //     ) {
  //       console.log('fetch page')
  //     }

  // }

  render() {
    const { query } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: 16,
          paddingBottom: 24,
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGalleryList value={query} />
        <Button onClick={this.loadMore} />
      </div>
    );
  }
}

export default App;
