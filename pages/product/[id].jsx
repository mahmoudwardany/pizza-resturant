import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../state/cartSlice";
const Product = ({pizza}) => {
  const dispatch=useDispatch()
  const [price,setPrice]=useState(pizza.prices[0])
  const [size, setSize] = useState(0);
  const [quantity,setQuantity]=useState(1)
  const [extras,setExtras]=useState([])

const changePrice=(num)=>{
  setPrice(price + num)
}          //10
const handleSize = (Index) => {
                      //pizzaPrice[0]=10        -  pizzaPrice[2] =17 = -7
  const difference = pizza.prices[Index] - pizza.prices[size];//index
  console.log(size)
  setSize(Index);//1
  changePrice(difference);//-7
};
  const handleChange=(e,option)=>{
const checked=e.target.checked
if(checked){
  changePrice(option.price)
  setExtras(prev=>[...prev,option])

}else{
  changePrice(-option.price)
  setExtras(extras.filter((extra)=> extra._id !== option._id))
}
  }

  const handleAddProduct = () => {
    dispatch(addProduct({...pizza, extras, price, quantity}));
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
        {pizza.extraOptions.map((option)=>(
          <div className={styles.option} key={option._id}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={option.text}
              name={option.text}
              onChange={(e)=>handleChange(e,option)}
            />
            <label htmlFor="garlic">{option.text}</label>
          </div>
        ))}
          
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}            onChange={(e) => setQuantity(e.target.value)}
/>
            <button className={styles.button} 
            onClick={handleAddProduct}
            >Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({params}) => {

  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props: {
      pizza: res.data,
    },
  };
};
export default Product;