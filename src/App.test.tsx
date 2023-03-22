import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import mockData from 'public/mock_data.json';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

import App from './App';

import * as api from '@/api/order';

const queryClient = new QueryClient();

describe('App', () => {
  it('renders headline', async () => {
    const getOrderData = vi.spyOn(api, 'getOrderData').mockResolvedValue({ data: mockData });

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
      { wrapper: BrowserRouter },
    );
    screen.debug();
    expect(getOrderData).toHaveBeenCalledTimes(1);

    // check if App components renders headline
  });
});
