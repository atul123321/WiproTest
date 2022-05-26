import React from 'react';
import App from './App';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import '@testing-library/jest-dom/extend-expect';

const renderApp = () => render(<App/>);

afterEach(() => {
  fetchMock.restore();
  cleanup()
});

test('initial UI is rendered as expected', () => {
  let { getByTestId } = renderApp();
  expect(getByTestId('app-input')).toHaveValue(null);
  expect(getByTestId('submit-button')).toHaveTextContent("Get All List");
  expect(getByTestId('movieList').childNodes).toHaveLength(0);
});

test('search is made on by clicking on search button and result found - test 1', async() => {
  let { getByTestId, queryByTestId } = renderApp();
  let input = getByTestId('app-input');
  let searchButton = getByTestId('submit-button');

  const url = 'https://www.omdbapi.com/?s=star_wars&apikey=2d753e6d';
  fetchMock.getOnce(url, JSON.stringify({ Search:[{"Title":"Star War","Year":1977,"imdbID":"tt5921428"},{"Title":"Beat Feet: Scotty Smileys Blind Journey to Ironman","Year":2015,"imdbID":"tt5117146"}]}));
  
  fireEvent.click(searchButton);

  await waitFor(() => {
    const results = queryByTestId('movieList');
    expect(results.childNodes).toHaveLength(2);
    expect(results.childNodes[0]).toHaveTextContent('Star War');
    expect(results.childNodes[1]).toHaveTextContent('Beat Feet: Scotty Smileys Blind Journey to Ironman');
    //expect(queryByTestId('no-result')).toBe(null);
  });
});
