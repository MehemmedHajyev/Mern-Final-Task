import { Select } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const CardSelect = () => (
    <>
        <Select
            defaultValue="lucy"
            style={{
                width: "100%",
                marginBottom: 10,
            }}
            onChange={handleChange}
            options={[
                {
                    value: 'jack',
                    label: 'Jack',
                },
                {
                    value: 'lucy',
                    label: 'Lucy',
                },
                {
                    value: 'disabled',
                    disabled: true,
                    label: 'Disabled',
                },
                {
                    value: 'Yiminghe',
                    label: 'yiminghe',
                },
            ]}
        />

    </>
);
export default CardSelect;