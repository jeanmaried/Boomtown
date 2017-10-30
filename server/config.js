export default function (app){
    //Postgress config
    app.set('PGUSER', process.env.PGUSER || 'jmdalmasso');
    app.set('PGPASSWORD', process.env.PGPASSWORD || '');
    app.set('PGDATABASE', process.env.PGDATABASE || 'test');
    app.set('PGHOST', process.env.PGHOST || 'localhost');

    //Firebase config
    app.set('FIREBASE_API_KEY', process.env.FIREBASE_API_KEY || 'AIzaSyDGkCz_5_9iyTVYk7Z55yRNEa3Kbn8JM')
    app.set('FIREBASE_AUTH_DOMAIN', process.env.FIREBASE_AUTH_DOMAIN || "boomtown-e1e45.firebaseapp.com");
    app.set('FIREBASE_DB_URL', process.env.FIREBASE_DB_URL || "https://boomtown-e1e45.firebaseio.com");
    app.set('FIREBASE_PROJECT_ID', process.env.FIREBASE_PROJECT_ID || "boomtown-e1e45");
    app.set('FIREBASE_STORAGE_BUCKET', process.env.FIREBASE_STORAGE_BUCKET || "boomtown-e1e45.appspot.com");
}
