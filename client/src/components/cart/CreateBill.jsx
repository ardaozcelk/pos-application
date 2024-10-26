import { Form, Input, Modal, Select, Card, Button } from "antd";
import { useSelector } from "react-redux";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const closeModel = () => {
        setIsModalOpen(false);
    }
    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/bills/add-bill", {
                method: "POST",
                body: JSON.stringify({
                    ...values,
                    subTotal: cart.total,
                    tax: cart.tax,
                    totalAmount: (cart.total + ((cart.total * cart.tax) / 100)).toFixed(2),

                })
            });
        } catch (error) {
            console.log(error);
        }
    }
    const cart = useSelector((state) => state.cart);
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
                        <span>{cart.total > 0 ? (cart.total).toFixed(2) : 0}₺</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>KDV Toplam %{cart.tax}</span>
                        <span className="text-red-600">{((cart.total * cart.tax) / 100) > 0 ? `+${((cart.total * cart.tax) / 100).toFixed(2)}` : 0}₺</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Toplam</span>
                        <span>{(cart.total + ((cart.total * cart.tax) / 100)) > 0 ?
                            (cart.total + ((cart.total * cart.tax) / 100)).toFixed(2) : 0}₺</span>
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