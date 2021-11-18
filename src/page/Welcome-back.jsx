import React from 'react'
import { Image, Layout, Typography, Form, Input, Button, Menu, Dropdown } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Paragraph from 'antd/lib/skeleton/Paragraph'
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components'

const { Link, Title } = Typography;

const Topbar = styled.p`
font-family: PNR;
        color: #FFF;
        background: #30aabc;
        text-align: center;
        padding: 4px 5px 5px;
        width: 100%; 
        white-space: nowrap;
        overflow: hidden; 
        font-size: 14px; 
`

const LogoImage = styled.img`
	width: 203px;
`
const LogoImage2 = styled.img`
	width: 330px;
	vertical-align: bottom;
`

const WelcomeTitle = styled.h4`
	font-family: SHSN;
	font-size: 30px;
	font-weight: 600;
	line-height: 36px;
	text-align: center;
	color: #03363d;
	margin: 60px auto 0;
`

const InputField = styled(Input )
	`width: 307px;
        height: 56px;
        border-radius: 5px;
        background-color: #ffffff;
        border: solid 1px #dddddd;
        font-family: DNLTR;
        font-size: 20px;
        color: #333333;
        display: block;
        padding-left: 20px;
        margin-top: 20px;
        outline: none;
`

const InputFieldPassword = styled(Input.Password )`
input{
	width: 307px;
height: 56px;
        border-radius: 5px;
        background-color: #ffffff;
        border: solid 1px #dddddd;
        font-family: DNLTR;
        font-size: 20px;
        color: #333333;
        display: block;
        padding-left: 20px;
        margin-top: 20px;
        outline: none;
		}
`

export default function WelcomeBack() {

	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div>
			<Topbar>Scheduled maintenance: Sun Nov 14 2021 08:00:00 GMT+0600 (Bangladesh Standard Time) – Sun Nov 14 2021 09:00:00 GMT+0600 (Bangladesh Standard Time). </Topbar>

			<Layout>
				<Content>
					<Link>
						<LogoImage alt="Zend" src="//d1eipm3vz40hy0.cloudfront.net/images/module-backgrounds/zendesk-chat-logo.svg" />
					</Link>
					<div>
						<LogoImage2 alt="Zend" src="//static-euc1.zopim.com/www_new/images/login/cups-and-cake@2x.png" />
					</div>
					<WelcomeTitle level={ 4 }>Welcome back</WelcomeTitle>

					<Form name="basic" labelCol={ { span: 8, } }
						wrapperCol={ {
							span: 16,
						} }
						initialValues={ {
							remember: true,
						} }
						onFinish={ onFinish }
						onFinishFailed={ onFinishFailed }
						autoComplete="off"
					>
						<Form.Item
							name="username"
							rules={ [
								{
									required: true,
									message: 'Please enter a valid email.',
								},
							] }
						>
							<InputField />
						</Form.Item>

						<Form.Item
							name="password"
							rules={ [
								{
									required: true,
									message: 'Please enter your password.',
								},
							] }
						>
							<InputFieldPassword />
						</Form.Item>

						<Form.Item
							wrapperCol={ {
								offset: 8,
								span: 16,
							} }
						>
							<Button type="primary" htmlType="submit">
								Sign In
							</Button>
						</Form.Item>
					</Form>
				</Content>
			</Layout>
		</div>
	)
}
