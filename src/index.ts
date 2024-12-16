import server from './server';

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Servidor corriendo en el pureto http://localhost:${port}`);
})