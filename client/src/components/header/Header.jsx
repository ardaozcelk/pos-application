import { Input } from "antd";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined
} from "@ant-design/icons";
const Header = () => {
    return (
        <div className="border-b mb-6">
            <header className="py-4 px-6 flex justify-between items-center gap-10">
                <div className="logo">
                    <a href="/">
                        <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1">
                    <Input
                        size="large"
                        placeholder="Ürün Ara..."
                        prefix={<SearchOutlined />}
                        className="rounded-full max-w-[800px]"
                    />
                </div>
                <div className="menu-links flex justify-between items-center gap-8">
                    <a href={"/"} className="menu-link flex flex-col items-center justify-center space-y-1">
                        <HomeOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Ana Sayfa</span>
                    </a>

                    <a href={"/"} className="menu-link flex flex-col items-center justify-center space-y-1">
                        <ShoppingCartOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Sepet</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col items-center justify-center space-y-1">
                        <CopyOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Faturalar</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col items-center justify-center space-y-1">
                        <UserOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Müşteriler</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col items-center justify-center space-y-1">
                        <BarChartOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">İstatistikler</span>
                    </a>
                    <a href={"/"} className="menu-link flex flex-col items-center justify-center space-y-1">
                        <LogoutOutlined className="md:text-2xl text-xl" />
                        <span className="md:text-xs text-[10px]">Çıkış</span>
                    </a>
                </div>
            </header>
        </div>
    );
};
export default Header;