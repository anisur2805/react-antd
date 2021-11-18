
import {Spin, Switch, Alert} from 'antd'
import { useState } from 'react'

export default function StyledSpin() {
	const [loading, setLoading] = useState(false)
	
	const toggle = () => {
		setLoading(!loading);
	}
	return (
		<div>
			<Spin spinning={loading}>
				<Alert message="This is a message" description="Hello from Spinner" type="info" />
			</Spin>
			
			<div style={{marginTop: 10}}>
				Loading State: <Switch checked={loading} onChange={toggle} />
			</div>
		</div>
	)
}
