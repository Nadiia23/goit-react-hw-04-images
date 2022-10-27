import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import s from './search.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSumbit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Enter your search query');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSumbit}>
          <button type="submit" className={s.searchFormButton}><ImSearch/></button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
