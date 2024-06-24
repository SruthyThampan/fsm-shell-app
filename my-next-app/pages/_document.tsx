import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { ShellSdk, SHELL_EVENTS } from 'fsm-shell';

export default function Document() {
  return (
    <Html>
      <Head>
        <Script src="https://unpkg.com/fsm-shell"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`FSM Shell script loaded correctly`)
          }
        />
        <script src="helpers.js"></script>



      </Head>
      <body>
        <script>

        </script>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  )
}