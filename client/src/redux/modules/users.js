//Actions

const GET_USER_ITEMS = 'GET_USER_ITEMS';
const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
const GET_PROFILE_ID = 'GET_PROFILE_ID';

//ACTION CREATORS

const getUserItems = (users) => ({
    type: GET_USER_ITEMS,
    payload: users
});

const getItemsLoading = () => ({
    type: GET_ITEMS_LOADING,
});

const getItemsError = (error) => ({
    type: GET_ITEMS_ERROR,
    payload: error
});


//HELPER

export const fetchUserItemsAndUsers = () => dispatch => {
    dispatch(getItemsLoading());
    
    let items_data = 'http://localhost:3001/items';
    let users_data = 'http://localhost:3001/users';
    let urls = [items_data, users_data];

    Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
    )).then(data => {
        const [items, users] = data;
        let itemsWithOwners = items.map(item =>{
            let owners = users.find(user => item.itemowner == user.id)
            item.itemowner = owners;
            return item;
        });
        dispatch(getUserItems(itemsWithOwners));
    })
    .catch((err) => {
        dispatch(getItemsError(err));
    });
};

//REDUCERS

export default (
    state= { itemsData: [], isLoading: false, error: '' },
    action
)=>{
    switch (action.type){
        case GET_USER_ITEMS:
            return {...state, itemsData: action.payload, isLoading: false, error: '',};
        case GET_ITEMS_LOADING:
            return {...state, isLoading: true, error: ''};
        case GET_ITEMS_ERROR:
            return {...state, isLoading: false, error: action.payload };
        default:
            return state
    }
};