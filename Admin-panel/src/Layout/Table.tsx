import { Space, Table, Button, Popconfirm, Form, Input, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}



const initialData: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
];

const MyTable: React.FC = () => {
    const [data, setData] = useState<DataType[]>(initialData);
    const [isModalVisible, setIsModalVisible] = useState(false);


    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => handleEdit()}>Edit</a>
                    <Popconfirm
                        title="Are you sure you want to delete?"
                        onConfirm={() => handleDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];


    const handleDelete = (key: string) => {
        const newData = data.filter(item => item.key !== key);
        setData(newData);
    };

    const handleCreate = (values: Omit<DataType, 'key'>) => {
        const newData = [...data, { key: `${data.length + 1}`, ...values }];
        setData(newData);
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
                Create
            </Button>
            <Table columns={columns} dataSource={data} />

            <Modal
                title="Create New Entry"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form onFinish={handleCreate}>
                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="age" label="Age" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    {/* <Form.Item name="tags" label="Tags" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item> */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default MyTable;
