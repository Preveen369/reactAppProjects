import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  // to manage the data retrieval state process
  const [data, setData] = useState(null);

  // to retrieve the data asynchronously
  useEffect(() => {
    if (!url) return; // prevent fetch if url is empty or undefined

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Fetch error:', error);
        setData(null);
      });
  }, [url]); // add url as dependency

  // returning the fetched data
  return [data];
};

export default useFetch;