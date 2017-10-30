import { Pool } from 'pg';

export default function(app){
    const pool = new Pool({
        user: app.get('PGUSER'),
        host: app.get('PGHOST'),
        database: app.get('PGDATABASE'),
        password: app.get('PGPASSWORD')
    });

    return {
        getItems(){
            return pool.query('SELECT * FROM items')
                .then(response => response.rows);
        },

        getItem(id){
            const query = {
                text: 'SELECT * FROM items WHERE itemid = $1',
                values: [id]
            };
            return pool.query(query)
                .then(response => response.rows[0])
        },

        getUsers(){
            return pool.query('SELECT * FROM users')
            .then(response => response.rows);
        },
        getUser(id){
            const query = {
                text: 'SELECT * FROM users WHERE userid = $1',
                values: [id]
            };
            return pool.query(query)
                .then(response => response.rows[0])
        },
        getUserOwnedItem(ownerid){
            const query = {
                text: 'SELECT * FROM items WHERE ownerid = $1',
                values: [ownerid]
            };
            return pool.query(query)
                .then(response => response.rows[0])
        },
        getUserBorrowedItems(borrowerid){
            const query = {
                text: 'SELECT * FROM items WHERE itemid = $1',
                values: [borrowerid]
            };
            return pool.query(query)
                .then(response => response.rows[0])
        },
        getTags(){
            return pool.query('SELECT * FROM tags')
            .then(response => response.rows);
        },
        getTagsForItem(item){
            const query = {
                text: `SELECT * FROM tags 
                        INNER JOIN itemtags
                            ON itemtags.tagid = tags.tagid
                            WHERE itemtags.itemid=$1;`,
                values: [itemid]
            }
            return pool.query(query)
                .then(response => response.rows);
        },
        filteredItemsByTags(tagid){
            const query = {
                text: `SELECT * FROM items
                            INNER JOIN itemtags
                                ON itemtags.itemid = items.itemid
                                WHERE itemtags.tagid=$1`,
                values: [tagid]
            }
            return pool.query(query)
                .then(response => response.rows)
        },

        async createItem({title, imageurl, description, ownerid, tags}){
            const query = {
                text: `INSERT INTO items(title, imageurl, description, ownerid)
                    VALUES($1, $2, $3, $4)
                        RETURNING *`,
                values: [title, imageurl, description, ownerid] 
            };
            try {
                const newItem = await pool.query(query);
                const itemid = newItem.rows[0].itemid;

                const addTagsQuery = {
                    text: `INSERT INTO itemtags (tagid, itemid) VALUES($1, itemid)`,
                    values: [tags]
                }
                await pool.query(addTagsQuery);
                return newItem.rows[0];
            }catch (err){
                console.log(err);
            }
        }
    }
}

