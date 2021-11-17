import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async term => {
    try {
      const response = await unsplash.get('/search/photos', {
        params: { query: term },
      });
      const { data = {} } = response;
      const { results = [] } = data;
      this.setState({ images: results });
      console.log(response.data.results);
    } catch (err) {
      this.setState({ error: true });
      console.log(err);
    }
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
