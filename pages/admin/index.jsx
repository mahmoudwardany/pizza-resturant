import React, { useState } from 'react'
import styles from '../../styles/Admin.module.css'
import Image from 'next/image'
import axios from 'axios'
import domain from '../../util/confing'
const Admin = ({orders,products}) => {
    const [pizzaList,setPizzaList]=useState(products)
    const [orderList,setOrderList]=useState(orders)
    const status=["preparing", "on the way", "delivered"]
    const handleDelete = async (id) => {
      try {
        const res = await axios.delete(`${domain}/api/products/${id}`)
        setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
      } catch (err) {
        console.log(err);
      }
    };


    const handleStatus = async (id) => {
      const item = orderList.filter((order) => order._id === id)[0];
      const currentStatus = item.status;
  
      try {
        const res = await axios.put(`${domain}/api/orders/${id}`, {
          status: currentStatus + 1,
        });
        setOrderList([
          res.data,
          ...orderList.filter((order) => order._id !== id),
        ]);
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <div className='container mb-3'>
      <div className="row justify-center align-content-center align-items-center g-3">
    <div className='grid col-md-6 col-sm-12 text-center'>
      <h1 className={styles.title}>Products</h1>
      <table className='col-md-12 '>
        <tbody>
          <tr className={styles.trTitle}>
            <th>Image</th>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </tbody>
        {pizzaList.map((product) => (
          <tbody key={product._id}>
            <tr className={styles.trTitle}>
              <td>
                <Image
                  src={product.img}
                  width={50}
                  height={50}
                  
                  alt=""
                />
              </td>
              <td>{product._id.slice(0, 5)}...</td>
              <td>{product.title}</td>
              <td>${product.prices[0]}</td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    <div className='grid col-md-5 col-sm-10 text-center'>
      <h1 className={styles.title}>Orders</h1>
      <table className='col-md-12 border  border-table-active'>
        <tbody>
          <tr className={styles.trTitle}>
            <th>Id</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </tbody>
        {orderList.map((order) => (
          <tbody key={order._id}>
          <tr className={styles.trTitle}>
            <td>{order._id.slice(0, 5)}...</td>
            <td>{order.customer}</td>
            <td>${order.total}</td>
            <td>
              {order.method === 0 ? <span>cash</span> : <span>paid</span>}
            </td>
            <td>{status[order.status]}</td>
            <td>
              <button onClick={() => handleStatus(order._id)} className='btn btn-info mb-2 p-1'>
                Next Stage
              </button>
            </td>
          </tr>
        </tbody>
        ))}
      </table>
    </div>
    </div>
  </div>
  )
}
export const getServerSideProps=async(ctx)=>{
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
    const productRes = await axios.get(`${domain}/api/products`);
    const orderRes = await axios.get(`${domain}/api/orders`);
    return {
      props: {
        orders: orderRes.data,
        products: productRes.data,
      },
    };
  }
export default Admin