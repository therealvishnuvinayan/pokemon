import React from 'react';

const PokemonLoader = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shimmerGradient">
          <stop offset="5%" stop-color="#eeeeee" stop-opacity="1" />
          <stop offset="50%" stop-color="#dddddd" stop-opacity="1" />
          <stop offset="95%" stop-color="#eeeeee" stop-opacity="1" />
        </linearGradient>
        <pattern id="shimmerLoader" width="200" height="120" patternUnits="userSpaceOnUse">
          <rect width="200" height="120" fill="url(#shimmerGradient)" />
          <animateTransform attributeType="xml" attributeName="patternTransform" type="translate" from="-200 0" to="200 0" dur="1.2s" repeatCount="indefinite"/>
        </pattern>
      </defs>

      <rect x="0" y="5" width="200" height="8" fill="url(#shimmerLoader)" />
      <rect x="0" y="18" width="200" height="8" fill="url(#shimmerLoader)" />
      <rect x="0" y="31" width="200" height="8" fill="url(#shimmerLoader)" />
      <rect x="0" y="44" width="200" height="8" fill="url(#shimmerLoader)" />
      <rect x="0" y="57" width="200" height="8" fill="url(#shimmerLoader)" />
      <rect x="0" y="70" width="200" height="8" fill="url(#shimmerLoader)" />
    </svg>
  );
}

export default PokemonLoader;
