import { useState, useEffect } from 'react';
import '../css/hotel-add.css'
import '../css/room.css'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { getHotels, createRooms } from '../FetchApi';
import { useNavigate } from 'react-router-dom';

function RoomAddComponent() {
  const navigate = useNavigate();
  const [maxPeople, setMaxPeople] = useState(0);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [description, setDescription] = useState('');
  const [hotelID, setHotelID] = useState('');
  const [valueHotelSelect, setValueHotelSelect] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [listHotel, setListHotel] = useState([]);

  const handleAddHotel = (data) => {
    if(data.statusCode === 200) {
      alert('Thêm mới thành công!');
      navigate('/home/rooms')
    } else {
      alert('Có lỗi trong quá trình xử lý!');
    }
  }

  const addRoom = () => {
    let data = {
      maxPeople: maxPeople,
      price: price,
      rooms: rooms,
      hotel: hotelName,
      hotelId: hotelID,
      title: title,
      description: description
    }
    try {
      console.log(data);
      createRooms(handleAddHotel, data);
    } catch (e) {
      throw new Error(e)
    }
  }

  const hanldeListPhotos = (e) => {
    if (e.keyCode == 13) {
      setRooms([...rooms,e.target.value]);
      e.target.value = '';
    }
  }

  const handleChangeFeatured = (event) => {
    let getIdHotel = event.target.value.split(' ')[0];
    let getNameHotel = event.target.value.split(' ').filter(obj => obj != getIdHotel).join(' ');
    setValueHotelSelect(event.target.value)
    setHotelName(getNameHotel);
    setHotelID(getIdHotel);
  };

  const handleGetHotel = (data) => {
    setListHotel(data);
  }

  useEffect(() => {
    getHotels(handleGetHotel)
  }, []);
  
  return (
    <div className="hotel-add">
        <div className='hotel-add-header'>
            <h3>Add New Room</h3>
        </div>

        <div className='hotel-add-content row'>

          <div className='col-6 form-item'>
            <TextField 
              id="standard-basic" 
              label="Title" 
              variant="standard" 
              className='form-input-add'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className='col-6 form-item'>
            <TextField 
              id="standard-basic" 
              label="Description" 
              variant="standard" 
              className='form-input-add'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='col-6 form-item'>
            <TextField 
              id="standard-basic" 
              label="Price" 
              variant="standard" 
              className='form-input-add'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className='col-6 form-item'>
            <TextField 
              id="standard-basic" 
              label="Max people"
              variant="standard" 
              type={'number'}
              className='form-input-add'
              value={maxPeople}
              onChange={(e) => setMaxPeople(e.target.value)}
            />
          </div>

          <div className='col-6 form-item'>
            <TextField 
              id="outlined-basic" 
              label="Rooms" 
              variant="outlined" 
              className='form-input-add'
              onKeyUp={(e) => hanldeListPhotos(e)}
            />
            {rooms.length > 0 && (
                <div className='col-6 form-item ml-4 mt-2' >
                  <div style={{display: 'flex'}}>
                    {
                      rooms.map(item => {
                        return <p style={{margin: '0 3px'}}>{item}</p>
                      })
                    }
                  </div>
                </div>
              )}
          </div>

          <div className='col-6 form-item form-featured'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '50%' }} style={{margin: 0}}>
              <InputLabel id="demo-simple-select-standard-label">Choose a hotel</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={valueHotelSelect}
                onChange={handleChangeFeatured}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                
                {
                  listHotel.map(obj => {
                    return <MenuItem value={`${obj._id} ${obj.name}`}>{obj.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </div>

          <div className='col-3'>
            <button className='btn form-btn-submit' onClick={addRoom}>Send</button>
          </div>
          
        </div>
    </div>
  );
}

export default RoomAddComponent;