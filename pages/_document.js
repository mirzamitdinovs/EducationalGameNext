import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charset='utf-8' />
				<meta httpEquiv='x-ua-compatible' content='ie=edge' />
				<title>Zoomy - E-learning HTML5 Template</title>
				<meta
					name='keywords'
					content='online education, e-learning, coaching, education, teaching, learning'
				/>
				<meta
					name='description'
					content='Zoomy is a e-learnibg HTML template for all kinds of education, coaching, online education website'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />

				<link rel='manifest' href='site.html' />
				<link
					rel='shortcut icon'
					type='image/x-icon'
					href='assets/img/favicon.png'
				/>
				<link rel='stylesheet' href='assets/css/bootstrap.min.css' />
				<link rel='stylesheet' href='assets/css/owl.carousel.min.css' />
				<link rel='stylesheet' href='assets/css/animate.css' />
				<link rel='stylesheet' href='assets/css/magnific-popup.css' />
				<link rel='stylesheet' href='assets/css/all.min.css' />
				<link rel='stylesheet' href='assets/css/flaticon.css' />
				<link rel='stylesheet' href='assets/css/font.css' />
				<link rel='stylesheet' href='assets/css/metisMenu.css' />
				<link rel='stylesheet' href='assets/css/nice-select.css' />
				<link rel='stylesheet' href='assets/css/slick.css' />
				<link rel='stylesheet' href='assets/css/spacing.css' />
				<link rel='stylesheet' href='assets/css/main.css' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
