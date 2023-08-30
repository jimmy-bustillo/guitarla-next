import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de Musica, venta de guitarras y mas'}
      >
        <h1>Hola mundo desde Next</h1>
        <Link href='/nosotros'>Ir a Nosotros</Link>
      </Layout>
    </>
  )
}
