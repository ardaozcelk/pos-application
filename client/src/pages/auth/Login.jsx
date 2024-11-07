import { Button, Form, Input, Carousel, Checkbox, message } from "antd"
import { Link } from "react-router-dom"
import AuthCarousel from "../../components/auth/AuthCarousel"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });

            const user = await res.json();

            if (res.status === 200) {
                localStorage.setItem("postUser", JSON.stringify({
                    username: user.username,
                    email: user.email
                }))
                message.success("Giriş İşlemi Başarılı.");
                navigate("/");
                setLoading(false);
            } else if (res.status === 404) {
                message.error("Kullanıcı Bulunamadı.");
                setLoading(false);
            } else if (res.status === 403) {
                message.error("Şifre Hatalı!");
                setLoading(false);
            }

        } catch (error) {
            message.error("Bir şeyler yanlış gitti.");
            console.log(error);
            setLoading(false);
        }
    }


    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 w-full xl:w-2/5 lg:w-1/2 flex flex-col h-full justify-center relative">
                    <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
                    <Form layout="vertical" onFinish={onFinish} initialValues={{
                        remember: false
                    }}>
                        <Form.Item label="E-mail" name={"email"} rules={[{
                            required: true,
                            message: "E-mail Alanı Boş Bırakılamaz!"
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
                            <Button type="primary" htmlType="submit" className="w-full" size="large"
                                loading={loading}>Giriş Yap</Button>
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