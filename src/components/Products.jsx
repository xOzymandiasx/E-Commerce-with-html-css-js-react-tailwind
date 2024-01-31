import { useState } from "react";
import img1 from "../img/image-product-1.jpg";
import img2 from "../img/image-product-2.jpg";
import img3 from "../img/image-product-3.jpg";
import img4 from "../img/image-product-4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addCart, remCart } from "../redux/productSlice";

const Products = () => {
  const productCount = useSelector(state => state.product);
  const dispatch = useDispatch();
  const productImgs = [img1, img2, img3, img4];
  const [chosenImg, setChosenImg] = useState(productImgs[0])
  const changeImg = (img) => {
    setChosenImg(productImgs[img]);
  };

  const add = () => {
    dispatch(addCart(1));
  };

  const rem = () => {
    if (productCount > 0) dispatch(remCart(1));
  };

  return (
    <main className="bg-slate-400 w-full h-auto flex">
      <section className="flex flex-col items-center justify-center">
        <img src={chosenImg} alt="" className="h-2/5"/>
        <div>
          <li className="list-none flex">{productImgs.map((item, index) => <ul onClick={() => changeImg(index)} key={index}><img src={item} alt="" className="w-20 h-20"/></ul>)}</li>
        </div>
      </section>

      <section className="flex flex-col justify-center">
        <p>sneaker company</p>
        <h3>Fall Limited Edition Sneakers</h3>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they´ll withstand everithing the weather can offer.</p>
        <p>precio descuento</p>
        <p>{productCount}</p> 
        <button onClick={add}>Add to cart</button>
        <button onClick={rem}>remove from cart cart</button>
      </section>
    </main>
  );
};

export default Products;