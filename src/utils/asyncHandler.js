const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}

// const asyncHandler =()=>{}
// const asyncHandler=(func) =>{ return ()= {} } //returns a function
// const asyncHandler= (func)=>{ return async()=> {} } //return a async function

//******    try catch    ********//
// const asyncHandler= (func)=> {
//     async(req,res,next)=> {
//         try{
//             await func(req, res, next)
//         } catch(err) {
//             res.status(err.code ||500).jsin({
//                 success: false,
//                 message:err.message
//             })
//         }
//     }
// }