import { Button, Stack, TextField } from '@mui/material';

import { useOrderTableFunctions } from '@/hooks/useOrderTableFunctions';

export default function SearchForm() {
  const { filterBySearch } = useOrderTableFunctions();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formElement = e.target as HTMLFormElement;
          const inputElement = formElement[0] as HTMLInputElement;
          const { value } = inputElement;

          filterBySearch(value);
        }}
      >
        <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
          <TextField id='standard-basic' label='고객이름 검색' variant='standard' />
          <Button variant='contained' type='submit'>
            검색
          </Button>
        </Stack>
      </form>
    </>
  );
}
