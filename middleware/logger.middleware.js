// import auth from '../middleware/auth.middleware.js'

const logger = (req,res,next) => {
    console.log("---------Logger---------")
    console.log(req.method, req.url)

    // console.log("Method is: "+req.method)
    // if(req.method==("PUT" || "DELETE"))
    // {
    //     auth();
    // }
    next();
}

export default logger;