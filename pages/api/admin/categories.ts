import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
//import categories from "../../admin/categories";
import Category from "../../../models/categorySchema";
import dbConnect from "../../../lib/dbConnect";
//import {categories} from "../../admin/categories"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();
    const category = req.body;

    const { title } = category;
    const categoryData = await Category.findOne({slug: title});
    let active_ids = (await Category.countDocuments({})) + 1;
    if(categoryData){
        return res.status(401).json({
        message: "Category already exists",
        });
    }
    else{
        const newCategory = await new Category({
        id: active_ids++,
        title: title,
        });
        await newCategory.save();
        //res.send(newCategory);
        const resCategoryData = {
        title: newCategory.title,
        };
        return res.status(200).json({
        message: "Category created successfully",
        category: resCategoryData,
        });
    }

    const cat = req.query.cat
    if(req.method === 'DELETE'){
        const deletedCategory = await Category.findOne({cat}) 
        deletedCategory.delete()
        res.json(deletedCategory)
    }  
}

export default handler;