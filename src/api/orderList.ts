export type SortType = 'ID_DES' | 'ID_ASC' | 'TIME_DES' | 'TIME_ASC';

export type StatusType = 'TRUE' | 'FALSE';

export const PAGINATION_PER_PAGE = 50;

export const TODAY = '2023-03-08';

const getOrderData = {
  async getData() {
    const response = await fetch('/data.json');

    const json = await response.json();
    return json;
  },
};

export default getOrderData;
