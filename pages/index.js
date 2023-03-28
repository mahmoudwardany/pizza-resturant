import  Add  from '../components/Add'
import axios from 'axios'
import Head from 'next/head'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import AddBtn from '../components/AddBtn'
import { useState } from 'react'

export default function Home({pizzaList,admin}) {
  const [close, setClose] = useState(true)
  return (
    <div >
    <Head>
      <title>Pizza Resturant</title>
      <meta name='description' content='best pizza in egypt'/>
    </Head>
<Featured/>
{admin && <AddBtn setClose={setClose}/>}
      <PizzaList Pizzas={pizzaList}/>
      {!close && <Add setClose={setClose}/>}
    </div>
  )
}
export const getServerSideProps = async (ctx) => {
let myCookie=ctx.req?.cookies || ""
console.log(ctx.req)
let admin=false
if(myCookie.token === process.env.TOKEN){
  admin = true
}
try {
  const res = await axios.get(`${process.env.API_URL}/products`);
  return {
    props: {
      pizzaList: res.data,
      admin
    },
  };
} catch (error) {
  console.log(error)
}
  
};