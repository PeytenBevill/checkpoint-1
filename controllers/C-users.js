const users = require('../data/index')



//list
const list = (req, res) => {
  res.json(users)
}

//show
const show = (req, res) => {
  const {id} = req.params
  let found = users.find((users) => {
    return users.id === Number(id)
  })
  res.json(found)
}

//create
const create = (req, res) => {
  const {body} = req
  let lastId = 0
  if(users.length > 0){
    lastId = users[users.length -1].id
  }
  let newId = lastId + 1
  const obj = {
    "id": newId,
    ...body
  }
  users.push(obj)
  res.json(obj)
}

//update
const update = (req, res) => {
  const {id} = req.params
  const updates = req.body
  let found = users.find((users) => {
    return users.id === Number(id)
  })
  if(found){
    Object.assign(found, updates)
    res.json(users)
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}

//delete
const deleteUsers = (req, res) => {
  const {id} = req.params
  let found = users.find((users) => {
    return users.id === Number(id)
  })
  if(found !== -1){
    const deleteUser = users.splice(found, 1)[0]
   res.json({ message: 'User deleted successfully', user: deleteUser });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}

module.exports = {
  list,
  show,
  create,
  update,
  deleteUsers
}