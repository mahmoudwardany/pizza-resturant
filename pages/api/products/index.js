import dbConnect from "../../../util/mongo"
import Product from "../../../model/Product"

export default async function handleReq(req,res){
 await dbConnect();

    const {method,cookies}=req

    const token=cookies.token
    if (method === "GET") {
        try {
          const products = await Product.find();
          res.status(200).json(products);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    if (method === "POST") {
      if(!token || token !== process.env.token){
        return res.status(401).json("Not authenticated!")
      }
        try {
          const product =await  Product.create(req.body);
          res.status(201).json(product);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    }