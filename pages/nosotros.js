import Link from "next/link"
import Layout from "../components/layout"

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <Link href='/'>Ir a Inicio</Link>
    </Layout>
  )
}
