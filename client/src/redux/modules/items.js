//Actions

const GET_ITEMS = 'GET_ITEMS';
const GET_USER_ITEMS = 'GET_USER_ITEMS';
const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
const GET_DROP_DOWN = 'GET_DROP_DOWN';


//ACTION CREATORS

const getItems = (items) => ({
    type: GET_ITEMS,
    payload: items
});

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

export const getDropDown = (tags) => {
    return function(dispatch) {
        dispatch({type: GET_DROP_DOWN, payload: tags})
    }
}
//HELPER

export const fetchItemsAndUsers = () => dispatch => {
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
        dispatch(getItems(itemsWithOwners));
        dispatch(getUserItems(itemsWithOwners));
    })
    .catch((err) => {
        dispatch(getItemsError(err));
    });
};

// export const handleNav = (event, index, obj) => {
//     // let tag = event.target.innerHTML;
//     // this.dispatch(getDropDown(tag))
//     console.log("hi")
//   }

//REDUCERS

export default (
    state= { itemsData: [], isLoading: false, error: '', tags: [] },
    action
)=>{
    switch (action.type){
        case GET_ITEMS:
            return {...state, itemsData: action.payload, isLoading: false, error: ''};
        case GET_USER_ITEMS:
            return {...state, itemsData: action.payload, isLoading: false, error: '',};
        case GET_ITEMS_LOADING:
            return {...state, isLoading: true, error: ''};
        case GET_ITEMS_ERROR:
            return {...state, isLoading: false, error: action.payload };
        case GET_DROP_DOWN:
            return {...state, isLoading: false, error: '', tags: action.payload }
        default:
            return state
    }
};