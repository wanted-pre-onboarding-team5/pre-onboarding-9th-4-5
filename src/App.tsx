import { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchMockAPI } from './utils/fetch';

const App = () => {
  const [page, setPage] = useState(0);
  const SwitchOneMockAPI = async () => {
    const response = await fetchMockAPI('http://127.0.0.1:5173/data/mock_data.json', {
      method: 'GET',
    });
    return response;
  };

  const {
    isLoading,
    isError,
    error,
    data: mockDatas,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['mockData'],
    queryFn: () => SwitchOneMockAPI(),
    select: (mockDatas) =>
      mockDatas.filter((mockData) => mockData.transaction_time.includes('2023-03-08')),
    keepPreviousData: true,
  });
  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {mockDatas?.map((mockdata) => (
            <li key={mockdata.id}>{mockdata.transaction_time}</li>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!isPreviousData && mockDatas.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        disabled={isPreviousData || !mockDatas?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}
    </>
  );
};

export default App;
