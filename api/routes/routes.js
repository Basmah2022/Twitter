import express from 'express'
import auth  from '../middleware/authorization.js'
import multer  from "multer"

import { 
    createTweet,
    followManager,
    getHome,
    getUser,
    getUserTweets,
    login, 
    logintoken, 
    register,
    updateUser
} from '../controllers/user.controller.js'

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router()

router.get("/", (req, res) => res.send("just dev."))

router.get("/home", getHome)

router.post("/register", register)

router.post("/login", login)

router.post("/auth", logintoken)

router.post("/user", getUser)

router.post("/userTweets", getUserTweets)

router.post("/tweet", auth, createTweet)

router.post("/upload", auth, upload.array('files'), followManager)

router.post("/update", auth, updateUser)

router.post("/follow", auth, followManager)

export default router