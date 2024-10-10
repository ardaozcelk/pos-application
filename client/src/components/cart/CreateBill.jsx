import { Form, Input, Modal, Select, Card, Button } from "antd";
const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const closeModel = () => {
        setIsModalOpen(false);
    }
    const onFinish = (value) => {
        console.log("Received values of from: ", value);
    }
    return (
        <Modal title="Fatura Oluştur" open={isModalOpen} onCancel={closeModel} footer={false} >
            <Form layout={"vertical"} onFinish={onFinish}>
                <Form.Item label="Müşteri Adı" name={"customerName"}
                    rules={[
                        {
                            required: true,
                            message: "Username is required",
                        },
                    ]}
                >
                    <Input placeholder="Bir Müşteri Adı Yazınız" />
                </Form.Item>
                <Form.Item rules={[{ required: true }]} name={"phoneNumber"} label="Tel No">
                    <Input placeholder="Bir Tel No Yazınız" maxLength={11} />
                </Form.Item>
                <Form.Item label="Ödeme Yöntemi" rules={[{ required: true }]} name={"paymentMode"} >
                    <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
                        <Select.Option value="Nakit">Nakit</Select.Option>
                        <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
                    </Select>
                </Form.Item>
                <Card>
                    <div className="flex justify-between">
                        <span>Ara Toplam</span>
                        <span>549.00₺</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>KDV Toplam %8</span>
                        <span className="text-red-600">+43.92₺</span>
                    </div>
                    <div className="flex justify-between">
                        <b>Toplam</b>
                        <b>592.92₺</b>
                    </div>
                    <div className="flex justify-end">
                        <Button className="mt-4" type="primary" htmlType="submit">Sipariş Oluştur</Button>
                    </div>
                </Card>
            </Form>
        </Modal>
    )
}

export default CreateBill