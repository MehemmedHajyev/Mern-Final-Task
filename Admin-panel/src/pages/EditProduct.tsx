// EditProduct.tsx
import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';


interface EditProductProps {
    data: any[];
    updateData: (key: string, newData: any) => void;
}

const EditProduct: React.FC<EditProductProps> = ({ data }) => {
    const { key } = useParams<{ key: string }>();
    // const navigate = useNavigate();
    const [form] = Form.useForm();
    const [product, setProduct] = useState<any>();

    // useEffect(() => {
    //     const productToEdit = data.find(item => item.key === key);
    //     if (productToEdit) {
    //         setProduct(productToEdit);
    //         form.setFieldsValue(productToEdit);
    //     }
    // }, [key, data, form]);

    const onFinish = () => {
        // updateData(key, values);
        // navigate('/');
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <Form form={form} onFinish={onFinish}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="Price" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="sizes" label="Sizes" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="images" label="Images" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="sku" label="SKU" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="review" label="Review" rules={[{ required: true }]}>
                    <Input type="number" min={0} max={5} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditProduct;
