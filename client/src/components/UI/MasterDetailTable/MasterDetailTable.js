import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TablePagination from '@mui/material/TablePagination';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import SortIcon from '@mui/icons-material/Sort';
import classes from './MasterDetailTable.module.scss';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const RowContent = ({ row }) => {
  return (
    <Box sx={{ margin: 1 }}>
      {row.imageUrl && <div className={classes['image-wrapper']}>
        <img src={row.imageUrl} alt={row.name.slice(0, 1)} />
      </div>}
      <div>
        <h5>{row.name}</h5>
        {(row.born || row.died) && <div>
          <div>роден: <strong>{row.born.date}, <i>{row.born.place}</i></strong></div>
          <div>починал: <strong>{row.died.date}, <i>{row.died.place}</i></strong></div>
        </div>}
        <p>
          {row.content}
        </p>
      </div>
    </Box>
  );
}

function Row(props) {
  const { row, StyledTableCell } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              sx={{ width: 56, height: 56 }}
              src={row.imageUrl}
            >
              {row.name.slice(0, 1)}
            </Avatar>
            <span style={{ marginLeft: '1rem' }}>
              {row.name}
            </span>

          </Box>
        </TableCell>
        <StyledTableCell align="center">
          <div>{row.born.date}</div>
          <div><strong>{row.born.place}</strong></div>
        </StyledTableCell>
        <StyledTableCell align="center">
          <div>{row.died.date}</div>
          <div><strong>{row.died.place}</strong></div>
        </StyledTableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open}>
            <RowContent row={row}/>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function MasterDetailTable({ originalRows }) {
  const [order, setOrder] = React.useState('none');
  const [orderBy, setOrderBy] = React.useState('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState(originalRows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }));

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    const isDesc = orderBy === property && order === 'desc';

    setOrder(isAsc ? 'desc' : (isDesc ? 'none' : 'asc'));
    setOrderBy(property);
  };


  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  function getComparator(order, orderBy) {
    if (order === 'none') {
      return undefined;
    }
    return order === 'asc'
      ? (a, b) => a[orderBy].localeCompare(b[orderBy])
      : (a, b) => b[orderBy].localeCompare(a[orderBy])
  }

  const SortThreeStatesIcon = ({ direction }) => {
    if (direction === 'none') {
      return <SortIcon />
    } else if (direction === 'asc') {
      return <ArrowUpwardIcon />
    } else {
      return <ArrowDownwardIcon />
    }
  }

  return (
    <div className={classes['table-wrapper']}>
      <Paper sx={{ width: '100%', '*': { fontFamily: '"Comfortaa", sans-serif' } }} elevation={2}>
        <Paper sx={{ background: '#eee', p: '2px 0', display: 'flex', alignItems: 'center', width: '100%' }} elevation={1}>
          <InputBase
            sx={{ pl: '1rem', ml: 1, flex: 1 }}
            placeholder="Търси..."
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={(searchVal) => requestSearch(searchVal.target.value)}
          />
          <IconButton type="button" sx={{ mr: '1rem' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="center">
                  <Box
                  >
                    Име
                    <IconButton onClick={createSortHandler('name')}>
                      <SortThreeStatesIcon
                        direction={orderBy === 'name' ? order : 'asc'}
                      ></SortThreeStatesIcon>
                    </IconButton>
                  </Box>
                </TableCell>
                <StyledTableCell align="center">Роден</StyledTableCell>
                <StyledTableCell align="center">Починал</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice()
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row key={row.name} row={row} StyledTableCell={StyledTableCell} />
                ))}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 90 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 10, 25, { label: 'All', value: -1 }]}
          colSpan={3}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          labelRowsPerPage="Брой редове"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </Paper>
    </div>
  );
}
