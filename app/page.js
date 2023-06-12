import Carousel from "@/components/Carousel";
import Hombre from "/public/images/hombre.jpg";
import Mujer from "/public/images/mujer.jpg";
import Ninos from "/public/images/ninos.jpg";
import Tomjeans from "/public/images/tommyjeans.jpg";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col w-full md:flex-row gap-1 justify-between">
        <Carousel imagen={Hombre} />
        <Carousel imagen={Mujer} />
        <Carousel imagen={Ninos} />
        <Carousel imagen={Tomjeans} />
      </div>
      <div className="container">
        <div className="m-16">
          <p className="text-2xl font-bold text-[rgb(0,23,79)] text-center">
            TOMMY HILFIGER PERU
          </p>
        </div>
        <div className="text-sm xs:flex-row gap-1 justify-between">
          <div className="grid grid-cols-2 gap-4">
            <div className=" p-4">
              <h2 className="text-ms text-[rgb(0,23,96)] text-justify">
                Descubre las últimas tendencias y deslumbra con la nueva
                colección de ropa, calzado, bolsos y accesorios para mujer y
                hombre de Tommy Hilfiger. La colección de hombre de Tommy
                Hilfiger es ideal para quienes buscan un look diferente.
                Combinando unos vaqueros con una camisa formal lograrás un
                conjunto de estilo clásico y casual, mientras que vistiendo uno
                de nuestros trajes a medida estarás más elegante que nunca. Para
                poner la guinda al pastel, añade un cinturón, un reloj o un par
                de zapatos para hombre. Nuestra colección para mujer también
                cuenta con una amplia variedad de diseños. Desde vestidos,
                bolsos y tacones ideales para una noche de fiesta hasta
                pantalones de chándal o zapatillas para una sesión nocturna de
                película, sofá y manta, necesites lo que necesites, lo
                encontrarás en nuestro sitio web.
              </h2>
            </div>
            <div className=" p-4">
              <h2 className="text-ms text-[rgb(0,23,96)] text-justify">
                Además, también podrás elegir entre una gran selección de ropa
                de punto, abrigos y chaquetas perfectos para abrigarte en
                cualquier estación. Viste a la última con nuestras novedades o
                aprovecha las ofertas para hacerte con esa prenda que quieres
                desde hace tanto tiempo. No importa si tu estilo es colorido,
                atrevido o minimalista, Tommy Hilfiger tiene algo para ti.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
