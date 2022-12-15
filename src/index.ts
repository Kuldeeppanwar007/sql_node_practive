import app from './server';

// app.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000');
});