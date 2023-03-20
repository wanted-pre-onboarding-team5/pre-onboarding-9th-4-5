export const fetchMockAPI = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (err) {
    console.error(err);
  }
};
