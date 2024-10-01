import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/clientSlice";
import { RootState } from "@/store/store";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.client.theme);
  
    console.log(theme);
    
    const handleToggleTheme = () => {
      dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));
    };

    return (
        <header className="flex justify-between">
            <h1>Header</h1>
            <nav>
                <ul className="flex space-x-10">
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/product_detail">Chi tiết sản phẩmmmmmmm</Link></li>
                    <li><Link to="/product">Sản phẩm</Link></li>
                </ul>
            </nav>
            <button onClick={handleToggleTheme}>Toggle themeeeeeeeeeee</button>
        </header>
    );
};

export default Header;
