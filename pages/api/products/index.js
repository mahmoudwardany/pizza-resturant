import dbConnect from "../../../util/mongo"
import Product from "../../../model/Product"

export default async function handleReq(req,res){
 await dbConnect();

    const {method,cookies}=req
    if (method === "GET") {
        try {
          const products = await Product.find();
          res.status(200).json(products);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    if (method === "POST") {
        try {
          const product =await  Product.create(req.body);
          res.status(201).json(product);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    }