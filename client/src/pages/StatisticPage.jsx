import { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import StatisticCard from "../components/statistic/StatisticCard.jsx";

const StatisticPage = () => {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/products/get-all");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        getProducts();
    }, []);

    const asyncFetch = () => {
        fetch("http://localhost:5000/api/bills/get-all")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log("fetch data failed", error);
            });
    };

    const totalAmount = () => {
        const amount = data.reduce((total, item) => item.totalAmount + total, 0);
        return `${amount.toFixed(2)}₺`;
    };

    return (
        <>
            <Header />
            <div className="px-6 md:pb-0 pb-20">
                <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
                <div className="statistic-section">
                    <h2 className="text-lg">
                        Hoş geldin{" "}
                        <span className="text-green-700 font-bold text-xl">admin</span>.
                    </h2>
                    <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
                        <StatisticCard
                            title={"Toplam Müşteri"}
                            amount={data?.length}
                            img={"images/user.png"}
                        />
                        <StatisticCard
                            title={"Toplam Kazanç"}
                            amount={totalAmount()}
                            img={"images/money.png"}
                        />
                        <StatisticCard
                            title={"Toplam Satış"}
                            amount={data?.length}
                            img={"images/sale.png"}
                        />
                        <StatisticCard
                            title={"Toplam Ürün"}
                            amount={products?.length}
                            img={"images/product.png"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatisticPage;