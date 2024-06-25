import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Ensure all scripts are loaded asynchronously */}
          <script
            src="https://unpkg.com/fsm-shell"
            async
          ></script>
          {/* or you can defer the script */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;