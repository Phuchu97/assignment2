import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { getRooms, deleteRoom } from '../FetchApi';

function RoomsComponent() {
  
  const navigate = useNavigate();
  const [listRoom, setListRoom] = useState([]);

  const moveToHotelAdd = () => {
    navigate('room-add');
  }

  const removeHotel = (data) => {
    console.log(data);
    deleteRoom((data) => {
      console.log(data);
      getRooms(handleGetHotel)
    }, {id: data.id})
  }

  const handleGetHotel = (data) => {
    setListRoom(data);
  }

  useEffect(() => {
    getRooms(handleGetHotel)
  }, [])

  const columns = [
    {
      field: 'hotelId',
      headerName: 'HotelID',
      width: 300,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 110,
      editable: true,
    },
    {
      field: 'rooms',
      headerName: 'Room',
      width: 110,
      editable: true,
    },
    {
      field: 'maxPeople',
      headerName: 'Max People',
      width: 110,
      editable: true,
    },
    {
      field: '_id',
      headerName: 'Action',
      sortable: false,
      width: 200,
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
        <h5>Rooms List</h5>
        <button className="btn btn-success" onClick={moveToHotelAdd}>Add New</button>
      </div>
      <div>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={listRoom}
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

export default RoomsComponent;