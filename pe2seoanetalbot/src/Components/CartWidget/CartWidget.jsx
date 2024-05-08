import CartIcon from "../CartIcon/CartIcon";
import "./CartWidget.css"

function CartWidget(){
    return (
        <div>
            <CartIcon width={'35'} height={'35'}/>
            <span className="num-carticon">4</span>
        </div>
    )
}

export default CartWidget