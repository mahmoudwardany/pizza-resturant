import dbConnect from "../../../util/mongo"
import Order from "../../../model/Order";
export default async function handleReq(req,res){
    const {method}=req
    dbConnect()
    if (method === "GET") {
        try {
          const orders = await Order.find();
          res.status(200).json(orders);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    if (method === "POST") {
        try {
          const order =await  Order.create(req.body);
          res.status(201).json(order);
        } catch (err) {
          res.status(500).json(err);
        }
      }
    }