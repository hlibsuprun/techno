import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['cyrillic'],
	variable: '--font-roboto',
	weight: ['100', '300', '400', '500', '700', '900']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<main className='min-h-screen'>{children}</main>
			</body>
		</html>
	)
}
