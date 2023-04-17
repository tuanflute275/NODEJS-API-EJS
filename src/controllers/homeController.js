import pool from '../config/connectDB';

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
    return res.send(JSON.stringify(user))
}

let createNewUser = async (req, res) => {
    let { name, email, address } = req.body
    await pool.execute(`insert into users(name, email, address) values (?, ?, ?)`, [name, email, address])
    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id =?', [userId])
    return res.redirect('/')
}

let editUser = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute(`select * from users where id = ?`, [id])
    return res.render('update.ejs', { dataUser: user[0] })
}

let updateUser = async (req, res) => {
    let { name, email, address, id } = req.body
    let [user] = await pool.execute(`update users set name=?, email=?, address=? where id = ?`, [name, email, address, id])
    return res.redirect('/')
}

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, editUser, updateUser
}