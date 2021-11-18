import { TestButton } from "./Button.style";

export default function ButtonComponent() {
	return(
		<div>
			<TestButton backgroundColor="#f00">This is a Test Button</TestButton>
			<TestButton>This is a Test Button</TestButton>
		</div>
	)
}