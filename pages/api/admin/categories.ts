import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
//import categories from "../../admin/categories";
import Category from "../../../models/categorySchema";
import dbConnect from "../../../lib/dbConnect";
//import {categories} from "../../admin/categories"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();
    const{categoryId} = req.query
    if(req.method === 'DELETE'){
        const deletedCategory = Category.findByIdAndDelete(req.body.id, (err) => {
            if(err){return console.log(err);}
        })
    }
}

export default handler;