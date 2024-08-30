const check=(req,res,next)=>{
    const username = req.headers.username;
    const pass = req.headers.pass;
  
    if(username != 'KROOS' || pass != 'MODRIC'){
        res.status(400).json({
            message: "You are no friend of mine"
        });
        next();

    }else{
        res.status(200).json({
            message: "you are a very good friend"
        })
        next();
   
    }

}
module.exports = check;