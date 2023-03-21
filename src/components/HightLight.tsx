import { Typography } from '@mui/material';

type HightLightProps = {
  query: string;
  children: string;
};

const HightLight = ({ children, query }: HightLightProps) => {
  const parts = children.split(new RegExp(`(${query})`, 'gi'));

  return (
    <Typography component='span'>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <Typography component='mark' key={index}>
            {part}
          </Typography>
        ) : (
          part
        ),
      )}
    </Typography>
  );
};

export default HightLight;
