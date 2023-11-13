import React from 'react';
import SearchIcon from '../assets/icons/busqueda.svg';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const { value } = e.target;

    this.setState({
      search: value,
    });

    if (value.length >= 3) {
      this.props.onHandleSearch(value);
    } else {
      this.props.onHandleSearch(null);
    }
  }

  render() {
    return (
        <div className='search'>
          <div className='search__wrapper'>
            <input
                className='search__input'
                type='search'
                onChange={this.handleSearch}
                placeholder='Search your favorite pokemon ... 😏😁✌️'
                autoFocus
            />
            <img className='search__icon' src={SearchIcon} alt='' />
          </div>
        </div>
    );
  }
}
