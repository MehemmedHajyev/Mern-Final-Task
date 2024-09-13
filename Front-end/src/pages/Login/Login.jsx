import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
                <Form
                    name="login"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="danger" htmlType="submit" className="w-full mt-2 bg-red-800 hover:bg-red-600 text-white ">
                            Log in
                        </Button>


                        <Button
                            onClick={() => navigate('/register')}
                            type="danger" className="w-full mt-2 bg-red-800 hover:bg-red-600 text-white"
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
