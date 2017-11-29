import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import cors from 'cors';
import initConfigs from './config';
import initPostgres from './api/resources/postgresDB';
import firebase from '/server/api/resources/firebase'

import schema from './api/schema';
const PORT = process.env.PORT || 5000;

//process.env.NODE_ENV === 'production' NODEJS
//node determines the value of NODE_ENV in this situation. Production or development.

if (process.env.NODE_ENV === 'production'){
    //TRUE for Heroku
    const root = `${__dirname}/public`;
    app.use(express.static(root));
} else {
    app.use('*', cors());
}

const app = express();
//app.use('*', cors()); //Allows request to different domains that are otherwise forbidden

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphiql',
}));

initConfigs(app);
initPostgres(app);

app.listen(PORT, () => console.log(
    `GraphQL is now running on http://localhost:${PORT}/graphql`
));