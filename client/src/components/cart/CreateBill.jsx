import { Modal } from "antd";
const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const closeModel = () => {
        setIsModalOpen(false);
    }
    return (
        <Modal title="Fatura Oluştur" open={isModalOpen} onCancel={closeModel} footer={false}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default CreateBill