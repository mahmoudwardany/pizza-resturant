import mongoose from 'mongoose'

const MONGO_URL = 'mongodb+srv://MahmoudWardany:mo151294om@cluster0.z8skjbi.mongodb.net/pizza?retryWrites=true&w=majority'

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