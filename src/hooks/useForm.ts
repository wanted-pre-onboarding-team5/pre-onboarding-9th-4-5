import { SelectChangeEvent } from '@mui/material';
import queryString from 'query-string';
import { useSearchParams } from 'react-router-dom';

export const useForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = queryString.parse(searchParams.toString());

  const handleChange = (e: SelectChangeEvent) => {
    const newParams = { ...params, status: e.target.value, page: 1 };
    setSearchParams(queryString.stringify(newParams));
  };

  return { status: params.status || 'all', handleChange };
};
