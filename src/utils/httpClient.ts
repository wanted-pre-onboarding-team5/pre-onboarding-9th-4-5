export const httpClient = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText || 'Unknown Error');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Fetch Error:', error instanceof Error ? error.message : error);
    throw error;
  }
};
