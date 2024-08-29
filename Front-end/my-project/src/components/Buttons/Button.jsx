import { Button } from 'antd';

import PropTypes from 'prop-types';
const CardButton = ({ content }) => {
    return (
        <Button type="danger" htmlType="submit" className='w-full bg-[#f34f3f] hover:bg-[#0b2c3d] text-stone-50 mt-4'>
            {content ? content : "Submit"}
        </Button>)
}




// PropTypes tanımları
CardButton.propTypes = {
    content: PropTypes.string
};


export default CardButton