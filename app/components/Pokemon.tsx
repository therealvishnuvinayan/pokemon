import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); // This will make it responsive
  gap: 16px; // Adjust the space between balls as needed
  justify-items: center;
  align-items: center;
  padding: 16px; // Space around the grid
  max-width: 100%;
  margin: auto;
`;

const PokeBall = styled.div`
  width: 100%; // Make it responsive
  padding-top: 100%; // To keep aspect ratio 1:1
  position: relative;
  border: 2px solid black;
  border-radius: 50%;
  overflow: hidden;
  background: white;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50%;
    background-color: red;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: white;
    border: 2px solid black;
    border-radius: 50%;
  }
`;

const MiddleBand = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: black;
  transform: translateY(-50%);
`;

const PokeBallLabel = styled.span`
  position: absolute;
  bottom: 25%; // Move the label higher in the bottom half
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1em; // Increased font size
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// The Pokemon component now expects an array of items
const PokemonGrid = ({ items }) => {
  return (
    <GridContainer>
      {items.results.map((item, index) => (
        <PokeBall key={index}>
          <MiddleBand />
          <PokeBallLabel>{item.name}</PokeBallLabel>
        </PokeBall>
      ))}
    </GridContainer>
  );
};

export default PokemonGrid;
