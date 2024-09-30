import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_THEME } from "@/store/actions";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
    const dispatch = useDispatch();
    const clientClient = useSelector((reduce: any) => reduce.clientReducer);
    const handleToggleTheme = () => {
        dispatch({ type: TOGGLE_THEME, payload: clientClient.theme == 'light' ? 'dark' : 'light' });
    }
    return (
        <header className="flex justify-between">
            <h1>Header</h1>
            <nav>
                <ul className="flex space-x-10">
                    <li><Link to={'/'}>Trang chủ</Link></li>
                    <li><Link to={'/product_detail'}>Chi tiết sản phẩm</Link></li>
                    <li><Link to={'/product'}>Sản phẩm</Link></li>
                    <li><Link to={'/Cart'}>Giỏ hàng</Link></li>
                </ul>
            </nav>
            <button onClick={handleToggleTheme}>Toggle theme</button>
        </header>
    )
}
export default Header;