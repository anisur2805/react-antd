import React from 'react';
import { Button, Col, Image, Row, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const SubTitle = styled.p`
	color: rgb(3, 54, 61);
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 1px;
	margin-bottom: 16px;
	text-transform: uppercase;
	text-align: left;
`
const MainTitle = styled.h1`
	    color: rgb(3, 54, 61);
        font-size: 72px;
        font-weight: 700;
        line-height: 80px;
        margin-bottom: 52px;
		text-align: left;
`
const FullHeightRow = styled.div`
	height: 100vh
`

const CustomRow = styled(Row)`
	height: 100vh
`

export default function Welcome() {
	return (
		<FullHeightRow>
			<CustomRow className="h-100" justify="center" align="middle">
				<Col span={ 9 } >
					<SubTitle>THANKS FOR VERIFYING YOUR EMAIL</SubTitle>
					<MainTitle>Welcome to the Zendesk Suite</MainTitle>
					<Button size="large" type="primary">Get Started</Button>
				</Col>
				<Col span={ 7 }>
					<Image
						width={ 200 }
						src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
					/>
				</Col>
			</CustomRow>
		</FullHeightRow>
	)
}
