import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description='Sobre nosotros, GuitarLA, tienda de música'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src='/img/nosotros.jpg'
            width={1000}
            height={800}
            alt='imagen sobre nosotros'
          />

          <div>
            <p>
              Sed blandit vitae ex vel pretium. Ut porta tortor nec dolor
              elementum, id elementum felis tincidunt. Nulla ac erat erat.
              Aenean maximus eleifend ipsum a rhoncus. Phasellus auctor volutpat
              egestas. Nam tincidunt, metus id imperdiet scelerisque, elit leo
              congue orci, vitae condimentum ligula neque quis nibh. Suspendisse
              pellentesque id magna eu sollicitudin. Proin a ullamcorper nisl,
              vestibulum aliquam felis.
            </p>
            <p>
              Nulla lacinia, tortor et dictum fringilla, risus lectus interdum
              quam, eget luctus nunc turpis sed mi. Etiam sed convallis justo.
              Sed tristique ex ac ligula congue, eu pharetra libero vestibulum.
              Integer rhoncus auctor quam, nec sollicitudin ligula rutrum id.
              Nullam non blandit ipsum. Nam hendrerit justo ut venenatis
              vehicula.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
