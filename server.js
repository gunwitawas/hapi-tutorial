const Hapi = require('hapi');
// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8000
});

server.route([{
    path: "/user",
    method: "GET",
    handler: (request, h) => {

        let result = request.query;

        return result;

    }
}]);


// Start the server
const start = async function () {

    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();