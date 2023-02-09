import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      editable: true,
    },
    {
      field: 'hotel',
      headerName: 'Hotel',
      width: 250,
      editable: true,
    },
    {
      field: 'room',
      headerName: 'Room',
      width: 110,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'payment',
      headerName: 'Payment Method',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
      editable: true,
      renderCell: (params) => (
        <div>
          <button className='btn btn-success' disabled>
            {params.value}
          </button>
        </div>
      )
    }
];

const rows = [
  { id: 1, user: 'Snow', hotel: 'Jon', room: '305,304', date: '15/09/2005', price: 120, payment: 'Credit Card', status: 'Booked'},
  { id: 2, user: 'Lannister', hotel: 'Cersei', room: '305,304', date: '15/09/2005', price: 120, payment: 'Credit Card', status: 'Booked'},
  { id: 3, user: 'Lannister', hotel: 'Jaime', room: '305,304', date: '15/09/2005', price: 120, payment: 'Credit Card', status: 'Booked'},
  { id: 4, user: 'Stark', hotel: 'Arya', room: '305,304', date: '15/09/2005', price: 120, payment: 'Credit Card', status: 'Booked'},
  { id: 5, user: 'Targaryen', hotel: 'Daenerys', room: '305,304', date: '15/09/2005', price: 120, payment: 'Credit Card', status: 'Booked'},
  { id: 6, user: 'Melisandre', hotel: null, room: '305,304', date: '15/09/2005', price: 120, payment: 'Credit Card', status: 'Booked'},
  { id: 7, user: 'Clifford', hotel: 'Ferrara', room: '305,304', date: '15/09/2005', price: 120, payment: 'Credit Card', status: 'Booked'},
  { id: 8, user: 'Frances', hotel: 'Rossini', room: '305,304', date: '15/09/2005', price: 120, payment: 'Credit Card', status: 'Booked'},
  { id: 9, user: 'Roxie', hotel: 'Harvey', room: '305,304', date: '15/09/2005', price: 120, payment: 'Credit Card', status: 'Booked'},
];

 function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default DataGridDemo;