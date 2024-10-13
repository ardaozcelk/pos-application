import { Button, Form, Input, Carousel, Checkbox } from "antd"
import { Link } from "react-router-dom"
import AuthCarousel from "../../components/auth/AuthCarousel"

const Login = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 w-full xl:w-2/5 lg:w-1/2 flex flex-col h-full justify-center relative">
                    <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
                    <Form layout="vertical">
                        <Form.Item label="Kullanıcı Adı" name={"username"} rules={[{
                            required: true,
                            message: "Kullanıcı Adı Alanı Boş Bırakılamaz!"
                        }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Şifre" name={"password"} rules={[{
                            required: true,
                            message: "Şifre Alanı Boş Bırakılamaz!"
                        }]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name={"remember"} valuePropName="checked">
                            <div className="flex justify-between items-center">
                                <Checkbox>
                                    Remember me
                                </Checkbox>
                                <Link>Forgot Password</Link>
                            </div>

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full" size="large">Giriş Yap</Button>
                        </Form.Item>
                    </Form>
                    <div className="flex justify-center mt-auto absolute left-0 bottom-10 w-full">
                        Henüz bir hesabınız yok mu ? &nbsp;<Link to={"/register"} className="text-blue-600">Şimdi Kayıt Ol!</Link>
                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-1/2 md:w-1/2 hidden md:flex min-w-[500px] bg-[#6c63ff]">
                    <div className="w-full h-full flex items-center">
                        <div className="w-full">
                            <Carousel autoplay className="h-full px-6">
                                <AuthCarousel img="/images/responsive.svg" title="Responsive" desc="Tüm Cihaz Boyutlarıyla Uyumluluk" />
                                <AuthCarousel img="/images/statistic.svg" title="İstatistikler" desc="Geniş Tutulan İstatistikler" />
                                <AuthCarousel img="/images/customer.svg" title="Müşteri Memnunuiyeti" desc="Deneyim Sonunda Üründen Memnun Müşteriler" />
                                <AuthCarousel img="/images/admin.svg" title="Yönetici Paneli" desc="Tek Yerden Yönetim" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login