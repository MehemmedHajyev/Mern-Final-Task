import { Card, Col, Row } from 'antd';
import React from 'react';

const AdminCard: React.FC = () => (
    <div className="site-card-wrapper flex h-screen">
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    </div>
);

export default AdminCard;