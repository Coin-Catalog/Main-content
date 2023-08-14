import Head from 'next/head'
import Link from 'next/link'

import Footer from '../lib/components/footer'

/*
The form once I want to get it working
<form action="https://send.pageclip.co/Jq6YIZP7IxWfD6zZwI7jyUCBByrGtaFq/who-to-blame" class="pageclip-form" method="post">
  <select name="name" value="Roscoe Jones" >
    <option value="Ethan">Ethan<br /><Image src="/images/ethan-pfp.png" alt="Ethan's pfp" width="500" height="500" /></option>
  </select>

  <button type="submit" class="pageclip-form__submit">
    <span>Blame</span>
  </button>
</form>
*/

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Page not found</title>

        <link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/Coin-Catalog/Main-content/main/public/images/Favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://raw.githubusercontent.com/Coin-Catalog/Main-content/main/public/images/Favicon.png" />
      </Head>
      
      <h1>404 Page not found</h1>
      <p>Good job you wondered out of the inteded area! The page you are looking for does not exist.</p>

      <p>Go back to our <Link href="/" className="noPadding">Home page</Link>.</p>

      <br />
      <hr />
      <br />

      <Footer />
    </>
  )
}