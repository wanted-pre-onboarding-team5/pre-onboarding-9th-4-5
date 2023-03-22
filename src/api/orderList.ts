const getOrderData = {
  async getData() {
    const response = await fetch('/data.json');

    const json = await response.json();
    return json;
  },
};

export default getOrderData;
