import { Button, Form, message, Table } from 'antd'
import React, { useState, useEffect } from 'react'

const Edit = ({ categories, setCategories }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/products/get-all");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])

    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/categories/update-category", {
                method: "PUT",
                body: JSON.stringify({ ...values }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            message.success("Kategori Adı Başarıyla Güncellendi!");
            setCategories(categories.map((item) => { // bu setCategories ile dinamik olarak isminin değişmesini sağlıyoruz.
                return item;
            }))
        } catch (error) {
            message.error("Bir şeyler yanlış gitti!");
            console.log(error);
        }
    }

    const deleteCategory = (id) => {
        if (window.confirm("Emin misiniz ?")) {
            try {
                fetch("http://localhost:5000/api/categories/delete-category", {
                    method: "DELETE",
                    body: JSON.stringify({ categoryId: id }),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                });
                message.success("Kategori başarıyla silindi.");
                setCategories(categories.filter((item) => item._id !== id));//dinamik olarak silinen öğeyi kaldırır
            } catch (error) {
                message.error("Bir şeyler yanlış gitti!");
                console.log(error);
            }
        }
    }

    const colums = [{
        title: "Ürün Adı",
        dataIndex: "title",
        width: "8%",
        render: (_, record) => {
            return (
                <p>{record.title}</p>
            )
        }
    },
    {
        title: "Ürün Görseli",
        dataIndex: "img",
        width: "4%",
        render: (_, record) => {
            return (
                <img src={record.img} className='w-full h-20 object-cover' alt='' />
            )
        }
    },
    {
        title: "Ürün Fiyatı",
        dataIndex: "priece",
        width: "8%",
        render: (_, record) => {
            return (
                <p>{record.price}</p>
            )
        }
    },
    {
        title: "Kategori",
        dataIndex: "category",
        width: "8%",
        render: (_, record) => {
            return (
                <p>{record.category}</p>
            )
        }
    },
    {
        title: "Action",
        dataIndex: "action",
        width: "8%",
        render: (text, record) => {
            return (
                <div>
                    <Button type='link' className='pl-0'>Düzenle</Button>
                    <Button type='text' htmlType='submit'>Kaydet</Button>
                    <Button type='text' onClick={() => deleteCategory(record._id)} danger>Sil</Button>
                </div>
            )
        }
    }];
    return (
        <>
            <Form onFinish={onFinish}>
                <Table bordered dataSource={products} columns={colums} rowKey={"_id"} scroll={{ x: 1000, y: 600 }} />
            </Form>
        </>
    )
}

export default Edit