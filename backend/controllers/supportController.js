import  {Support}  from "../models/supportModel.js"


export const getAllSupports = async (req,res,next) => {
    try {
        const data = await Support.find({});
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
};