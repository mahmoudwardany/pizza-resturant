import mongoose from 'mongoose'

const MONGO_URL =process.env.MONGO_URL 

  async function dbConnect() {
  try {
    await mongoose.connect(MONGO_URL ,
    {useUnifiedTopology:true , useNewUrlParser:true});

    console.log('Connected successfully !')

  } catch (error) {
      console.log(error)
  }
}


export default dbConnect