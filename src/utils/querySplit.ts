export const querySplit = (queries: string): { [key: string]: string } => {
  return queries.split('&').reduce((acc, query) => {
    const [key, value] = query.split('=');
    acc[key] = value;
    return acc;
  }, {});
};
