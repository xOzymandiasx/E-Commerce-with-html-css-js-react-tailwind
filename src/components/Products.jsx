import { useState } from "react";
import img1 from "../img/image-product-1.jpg";
import img2 from "../img/image-product-2.jpg";
import img3 from "../img/image-product-3.jpg";
import img4 from "../img/image-product-4.jpg";

const Products = () => {
  const productImgs = [img1, img2, img3, img4];
  const [chosenImg, setChosenImg] = useState(productImgs[0])
  const changeImg = (img) => {
    setChosenImg(productImgs[img]);
  };

  return (
    <main className="bg-slate-400 w-full h-auto">
      <section className="w-2/4">
        <img src={chosenImg} alt="" className="w-2/5 h-2/5"/>
        <div>
          <li className="list-none flex">{productImgs.map((item, index) => <ul onClick={() => changeImg(index)} key={index}><img src={item} alt="" className="w-20 h-20"/></ul>)}</li>
        </div>
      </section>

      <section>

      </section>
    </main>
  );
};

export default Products;