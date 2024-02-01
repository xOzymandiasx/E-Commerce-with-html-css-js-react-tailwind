import { useSelector } from "react-redux";

const Chart = () => {
  const productsInChart = useSelector(item => item.count > 0);
  console.log(productsInChart);

  return (
    <div className="absolute top-14 flex flex-col">
      <h4>Cart</h4>
      <hr className="border-black" />
      <p>Your cart is empty</p>
    </div>
  );
};

export default Chart;
