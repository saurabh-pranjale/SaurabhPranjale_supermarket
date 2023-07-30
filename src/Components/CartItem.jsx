import {RxCross1} from "react-icons/rx"
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
   toast.error("Item Removed")
  }

  return (
    <div className="w-[97%]  m-auto my-2">
<hr class="h-px my-2 bg-gray-200 border-0 "></hr>
      <div className="flex flex-row relative ">

        <div>
          <img src={item.image} className="h-[7rem] w-[6rem] mr-2" />
        </div>
        <div
            onClick={removeFromCart} className="absolute right-1 cursor-pointer">
              <RxCross1/>
            </div>
        <div className=" m-auto flex flex-col ml-4">
          <h1 className="font-bold mb-2 max-w-[9rem]">{item.title}</h1>
          <h1 className="max-w-[16rem] md:max-w-[20rem] mb-2">{item.description.slice(0,40,)}</h1>
          <div>
            <p>${item.price}</p>
          
          </div>

        </div>


      </div>
      <hr class="h-px my-2 bg-gray-200 border-0 "></hr>
    </div>
  );
};

export default CartItem;