import { Dispatch, SetStateAction } from 'react';

interface SearchInputProps {
  onSearchChange: Dispatch<SetStateAction<string>>;
}

export const SearchInput = ({ onSearchChange }: SearchInputProps) => {
  return (
    <>
      <input
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder='고객 이름을 입력하세요'
      />
    </>
  );
};
