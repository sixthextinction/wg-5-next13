import Head from 'next/head';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script src="https://cdn.tailwindcss.com"></script>
			</Head>
			<main className="text-cyan-500 bg-zinc-900 min-h-screen justify-center">
				<Navbar />
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
