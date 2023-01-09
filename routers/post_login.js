import express from 'express';
import * as Login_func from "../models/Login_func.js"

const router = express.Router()

router.post('/createUser', async (req, res) => {
  console.log("sssssss\n")
  const userList = await Login_func.createUser(req.query.ID, req.query.Email, req.query.isUser, req.query.LettersNum)
  if (userList.length === 0 ) {
    return res.status(404).send()
  }
  return res.status(200).send("done")
  
})

export { router }