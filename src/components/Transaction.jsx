import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { getListTransaction, deleteTransaction } from '../FetchApi';

function TransactionComponent() {
  const [listTransaction, setListTransaction] = useState([]);

  const test = (res) => {
    console.log(res);
  }
  const handleGetListTransaction = (data) => {
    console.log(data);
    setListTransaction(data.list);
  }

  useEffect(() => {
    getListTransaction(handleGetListTransaction)
  }, [])

  const columns = [
    {
        field: 'hotelId',
        headerName: 'HotelID',
        width: 200,
        editable: true,
    },
    {
      field: 'name',
      headerName: 'Customer',
      width: 200,
      editable: true,
    },
    {
      field: 'rooms',
      headerName: 'Room',
      width: 110,
      editable: true,
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      width: 150,
      editable: true,
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      width: 150,
      editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 110,
        editable: true,
    },
    {
        field: 'payment',
        headerName: 'Payment',
        width: 200,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        sortable: false,
        width: 200,
        renderCell: (params) => (
            <div>
                <button 
                    style={{fontSize: '0.8em'}} 
                    className={params.value=='Booked'? 'btn btn-danger' : `${params.value=='Checkout'? 'btn btn-success' : 'btn btn-primary'}`}
                >
                    {params.value}
                </button>
            </div>
          )
    }
  ];
  
  return (
    <div className="hotel">
      <div className="hotel-header" style={{padding: '20px'}}>
        <h5>Transactions List</h5>
      </div>
      <div>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={listTransaction}
            columns={columns}
            pageSize={5}
            getRowId={(row) => row._id}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
}

export default TransactionComponent;