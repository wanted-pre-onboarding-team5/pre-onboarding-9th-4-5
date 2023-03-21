import { Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGetData } from '@/hooks/useGetData';
import { QueryData } from '@/types/queryData';
interface SearchNameProps {
  setSearchResult: (data: QueryData[]) => void;
}

export const SearchName = ({ setSearchResult }: SearchNameProps) => {
  const { data: getDatas } = useGetData();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const useSearchQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const searchQuery = useSearchQuery();
  const searchTerm: string = searchQuery.get('name') as string;

  const fetchSearchName = async (searchTerm: string) => {
    setSearchResult(
      getDatas?.filter((data: QueryData) => data.customer_name?.toUpperCase().includes(searchTerm)),
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    navigate(`/?name=${e.target.value.toUpperCase()}`);
  };

  useEffect(() => {
    fetchSearchName(searchTerm);
  }, [searchTerm]);

  return (
    <Box mb={3} mt={3}>
      <TextField
        value={searchValue}
        onChange={handleChange}
        variant='filled'
        type='text'
        placeholder='이름 검색'
      />
    </Box>
  );
};
