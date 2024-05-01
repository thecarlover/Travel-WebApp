const express = require("express");
const app = express();
const zod = require('zod');
const {user} = require("./db");

app.use(express.json());

const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})



app.post('/signup',async (req, res) => {
    console.log(req.body)
    const { success } = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Invalid Email or Password"
        })
    }

    const existingUser = await user.findOne({username: req.body.username});
    if(existingUser){
        return res.status(411).json({
            message: "Account with this email already exists"
        })
    }
    
    // console.log("chal gaya")
    const newUser = await user.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });
    res.json({
        message: "user created successfully"
    })

})

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

app.post('/signin', async(req, res) => {
    const { success } = signinSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message: "Invalid username or password"
        })
    }

    const existingUser = await user.findOne({username: req.body.username, password: req.body.password});
    if(existingUser){
        //JTW code
        return res.json({
            message: "You are successfully Logged in"
        })
    }

    res.status(411).json({
        message: "Error while logging in"
    })

})


app.listen(3000, ()=>{
    console.log("your app is listening on PORT:3000");
})
