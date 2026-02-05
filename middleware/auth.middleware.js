const auth = (req,res,next) => {

    console.log("Auth checked");
  
    // if ((req.method == 'PUT' || 'DELETE') && req.headers['x-auth'])
    if(req.headers.authorization === 'abc')
    {

    console.log("---------Authorized access---------");

    return next();
    // next();
    // return next('router')
    }
    else{
        // return res.status(401, ()=>{
            
        // })
        console.log("Authorization denied! Please provide correct entries.")

        return res.status(401).send('Unauthorized access.');
    }

}

export default auth;