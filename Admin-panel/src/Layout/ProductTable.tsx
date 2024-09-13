import { Space, Table, Button, Popconfirm, Form, Input, Modal, Image } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom'

interface DataType {
    key: string;
    name: string;
    category: string;
    price: number;
    sizes: string[];
    images: string[];
    description: string;
    sku: string;
    review: number;
}

const EditableContext = React.createContext<any>(null);

const EditableRow: React.FC = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

// const EditableCell: React.FC<any> = ({
//     title,
//     editable,
//     children,
//     dataIndex,
//     record,
//     handleSave,
//     ...restProps
// }) => {
//     const [editing, setEditing] = useState(false);
//     const inputRef = useRef<Input>(null);
//     const form = useContext(EditableContext);

//     const toggleEdit = () => {
//         setEditing(!editing);
//         form.setFieldsValue({ [dataIndex]: record[dataIndex] });
//     };

//     const save = async () => {
//         try {
//             const values = await form.validateFields();
//             toggleEdit();
//             handleSave({ ...record, ...values });
//         } catch (errInfo) {
//             console.log('Save failed:', errInfo);
//         }
//     };

//     let childNode = children;

//     if (editable) {
//         childNode = editing ? (
//             <Form.Item
//                 style={{ margin: 0 }}
//                 name={dataIndex}
//                 rules={[
//                     {
//                         required: true,
//                         message: `${title} is required.`,
//                     },
//                 ]}
//             >
//                 <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//             </Form.Item>
//         ) : (
//             <div
//                 className="editable-cell-value-wrap"
//                 style={{ paddingRight: 24 }}
//                 onClick={toggleEdit}
//             >
//                 {children}
//             </div>
//         );
//     }

//     return <td {...restProps}>{childNode}</td>;
// };

const MyTable: React.FC = () => {
    const [data, setData] = useState<DataType[]>([
        {
            key: '1',
            name: 'Product 1',
            category: 'Category 1',
            price: 100,
            sizes: ['S', 'M', 'L'],
            images: ['https://example.com/image1.png', 'https://example.com/image2.png'],
            description: 'This is a description.',
            sku: 'SKU001',
            review: 4,
        },
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    const handleDelete = (key: string) => {
        const newData = data.filter(item => item.key !== key);
        setData(newData);
    };

    const handleCreate = (values: Omit<DataType, 'key'>) => {
        const sizesArray = values.sizes.split(',').map((size: string) => size.trim());
        const imagesArray = values.images.split(',').map((image: string) => image.trim());

        const newData = [
            ...data,
            {
                key: `${data.length + 1}`,
                ...values,
                sizes: sizesArray,
                images: imagesArray,
            },
        ];
        setData(newData);
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSave = (row: DataType) => {
        const newData = [...data];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
    };

    const handleEdit = () => {
        navigate(`/editProduct`);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            editable: true,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            editable: true,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            editable: true,
        },
        {
            title: 'Sizes',
            dataIndex: 'sizes',
            key: 'sizes',
            editable: true,
            render: sizes => sizes.join(', '),
        },
        {
            title: 'Images',
            dataIndex: 'images',
            key: 'images',
            editable: true,
            render: images => (
                <Space>
                    {images.map((image, index) => (
                        <Image key={index} width={50} src={image} alt={`product-image-${index}`} />
                    ))}
                </Space>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            editable: true,
        },
        {
            title: 'SKU',
            dataIndex: 'sku',
            key: 'sku',
            editable: true,
        },
        {
            title: 'Review',
            dataIndex: 'review',
            key: 'review',
            editable: true,
            render: review => `${review}/5`,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => handleEdit(record)}>Edit</a>
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

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: handleSave,
            }),
        };
    });

    return (
        <>
            <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
                Create
            </Button>
            <Table
                components={{
                    body: {
                        row: EditableRow,
                        // cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
            />

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
                    <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="price" label="Price" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="sizes" label="Sizes" rules={[{ required: true }]}>
                        <Input placeholder="S, M, L" />
                    </Form.Item>
                    <Form.Item name="images" label="Images" rules={[{ required: true }]}>
                        <Input placeholder="image1.png, image2.png" />
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
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default MyTable;
