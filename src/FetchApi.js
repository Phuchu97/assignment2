const urlApi = 'http://localhost:4000';

export function loginPage(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/login`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        withCredentials: true,
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function registerAccount(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function getUsers(callback) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then(res => res.json())
      .then(callback);
}


export function getHotels(callback) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/hotels`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then(res => res.json())
      .then(callback);
}

export function createHotel(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/hotels/hotel-add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function deleteHotel(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/hotels/hotel-delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}


export function getRooms(callback) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/rooms`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then(res => res.json())
      .then(callback);
}


export function createRooms(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/rooms/room-add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function deleteRoom(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/rooms/room-delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}
 


export function getListTransaction(callback) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/transactions-list`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then(res => res.json())
      .then(callback);
}