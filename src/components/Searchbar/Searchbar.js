import React, { Component } from 'react';
import s from './search.module.css'
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

    handleSubmit = event => {
      event.preventDefault();
    this.props.onSubmit(this.state.value);
  };
    
  render() {
    const { value } = this.state;
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
// Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }
