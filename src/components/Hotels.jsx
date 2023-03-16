import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { getHotels, deleteHotel } from '../FetchApi';

function HotelsComponent() {
  
  const navigate = useNavigate();
  const [listHotel, setListHotel] = useState([]);

  const moveToHotelAdd = () => {
    navigate('hotel-add');
  }

  const removeHotel = (data) => {
    deleteHotel((data) => {
      getHotels(handleGetHotel)
    }, {id: data.id})
  }

  const handleGetHotel = (data) => {
    setListHotel(data);
  }

  useEffect(() => {
    getHotels(handleGetHotel)
  }, []);

  const columns = [
    {
      field: 'city',
      headerName: 'City',
      width: 150,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'Hotel',
      width: 150,
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
      width: 110,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'payment',
      headerName: 'Payment Method',
      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
      editable: true,
    },
    {
      field: 'id',
      headerName: 'Handle',
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <div>
          <button className='btn btn-danger' onClick={() => {removeHotel(params)}}>
            Delete
          </button>
        </div>
      )
    },
  ];
  
  return (
    <div className="hotel">
      <div className="hotel-header">
        <h5>Hotels List</h5>
        <button className="btn btn-success" onClick={moveToHotelAdd}>Add New</button>
      </div>
      <div>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={listHotel}
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

export default HotelsComponent;