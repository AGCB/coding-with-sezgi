import React from 'react';
import { useQuery, gql } from '@apollo/client';

const PLANETS = gql`
{
  planets {
    id
    name
    cuisine
  }
}

`;

export default function Planets({newPlanets}) {
  const { loading, error, data } = useQuery(PLANETS);

  if(loading) return <p>loading...</p>;
  if(error) return <p>error!!.. sorry</p>;

  const renderPlanets = (planets) => {
    return data.planets.map(({id, name, cuisine}) => {
      return <div key={id}>
        <p>{name} || {cuisine}</p>
      </div>
    })
  }

  return renderPlanets(newPlanets || data.planets)


}
