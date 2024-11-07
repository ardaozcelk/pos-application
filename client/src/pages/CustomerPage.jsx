import { Spin, Table } from "antd";
import Header from "../components/header/Header.jsx";
import { useEffect, useState } from "react";
const CustomerPage = () => {
    const [billItems, setBillItems] = useState();

    useEffect(() => {
        try {
            const getBills = async () => {
                const res = await fetch("http://localhost:5000/api/bills/get-all");
                const data = await res.json();
                setBillItems(data);
            }
            getBills();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const columns = [
        {
            title: "Müşteri Adı",
            dataIndex: "customerName",
            key: "customerName",
        },
        {
            title: "Telefon Numarası",
            dataIndex: "customerPhoneNumber",
            key: "customerPhoneNumber",
        },
        {
            title: "İşlem Tarihi",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text) => {
                return <span>{text.substring(0, 10)}</span>
            }
        },
    ];
    return (
        <>
            <Header />
            <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
            {billItems ? (<div className="px-6">
                <Table
                    dataSource={billItems}
                    columns={columns}
                    bordered
                    pagination={false}
                    scroll={{ x: 1000, y: 450 }}
                    rowKey="_id"
                />
            </div>) : <Spin size="large" className="absolute top-1/2 w-screen h-screen flex justify-center" />}
        </>
    );
};
export default CustomerPage;