import { useEffect } from 'react';
import $ from 'jquery';
const Worksheets = () => {
	useEffect(() => {
		if (window) {
			frame.addEventListener('load', (ev) => {
				const new_style_element = document.createElement('style');
				new_style_element.textContent = 'body { background-color: white; }';
				ev.target.contentDocument.head.appendChild(new_style_element);
			});
		}
	});
	return (
		<div
			style={{
				margin: 0,
				padding: 0,
				height: '100vh',
				overflow: 'hidden',
				overFloY: 'hidden',
				backgroundColor: 'white !important',
			}}
		>
			<iframe
				id='frame'
				src='http://mathsanswers.org.uk/gcse/'
				width='100%'
				style={{
					// marginTop: '100px',
					background: 'white !important',
					border: 'none',
					width: '100%',
					height: 'calc(100% + 100px)',
					position: 'absolute',
				}}
				// srcDoc='<footer><h1>Hello</h1></footer>'
				// sandbox='allow-scripts allow-modal'
				loading='eager'
			></iframe>
		</div>
	);
};

export default Worksheets;
