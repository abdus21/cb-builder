const User = require("../model/userModel");
const createError = require("./errorController");
const jwt = require('jsonwebtoken');
const CB = require("../model/cbModel");
const bcrypt = require('bcryptjs')



const userRegistration = async (req,res,next)=>{
    try{
        let hashPass = await bcrypt.hash(req.body.password,10)
        const data = await User.create({...req.body,password:hashPass});
        
        if(!data){
            next(createError(404,"there was a problame"))
        }
        if(data){
            res.status(201).json({
                data : data,
            });
           /*  const cb = await CB.create({
                email : data.email,
                mobile : data.mobile
            });
            await User.findOneAndUpdate({_id:data._id}, {$push : {cb:cb._id}},{
                new : true
            })  */
        }
    }catch(error){
        next(error)
        console.log(error); 
    }

};


const userLogin = async (req,res,next)=>{

    try{
        
        const login_user = await  User.findOne({email:req.body.email});
  
        
        if(!login_user){
          return  next(createError(400,"user not found"))
        };

        let pass = await bcrypt.compare(req.body.password,login_user.password);
        if(login_user){ 
            if(!pass){
                next(createError(400,"password not match"))
            }
    
            if(pass){

                let token = jwt.sign({email : login_user.email},process.env.JWT_SECRET);
                 const {_id,password, ...user_info} = login_user._doc;

            res.status(200).json({
                token: token,
                user_info : user_info
            })
            }
            
        } 

    }catch(error){ 
        next(error)
        console.log(error);
    }

};


const updateProfile = async (req,res,next)=>{

    try{
       const user_data = await User.findOne({email :req.user.email});
       

       const update_user= await User.findOneAndUpdate({email :req.user.email},{
        ...req.body,
        photo : ''
    });
       if(!update_user){
        next(createError(404,"user not update"))
       }
       if(update_user){
          res.status(200).json({
            message : "user update success"
          })
       }

    }catch(error){
        next(error)
        console.log(error);
    }

};

const me = async (req,res,next)=>{

    try{
       const user_data = await User.findOne({email :req.user.email});
       

      
       if(!user_data){
        next(createError(404,"user not update"))
       }
       if(user_data){
          res.status(200).json(user_data)
       }

    }catch(error){
        next(error)
        console.log(error);
    }

};


const createCb = async (req,res,next)=>{
    try{
        let reqBody = req.body;
        reqBody.email = req.user.email;
        const create_data = await CB.create(reqBody);
        if(!create_data){
            next(createError(404,"task not create"))
        }
        if(create_data){
           res.status(200).json({
            message : "task create success"
           })
        }
    }catch(error){
        next(error)
    }
}


const delteTask = async (req,res,next)=>{

    try{
        const delete_task = await CB.findByIdAndDelete(req.params.id);

        if(!delete_task){
            next(createError(404,"task not found"))
        }
        if(delete_task){
           res.status(200).json({
            message : "task delete success"
           })
        }
    }catch(error){
        next(error)
    }
   
};


const updateTaskStatus = async (req,res,next)=>{

    try{
        const update_task = await CB.findByIdAndUpdate(req.params.id,{
            status : req.params.status
        });

        if(!update_task){
            next(createError(404,"task not found"));
        };

        if(update_task){
           res.status(200).json({
            message : "task update success"
           });
        }
    }catch(error){
        next(error);
    }
   
};


const selectTaskStatus = async (req,res,next)=>{

    try{
        const select_task = await CB.find({email : req.user.email}).where('status').equals(req.params.status);

        if(!select_task){
            next(createError(404,"task not found"));
        };

        if(select_task){
           res.status(200).json(select_task);
        }
    }catch(error){
        next(error);
    }
   
}
const countStatus = async (req,res,next)=>{

    try{
        const select_task = await CB.aggregate([
            {$match:{email: req.user.email}},
            {$group:{_id:"$status",sum:{$count:{}}}}
        ])

        if(!select_task){
            next(createError(404,"task not found"));
        };

        if(select_task){
           res.status(200).json(select_task);
        }
    }catch(error){
        next(error);
    }
   
}


module.exports ={
    userRegistration, 
    userLogin,
    updateProfile,
    createCb,
    delteTask,
    updateTaskStatus,
    selectTaskStatus,
    countStatus,
    me
}