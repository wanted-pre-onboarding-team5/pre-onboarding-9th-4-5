import { TableCell, tableCellClasses, styled } from '@mui/material';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.root}`]: {
    textAlign: 'center',
  },
  [`&.${tableCellClasses.head}`]: {
    borderBottom: '1px solid #cecece',
    color: '#1B2E57',
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    borderBottom: '1px solid #eeefef',
    color: '#1B2E57',
  },
}));

export default StyledTableCell;
