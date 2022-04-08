import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect"
import mongoose from "mongoose";
//import categories from "../../admin/categories";
import Category from "../../../models/categorySchema";
import dbConnect from "../../../lib/dbConnect";
//import {categories} from "../../admin/categories"

export default 
const handler = nc()
.delete(async (req, res)=>{
    try{
        await Category.findByIdAndDelete()
        res.send('Category deleted')
    }catch(error){
        console.log(error);
    }
})


export default handler;