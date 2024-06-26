import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req,res) =>
    {
        try{
        const{fullName, email,password} = req.body;
        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({message:"user already exists"});
        }

        const hashPass = await bcryptjs.hash(password,10);
        const createUser = new User({
            fullName:fullName,
            email:email,
            password:hashPass,
        });
        await createUser.save();
        res.status(201).json({message:"User created successfully", user:{
            _id:createUser._id,
            fullName:createUser.fullName,
            email:createUser.email,
        }});
    }catch(err)
    {
        console.log("Error:"  + err.message);
        res.status(500).json({message:"Internal  server error"});
    }
    }

    export const login = async(req, res) =>
        {
            try{
                const{email, password} = req.body;
                const user = await User.findOne({email});
                const isMatch = await bcryptjs.compare(password, user.password);
                if(!user || !isMatch)
                    {
                        return res.status(400).json({message:"Invalid username or password"});
                    }else{
                        res.status(200).json({
                            message: "Login successful",
                            user:{
                                id:user._id,
                                fullName:user.fullName,
                                email:user.email,
                            },
                        });
                    }

            }catch(err)
            {
                console.log("Error" + err.message);
                res.status(500).json({message:"Internal server error"});

            }
        }