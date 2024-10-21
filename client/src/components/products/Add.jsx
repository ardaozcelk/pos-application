import { Button, Form, Input, message, Modal, Select } from 'antd'
import React from 'react'

const Add = ({ isAddModalOpen, setIsAddModalOpen, categories, setProducts, products }) => {

    const [form] = Form.useForm()

    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/products/add-product", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            message.success("Kategori Başarıyla Eklendi!");
            form.resetFields();
            setProducts([...products, { ...values, _id: Math.random(), price: Number(values.price) }]); // ekrana dinamik olarak bas
            setIsAddModalOpen(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Modal title="Yeni Ürün Ekle" open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)} footer={false}>
                <Form layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item name="title" label="Ürün Adı" rules={[{ required: true, message: "Ürün Adı Alanı Boş Geçilemez" }]}>
                        <Input placeholder='Bir Ürün Adı Giriniz' />
                    </Form.Item>

                    <Form.Item name="img" label="Ürün Görseli" rules={[{ required: true, message: "Ürün Görseli Alanı Boş Geçilemez" }]}>
                        <Input placeholder='Bir Ürün Görseli Giriniz' />
                    </Form.Item>
                    <Form.Item name="price" label="Ürün Fiyatı" rules={[{ required: true, message: "Ürün Fiyatı Alanı Boş Geçilemez" }]}>
                        <Input placeholder='Bir Ürün Fiyatı Giriniz' />
                    </Form.Item>
                    <Form.Item name="category" label="Ürün Kategorisi" rules={[{ required: true, message: "Ürün Kategorisi Alanı Boş Geçilemez" }]}>
                        <Select
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="label"
                            options={categories}
                        />
                    </Form.Item>
                    <Form.Item className="flex justify-end mb-0">
                        <Button type="primary" htmlType="submit">Oluştur</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Add