export const querySplit = (queries) => {
  return queries.split('&').reduce((acc, query) => {
    const [key, value] = query.split('=');
    acc[key] = value;
    return acc;
  }, {});
};
