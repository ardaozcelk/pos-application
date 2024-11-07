import { Badge, Input, message } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./index.css";



const Header = ({ setSearch }) => {
    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const logOut = () => {
        if (window.confirm("Çıkış Yapmak İstiyor Musunuz ?")) {
            localStorage.removeItem("posUser");
            navigate("/login");
            message.success("Çıkış İşlemi Başarılı.");
        }
    }

    return (
        <div className="border-b mb-6">
            <header className="py-4 px-6 flex justify-between items-center gap-10">
                <div className="logo">
                    <a href="/">
                        <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1 flex justify-center"
                    onClick={() => {
                        pathname !== "/" && navigate("/")
                    }}>
                    <Input
                        size="large"
                        placeholder="Ürün Ara..."
                        prefix={<SearchOutlined />}
                        className="rounded-full max-w-[800px]"
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    />
                </div>
                <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4">
                    <Link to={"/"} className={`menu-link flex flex-col items-center justify-center space-y-1 hover:text-[#40a9ff] transition-all ${pathname === "/" && "active"} `}>
                        <HomeOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Ana Sayfa</span>
                    </Link>
                    <Badge count={cart.cartItems.length} offset={[0, 6]} className="md:flex hidden">
                        <Link to={"/cart"} className={`menu-link flex flex-col items-center justify-center space-y-1 hover:text-[#40a9ff] transition-all ${pathname === "/cart" ? "!text-[#40a9ff]" : ""}`}>
                            <ShoppingCartOutlined className="md:text-2xl text-xl" />
                            <span className="md:text-xs text-[10px]">Sepet</span>
                        </Link>
                    </Badge>
                    <Link to={"/bills"} className={`menu-link flex flex-col items-center justify-center space-y-1 hover:text-[#40a9ff] transition-all ${pathname === "/bills" ? "!text-[#40a9ff]" : ""}`}>
                        <CopyOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Faturalar</span>
                    </Link>
                    <Link to={"/customers"} className={`menu-link flex flex-col items-center justify-center space-y-1 hover:text-[#40a9ff] transition-all ${pathname === "/customers" ? "!text-[#40a9ff]" : ""}`}>
                        <UserOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Müşteriler</span>
                    </Link>
                    <Link to={"/statistic"} className={`menu-link flex flex-col items-center justify-center space-y-1 hover:text-[#40a9ff] transition-all ${pathname === "/statistic" ? "!text-[#40a9ff]" : ""}`}>
                        <BarChartOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">İstatistikler</span>
                    </Link>
                    <div onClick={logOut}>
                        <Link className={`menu-link flex flex-col items-center justify-center space-y-1 hover:text-[#40a9ff] transition-all`}>
                            <LogoutOutlined className="md:text-2xl text-xl" />
                            <span className="md:text-xs text-[10px]">Çıkış</span>
                        </Link>
                    </div>
                </div>
                <Badge count={5} offset={[0, 6]} className="md:hidden flex">
                    <Link to={"/"} className={`menu-link flex flex-col items-center justify-center space-y-1 hover:text-[#40a9ff] transition-all ${pathname === "/" && "active"}`}>

                        <ShoppingCartOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Sepet</span>
                    </Link>
                </Badge>
            </header>
        </div>
    );
};
export default Header;