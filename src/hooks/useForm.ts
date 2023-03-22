import { SelectChangeEvent } from '@mui/material';
import queryString from 'query-string';
import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = queryString.parse(searchParams.toString());

  const handleSelectChange = (e: SelectChangeEvent) => {
    const newParams = { ...params, status: e.target.value, page: 1 };
    setSearchParams(queryString.stringify(newParams));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newParams = { ...params, page: 1, name: e.target.value };
    setSearchParams(queryString.stringify(newParams));
  };

  return { status: params.status || 'all', handleSelectChange, handleInputChange };
};
