interface SearchInputProps {
  onSearchChange: Dispatch<SetStateAction<string>>;
}

export const SearchInput = ({ onSearchChange }: SearchInputProps) => {
  return (
    <>
      {/* <Stack spacing={2}> */}
      <input onChange={(e) => onSearchChange(e.target.value)} />
      {/* </Stack> */}
    </>
  );
};
