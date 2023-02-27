const token = '8qlOkxz4wq';
const urlApi = 'http://localhost:4000'
const getMethod = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
    }
}

export function loginPage(callback, data) {
    fetch(`${urlApi}/login`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function registerAccount(callback, data) {
    fetch(`${urlApi}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function getHotels(callback) {
    fetch(`${urlApi}/hotels`, getMethod)
      .then(res => res.json())
      .then(callback);
}

export function createHotel(callback, data) {
    fetch(`${urlApi}/hotels/hotel-add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function deleteHotel(callback, data) {
    fetch(`${urlApi}/hotels/hotel-delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}


export function getRooms(callback) {
    fetch(`${urlApi}/rooms`, getMethod)
      .then(res => res.json())
      .then(callback);
}


export function createRooms(callback, data) {
    fetch(`${urlApi}/rooms/room-add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function deleteRoom(callback, data) {
    fetch(`${urlApi}/rooms/room-delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}
 
