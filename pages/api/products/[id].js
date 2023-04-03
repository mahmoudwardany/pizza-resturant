import dbConnect from "../../../util/mongo"
import Product from "../../../model/Product"

export default async function handleReq(req,res){
 await dbConnect();

    const {method,query:{id},cookies}=req
    const token=cookies.token
    if (method === "GET") {
        try {
          const product = await Product.findById(id);
          res.status(200).json(product);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    if (method === "PUT") {
        try {
          const product =await  Product.findByIdAndUpdate(req.body);
          res.status(201).json(product);
        } catch (err) {
          res.status(500).json(err);
        }
      }
      if (method === "DELETE") {
    
        try {
          await  Product.findByIdAndDelete(id);
          res.status(201).json('the product is Deleted');
        } catch (err) {
          res.status(500).json(err);
        }
      }
    }