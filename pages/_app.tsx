import 'tailwindcss/tailwind.css';

interface IProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: IProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
