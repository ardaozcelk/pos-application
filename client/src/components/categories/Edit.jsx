import { Button, Form, Input, message, Modal, Table } from 'antd'
import React, { useState } from 'react'

const Edit = ({ isEditModalOpen, setIsEditModalOpen, categories, setCategories }) => {
    const [editigRow, setEditingRow] = useState({});

    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/categories/update-category", {
                method: "PUT",
                body: JSON.stringify({ ...values, categoryId: editigRow._id }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            message.success("Kategori Adı Başarıyla Güncellendi!");
            setCategories(categories.map((item) => { // bu setCategories ile dinamik olarak isminin değişmesini sağlıyoruz.
                if (item._id === editigRow._id) {
                    return { ...item, title: values.title };
                }
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
        title: "Category Title",
        dataIndex: "title",
        render: (_, record) => {
            if (record._id === editigRow._id) {
                return (
                    <Form.Item className='mb-0' name="title">
                        <Input defaultValue={record.title} />
                    </Form.Item>
                )
            } else {
                return (
                    <p>{record.title}</p>
                )
            }
        }
    }, {
        title: "Action",
        dataIndex: "action",
        render: (text, record) => {
            return (
                <div>
                    <Button type='link' onClick={() => { setEditingRow(record) }} className='pl-0'>Düzenle</Button>
                    <Button type='text' htmlType='submit'>Kaydet</Button>
                    <Button type='text' onClick={() => deleteCategory(record._id)} danger>Sil</Button>
                </div>
            )
        }
    }];
    return (
        <>
            <Modal open={isEditModalOpen} title="Kategori İşlemleri" footer={false} onCancel={() => setIsEditModalOpen(false)}>
                <Form onFinish={onFinish}>
                    <Table bordered dataSource={categories} columns={colums} rowKey={"_id"} />
                </Form>
            </Modal>
        </>
    )
}

export default Edit