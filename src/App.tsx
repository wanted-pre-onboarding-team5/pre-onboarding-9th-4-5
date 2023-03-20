import { useGetData } from './hooks/useGetData';

const App = () => {
  const { data: mockDatas } = useGetData();
  return (
    <>
      {
        <div>
          {mockDatas?.map((mockdata) => (
            <li key={mockdata.id}>{mockdata.transaction_time}</li>
          ))}
        </div>
      }
    </>
  );
};

export default App;
