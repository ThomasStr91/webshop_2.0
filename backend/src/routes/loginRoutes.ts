import express from "express"
import { loginUser } from "../controller/user.controller"

const router = express.Router()

router.post("/", loginUser)

export default router; 