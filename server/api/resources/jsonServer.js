import fetch from 'node-fetch';

const jsonServer = 'http://localhost:3001';

export const getItems = function(){
    return fetch(`${jsonServer}/items/`)
    .then(response => response.json())
    .catch(errors => console.log(errors));
}

export const getItem = function(id){
    return fetch(`${jsonServer}/items/${id}`)
    .then(response => response.json())
    .catch(errors => console.log(errors));
}

export const getUsers = function(){
    return fetch(`${jsonServer}/users/`)
    .then(response => response.json())
    .catch(errors => console.log(errors));
}

export const getUser = function(id){
    return fetch(`${jsonServer}/users/${id}`)
    .then(response => response.json())
    .catch(errors => console.log(errors));
}

export const getUserOwnedItems = function(user){
    return fetch(`${jsonServer}/items/?itemowner=${user.id}`)
    .then(response => response.json())
    .catch(errors => console.log(errors));
}

export const getUserBorrowedItems = function(user){
    return fetch(`${jsonServer}/items/?borrower=${user.id}`)
    .then(response => response.json())
    .catch(errors => console.log(errors));
}

export const createNewItem = function(title, imageurl, description, itemowner, tags){
    const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
    const localTime = `${(new Date(Date.now() - tzOffset))
        .toISOString()
        .slice(0, -1)
        .replace('T', ' ')}-07`;
    
    const newItem = {
        title,
        imageurl,
        description,
        itemowner,
        tags,
        created: localTime,
        available: true,
        borrower: null
    };
    return fetch(`${jsonServer}/items`,{
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json"
        },
        body: JSON.stringify(newItem)
    })
    .then(resonse => resonse.json())
    .catch(errors => console.log(errors));
}