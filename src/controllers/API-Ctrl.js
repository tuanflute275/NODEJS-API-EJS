import pool from '../config/connectDB'
let showAllUsers = async(req, res)=>{
    const [rows, field] = await pool.execute('select * from users')
    return res.status(200).json({
        message:"ok",
        data:rows
    })
}
let createNewUsers = async(req, res)=>{
    let {name, email, address} = req.body
    if(!name, !email, !address){
        return res.status(200).json({
            message:"missing require params"
        })
    }
    const [rows, field] = await pool.execute('insert into users(name, email, address) values (?, ?, ?)', [name, email, address])
    return res.status(200).json({
        message:'insert success'
    })
}
let updateUsers = async(req, res)=>{
    let {name, email, address, id} = req.body
    if(!name, !email, !address, !id){
        return res.status(200).json({
            message:"missing require params"
        })
    }
    let [user] = await pool.execute('update users set name=?, email=?, address=? where id=?', [name, email, address, id])
    return res.status(200).json({
        message:"update success"
    })
}
let deleteUsers = async(req, res)=>{
    let userId = req.params.id
    if(!userId){
        return res.status(200).json({
            message:"missing require params"
        })
    }
    await pool.execute('delete from users where id=?', [userId])
    return res.status(200).json({
        message:'delete success'
    })
}

module.exports={
    showAllUsers,createNewUsers,updateUsers,deleteUsers
}