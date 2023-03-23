import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import data from 'public/data.json';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import Main from '@/pages/Main';
import Root from '@/pages/Root';

describe('Epic 1-1 주문 목록 페이지 및 페이지네이션 구현', () => {
  beforeEach(() => {
    const routes = [
      {
        path: '/',
        element: <Root />,
        children: [
          {
            loader: () => data,
            index: true,
            element: <Main />,
          },
        ],
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/'], initialIndex: 1 });
    render(<Main />, { wrapper: () => <RouterProvider router={router} /> });
  });

  test('주문에 대한 모든 정보를 표 형태로 구현한다', async () => {
    await waitFor(() => screen.getByLabelText('transaction-table'));
    expect(screen.getByLabelText('transaction-table')).toBeInTheDocument();
  });

  test('한 페이지에 50건의 주문 보일 수 있도록 페이지네이션을 구현한다.', async () => {
    await waitFor(() => screen.getAllByTestId('transaction-table-body'));
    expect(screen.getAllByTestId('transaction-table-body').length).toBeLessThan(50);
  });

  test('transaction_time 2023년 3월 8일자의 데이터만 보여준다.', async () => {
    await waitFor(() => screen.getAllByTestId('transaction-table-body-datetime'));
    const datetime = screen.getAllByTestId('transaction-table-body-datetime');
    datetime.forEach((item) => expect(item).toHaveTextContent('2023-03-08'));
  });
});

describe('Epic 1-2 정렬 기능 구현', () => {
  beforeEach(() => {
    const routes = [
      {
        path: '/',
        element: <Main />,
        loader: () => data,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/'], initialIndex: 1 });
    render(<RouterProvider router={router} />);
  });

  test('기본 정렬은 ID를 기준으로 오름차순으로 구현한다.', async () => {
    await waitFor(() => screen.getAllByTestId('transaction-table-body-id'));
    const bodyId = screen.getAllByTestId('transaction-table-body-id');
    const bodyIdText = bodyId.map((item) => Number(item.textContent));

    expect(bodyIdText).toStrictEqual([...bodyIdText].sort((a, b) => a - b));
  });

  test('표에서 주문번호, 거래일 & 거래시간 버튼을 누르면 각각 내림차순 정렬이 되도록 구현한다.', async () => {
    await waitFor(() => screen.getByTestId('transaction-table-head-id'));
    const headId = screen.getByTestId('transaction-table-head-id');
    await userEvent.click(headId);

    await waitFor(() => screen.getAllByTestId('transaction-table-body-id'));
    const bodyId = screen.getAllByTestId('transaction-table-body-id');
    const bodyIdText = bodyId.map((item) => Number(item.textContent));
    expect(bodyIdText).toStrictEqual([...bodyIdText].sort((a, b) => b - a));

    await waitFor(() => screen.getByTestId('transaction-table-head-transaction_time'));
    const headDatetime = screen.getByTestId('transaction-table-head-transaction_time');
    await userEvent.click(headDatetime);

    await waitFor(() => screen.getAllByTestId('transaction-table-body-datetime'));
    const bodyDatetime = screen.getAllByTestId('transaction-table-body-datetime');
    const bodyDatetimeText = bodyDatetime.map((item) => item.textContent as string);
    expect(bodyDatetimeText).toStrictEqual([...bodyDatetimeText].sort((a, b) => (b > a ? 1 : -1)));
  });
});

describe('Epic 1-3 주문 목록 페이지 필터링 기능 구현', () => {
  beforeEach(() => {
    const routes = [
      {
        path: '/',
        element: <Main />,
        loader: () => data,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/'], initialIndex: 1 });
    render(<RouterProvider router={router} />);
  });

  test('주문 처리 상태(status)에 따라 filtering 기능을 구현한다.', async () => {
    await waitFor(() => screen.getByTestId('status-filter-completed'));
    const completed = screen.getByTestId('status-filter-completed');
    await userEvent.click(completed);

    await waitFor(() => screen.getAllByTestId('transaction-table-body-status'));
    const statusCompleted = screen.getAllByTestId('transaction-table-body-status');
    statusCompleted.forEach((item) => expect(item.textContent).toBe('Completed'));

    await waitFor(() => screen.getByTestId('status-filter-proceeding'));
    const proceeding = screen.getByTestId('status-filter-proceeding');
    await userEvent.click(proceeding);

    await waitFor(() => screen.getAllByTestId('transaction-table-body-status'));
    const statusProceeding = screen.getAllByTestId('transaction-table-body-status');
    statusProceeding.forEach((item) => expect(item.textContent).toBe('Proceeding'));
  });
});

describe.skip('Epic 2-1 주문 목록 페이지 검색 기능 구현', () => {
  beforeEach(() => {
    const routes = [
      {
        path: '/',
        element: <Main />,
        loader: () => data,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/'], initialIndex: 1 });
    render(<RouterProvider router={router} />);
  });

  test(' 유저로부터 input 값을 받아 고객이름(customer_name) 을 검색 할 수 있다.', async () => {
    await waitFor(() => screen.getByLabelText('search-customer'));
    const searchCustomer = screen.getByLabelText('search-customer');
    const SEARCH_INPUT = 'pe';
    await userEvent.type(searchCustomer, SEARCH_INPUT);

    await waitFor(() => screen.getAllByTestId('transaction-table-body-customer'));
    const bodyCustomer = screen.getAllByTestId('transaction-table-body-customer');
    bodyCustomer.forEach((item) => {
      expect(item.textContent?.toLowerCase().includes(SEARCH_INPUT)).toBe(true);
    });
  });
});

describe('Epic 2-2 주문 목록 페이지 최신화 기능 구현', () => {
  test('5초마다 새로운 데이터를 불러온다.', async () => {
    const fn = vi.fn(() => data);
    const routes = [
      {
        path: '/',
        element: <Main />,
        loader: fn,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/'], initialIndex: 1 });
    render(<RouterProvider router={router} />);

    vi.useFakeTimers();
    await vi.advanceTimersByTimeAsync(10000);
    expect(fn).toHaveBeenCalledTimes(4);
    await vi.advanceTimersByTimeAsync(15000);
    expect(fn).toHaveBeenCalledTimes(5);
    vi.useRealTimers();
  });
});
