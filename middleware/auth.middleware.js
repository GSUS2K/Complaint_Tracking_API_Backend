// import { isStringObject } from "util/types";

const auth = (req,res,next) => {

    console.log("---------Authentication---------")

    console.log("Auth checked...");
  
    // if ((req.method == 'PUT' || 'DELETE') && req.headers['x-auth'])
    
    // console.log(req.method)

    if (req.method == 'DELETE' || req.method == 'PUT'){

    // console.log(typeof req.headers.authorization)

    if(typeof req.headers.authorization === "string" && req.headers.authorization !="")
    {

    console.log(`Access to ${req.method} request is authorized!`);

    return next();
    // next();
    // return next('router')
    }
    else{
        // return res.status(401, ()=>{
            
        // })
        console.log("Authorization denied! Please provide correct entries.")

        return res.status(401).send('Unauthorized access!');
    }
}
else
{
    console.log(`${req.method} requests are publicly accessible!`)
    return next();
}
}

export default auth;