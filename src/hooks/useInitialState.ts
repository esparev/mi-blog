import { useState, useEffect } from 'react';

const useInitialState = (API: string) => {
  const [data, setData] = useState({
    blogs: [],
    projects: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return data;
};

export default useInitialState;
