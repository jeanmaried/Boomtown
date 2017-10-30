import fetch from 'node-fetch';
import {getItems, getItem, getUsers,getUser, getUserOwnedItems, getUserBorrowedItems, createNewItem} from './jsonServer';

const jsonServer = 'http:localhost:3001';

const resolveFunctions = {
    Query: {
        items(){
            return getItems();
        },

        item(root, { id }){
            return getItem(id);
        },

        users(){
            return getUsers();
        },

        user(root, { id }){
            return getUser(id);
        }
    },

    Item: {
        itemowner(item) {
            return fetch(`${jsonServer}/users/${item.itemowner}`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
        },
        borrower(item) {
            if (!item.borrower) return null;
            return fetch(`${jsonServer}/users/${item.borrower}`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
        }
    },
    User: {
        items(user) {
            return getUserOwnedItems(user);
        },
        borrowed(user) {
            return getUserBorrowedItems();
        }
    },
    Mutation: {
        addItem(root, {title, imageurl, description, itemowner, tags}){
            return createNewItem(title, imageurl, description, itemowner, tags)
        }
    }
}
export default resolveFunctions;