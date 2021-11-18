import Slider from "@ant-design/react-slick";
import { Button, Space } from "antd";
import React, { useState } from "react";

export default function CustomSpace() {
	const [size, setSize] = useState(12);

	return (
		<div>
			<Slider value={size} onChange={(value) => setSize(value)} />
			<br />
			<br />
			<br />

			<Space size={size}>
				<Button type="primary">Primary</Button>
				<Button>Default</Button>
				<Button type="dashed">Dashed</Button>
				<Button type="link">Link</Button>
			</Space>
		</div>
	);
}
