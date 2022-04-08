import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
//import categories from "../../admin/categories";
import Category from "../../../models/categorySchema";
import dbConnect from "../../../lib/dbConnect";
//import {categories} from "../../admin/categories"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();
    const cat = req.query.cat
    if(req.method === 'DELETE'){
        const deletedCategory = await Category.findOne({cat}) 
        deletedCategory.delete()
        res.json(deletedCategory)
    }
        
    
}

export default handler;