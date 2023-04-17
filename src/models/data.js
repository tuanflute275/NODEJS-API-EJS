// import connection from '../config/connectDB'

// function dataMSQ(req, res){
//     let data = [];
//     connection.query(
//         'SELECT * FROM `users` ',
//         function (err, results, fields) {
//             results.map((row) => {
//                 data.push({
//                     id: row.id,
//                     email: row.email,
//                     address: row.address,
//                     name: row.name
//                 })
//             })
//             return res.render('index.ejs', { dataUser: JSON.stringify(data) });
//         }
//     );
// }

// export default dataMSQ;