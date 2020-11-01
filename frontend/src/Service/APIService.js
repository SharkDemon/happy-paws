import BASE_URL from '../../../config';

const APIServices = {

    getAllPets(){
        return fetch(`${BASE_URL}/pets`,{
            method: 'GET',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(),
        }).then((res) =>
        !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
      );
    },

    getPetsID(id){
        return fetch(`${BASE_URL}/pets/${id}`,{
            method: 'GET',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(),
        }).then((res) =>
        !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
      );
    },

    getAllVolunteers(){
        return fetch(`${BASE_URL}/volunteers`,{
            method: 'GET',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(),
        }).then((res) =>
        !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
      );
    },

    getVolunteersID(id){
        return fetch(`${BASE_URL}/volunteers/${id}`,{
            method: 'GET',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(),
        }).then((res) =>
        !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
      );
    },

    getAllTrips(){
        return fetch(`${BASE_URL}/trips`,{
            method: 'GET',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(),
        }).then((res) =>
        !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
      );
    },

    getTripsID(id){
        return fetch(`${BASE_URL}/trips/${id}`,{
            method: 'GET',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(),
        }).then((res) =>
        !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
      );
    },
};

export default APIServices;