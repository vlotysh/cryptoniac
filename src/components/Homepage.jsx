import React from "react";
import millify from "millify";
import {Typography, Row, Col, Statistic} from "antd";
import {Link} from "react-router-dom";
import {Counter} from "../features/counter/Counter";

const {Title}  = Typography;

const Homepage = () => {
    return (
        <>
            <Title level={2} className="heading">
                Cryptoniac crypto stats
            </Title>
            <Counter />
            <Row>
                <Col span={12}>
                    <Statistic title="Total cryptocurrencies" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market cap" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value="5" />
                </Col>
            </Row>
        </>
    )
}

export default Homepage;