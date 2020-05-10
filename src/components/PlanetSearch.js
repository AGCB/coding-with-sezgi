import React from 'react';
import Planets from './Planets.js';
import { useLazyQuery, gql } from '@apollo/client';
import './planet-search.css';

const SEARCH = gql`
query Search($match:String) {
  planets(where: {name: {_ilike: $match }}) {
    name
    id
    cuisine
  }
}

`;
function PlanetSearch() {
  const [ value, setValue ] = React.useState('placeholder');
  const [ search, { loading, error, data}] = useLazyQuery(SEARCH);

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value)
  }

  function handleSubmit() {
    search({variables: { match: `%${value}%`}});
  }

  function handleOnFocus(e) {
    e.preventDefault();
    setValue('');
  }
  return (
    <div className="planet-search">
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit();
        }}
      >
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleOnFocus} />
        <button type="submit">CLICK HERE TO SUBMIT FOR A PLANET SEARCH</button>
      </form>
      <Planets data={data ? data.planets: null} />
    </div>
  )
};

export default PlanetSearch;
