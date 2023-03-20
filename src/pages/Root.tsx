import { useLoaderData } from 'react-router-dom';

import { Header } from '@/components/Header';
import { OrderTable } from '@/components/OrderTable';
import { OrderData } from '@/types/OrderDataType';

export const Root = () => {
  const orderRows = useLoaderData() as OrderData[];

  return (
    <>
      <Header />
      <OrderTable rows={orderRows} />
    </>
  );
};
