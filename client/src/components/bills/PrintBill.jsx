import { Button, Modal } from "antd";
const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <Modal title="Fatura Yazdır" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)} width={800}>
            <section className="py-20 bg-black">
                <div className="max-w-5xl mx-auto bg-white px-6">
                    <article className="overflow-hidden">
                        <div className="logo my-6">
                            <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
                        </div>
                        <div className="bill-details">
                            <div className="grid grid-cols-4 gap-12">
                                <div className="text-md text-slate-500">
                                    <p className="font-bold text-slate-700">Fatura Detayı:</p>
                                    <p>Unwrapped</p>
                                    <p>Fake Street 123</p>
                                    <p>San Javier</p>
                                    <p>CA 1234</p>
                                </div>
                                <div className="text-md text-slate-500">
                                    <p className="font-bold text-slate-700">Fatura:</p>
                                    <p>The Boring Company</p>
                                    <p>Fake Street 123</p>
                                    <p>San Javier</p>
                                    <p>CA 1234</p>
                                </div>
                                <div className="text-md text-slate-500">
                                    <div>
                                        <p className="font-bold text-slate-700">Fatura Numarası:</p>
                                        <p>0041</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-700 mt-2">Veriliş Tarihi:</p>
                                        <p>11-10-2024</p>
                                    </div>
                                </div>
                                <div className="text-md text-slate-500">
                                    <div>
                                        <p className="font-bold text-slate-700">Şartlar:</p>
                                        <p>10</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-700 mt-2">Due:</p>
                                        <p>21-10-2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bill-table-area mt-8">
                            <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                <thead>
                                    <tr className=" border-b border-slate-200">
                                        <th scope="col" className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Görsel</th>
                                        <th scope="col" className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Başlık</th>
                                        <th scope="col" className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Fiyat</th>
                                        <th scope="col" className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Adet</th>
                                        <th scope="col" className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">Toplam</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b border-slate-200">
                                        <td className="py-4 pr-3">
                                            <img src="https://cdn.yemek.com/mnresize/1250/833/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg" alt="" className="w-12 h-12 object-cover" />
                                        </td>
                                        <td className="py-4 pr-3">
                                            <span className="font-medium">Şalgam</span>
                                        </td>
                                        <td className="py-4 pr-3 text-center">
                                            <span>5₺</span>
                                        </td>
                                        <td className="py-4 pr-3 text-center">
                                            <span>1</span>
                                        </td>
                                        <td className="py-4 text-end">
                                            <span>5.00₺</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th className="text-right pt-6" colSpan={4} scope="row">
                                            <span className="font-normal text-slate-700">
                                                Ara Toplam
                                            </span>
                                        </th>
                                        <th className="text-right pt-4" scope="row">
                                            <span className="font-normal text-slate-700">
                                                61₺
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="text-right pt-4" colSpan={4} scope="row">
                                            <span className="font-normal text-slate-700">
                                                KDV
                                            </span>
                                        </th>
                                        <th className="text-right pt-4" scope="row">
                                            <span className="font-normal text-red-600">
                                                +4.88₺
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="text-right pt-4" colSpan={4} scope="row">
                                            <span className="font-normal text-slate-700">
                                                Total
                                            </span>
                                        </th>
                                        <th className="text-right pt-4" scope="row">
                                            <span className="font-normal text-slate-700">
                                                65.88₺
                                            </span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="py-9">
                                <div className="border-t pt-9 border-slate-200">
                                    <p className="text-sm font-light text-slate-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem, blanditiis nobis molestiae deserunt explicabo animi provident dicta minima numquam a repellat harum qui sit alias. Non omnis minima odit autem ullam harum esse tempora?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <div className="flex justify-end mt-4">
                <Button type="primary" size="large">Yazdır</Button>
            </div>
        </Modal>
    );
};
export default PrintBill;