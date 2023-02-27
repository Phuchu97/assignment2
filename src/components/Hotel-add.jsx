import { useState } from 'react';
import '../css/hotel-add.css'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { createHotel } from '../FetchApi';
import { useNavigate } from 'react-router-dom';

function HotelAddComponent() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [distance, setDistance] = useState('');
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [rooms, setRooms] = useState([
    '2 Bed rooms',
    '1 Bed room',
    'Basement double room',
    'Super or basement room',
    'Double room',
  ]);
  const [featured, setfeatured] = useState('');
  const [personName, setPersonName] = useState([]);

  const handleAddHotel = (data) => {
    if(data.statusCode === 200) {
      navigate('/home/hotels')
    } else {
      alert('Có lỗi trong quá trình xử lý!');
    }
  }

  const addHotel = () => {
    let data = {
      name: name,
      type: type,
      distance: distance,
      price: price,
      city: city,
      address: address,
      photos: photos,
      rating: 5,
      featured: featured,
      room: rooms,
      title: title,
    }

    try {
      createHotel(handleAddHotel, data);
    } catch (e) {
      throw new Error(e)
    }
  }

  const hanldeListPhotos = (e) => {
    
    if (e.keyCode == 13) {
      setPhotos([...photos,e.target.value]);
      e.target.value = '';
    }
  }

  const handleChangeFeatured = (event) => {
    setfeatured(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  
  return (
    <div className="hotel-add">
        <div className='hotel-add-header'>
            <h3>Add New Product</h3>
        </div>

        <div className='hotel-add-content row'>
          <div className='col-6 form-item'>
            <TextField 
              id="standard-basic" 
              label="Name"
              variant="standard" 
              className='form-input-add'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='col-6 form-item form-featured'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '90%' }}>
              <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={type}
                onChange={handleChangeType}
                label="type"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Hotel'}>Hotel</MenuItem>
                <MenuItem value={'Apartments'}>Apartments</MenuItem>
                <MenuItem value={'Resorts'}>Resorts</MenuItem>
                <MenuItem value={'Villas'}>Villas</MenuItem>
                <MenuItem value={'Cabins'}>Cabins</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className='col-6 form-item'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '90%' }}>
              <InputLabel id="demo-simple-select-standard-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={city}
                onChange={handleChangeCity}
                label="city"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Ha Noi'}>Ha Noi</MenuItem>
                <MenuItem value={'Ho Chi Minh'}>Ho Chi Minh</MenuItem>
                <MenuItem value={'Da nang'}>Da nang</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className='col-6 form-item'>
            <TextField 
              id="standard-basic" 
              label="Address" 
              variant="standard" 
              className='form-input-add'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className='col-6 form-item'>
            <TextField 
              id="standard-basic" 
              label="Distance from City Center" 
              variant="standard" 
              className='form-input-add'
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>

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
              id="outlined-basic" 
              label="Images" 
              variant="outlined" 
              className='form-input-add'
              onKeyUp={(e) => hanldeListPhotos(e)}

            />
            {photos.length > 0 && (
                <div className='col-6 form-item'>
                  {
                    photos.map(item => {
                      return <p>{item}</p>
                    })
                  }
                </div>
              )}
          </div>

          <div className='col-6 form-item form-featured'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '50%' }} style={{margin: 0}}>
              <InputLabel id="demo-simple-select-standard-label">Featured</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={featured}
                onChange={handleChangeFeatured}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Hỗ trợ ăn trưa'}>Hỗ trợ ăn trưa</MenuItem>
                <MenuItem value={'Hỗ trợ ăn trưa và ăn tối'}>Hỗ trợ ăn trưa và ăn tối</MenuItem>
                <MenuItem value={'Hỗ trợ ăn uống toàn bộ'}>Hỗ trợ ăn uống toàn bộ</MenuItem>
              </Select>
            </FormControl>
          </div>


          <div className='col-12 form-item'>
            <FormControl className='form-select-room'>
              <InputLabel shrink htmlFor="select-multiple-native">
                Native
              </InputLabel>
              <Select
                multiple
                native
                value={personName}
                // @ts-ignore Typings are not considering `native`
                onChange={handleChangeMultiple}
                label="Native"
                inputProps={{
                  id: 'select-multiple-native',
                }}
              >
                {rooms.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className='col-3'>
            <button className='btn form-btn-submit' onClick={addHotel}>Send</button>
          </div>
          
        </div>
    </div>
  );
}

export default HotelAddComponent;