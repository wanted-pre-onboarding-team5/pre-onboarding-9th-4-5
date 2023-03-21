import { useState, useEffect } from 'react';

export const getOrderData = async () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json').then((res) => res.json());
      const data = response?.filter(
        (order) => order.transaction_time.slice(0, 10) === '2023-03-08',
      );
      setResponse(data);
    };

    fetchData();
  }, []);

  return response;
};
