import { useEffect } from "react";
import "./index.css";

const Home = () => {
  const title = "Inicio";

  useEffect(() => {
    const header = document.querySelector("#mobile-header");
    if (header) header.textContent = title;
  }, []);

  return (
    <section id="home">
      <h1 id="home-header">{title}</h1>
      <section aria-label="">
        <h2>Sobre el sistema</h2>
        <p>
          EL objetivo es poder detectar, comunicar y resolver problemas que se
          encuentran a la vista en nuestros barrios para evitar posibles
          inundaciones. Para eso buscamos que la comunidad cada vez que
          encuentra un problema lo denuncia con la ubicación exacta y mayor
          cantidad de detalle, asi se resuelve lo antes posible y evitar un
          nuevo desastre.
        </p>
      </section>
      <section>
        <h2>Inundación de La Plata - 2013</h2>
        <section>
          <h3>¿Que sucedió?</h3>
          <p>
            La inundación de la ciudad de La Plata fue un evento meteorológico
            extremo que afectó al noroeste de la Provincia de Buenos Aires,
            entre los días 2 y 3 de abril de 2013. Los registros de
            precipitaciones marcaron un record histórico para el mes de abril,
            tanto en la capital argentina, con más de 155 mm acumulados durante
            la medianoche y las 07:00 del 2 de abril, como en la capital
            bonaerense, en donde cayeron 392 mm medidos en el pluviómetro de la
            Universidad Nacional de La Plata durante toda la jornada del 2 de
            abril y 196 mm durante todo el evento en el observatorio del
            aeropuerto local.
          </p>
        </section>
        <section>
          <h3>Causas</h3>
          <p>
            La causa principal de las inundación fue la falta de obras de
            desagües. Como causas específicas se pueden observar:
          </p>
          <ul>
            <li>
              Falta de obras hidráulicas, los canales de desagües no están al
              100 % operativos y aun si lo estuvieran no serían suficientes.
            </li>
            <li>Cambio climático.</li>
            <li>Falta de conciencia ambiental.</li>
            <li>Basura y otros objetos que taparon las canaletas y desagües</li>
          </ul>
          <p>
            Esta visión de la vulnerabilidad se ha plasmado en una enunciación,
            que es la más aceptada en la actualidad, y que afirma que los
            desastres son construcciones sociales. Si bien existen varias
            clasificaciones de vulnerabilidad, a los fines de la presente
            investigación hemos agrupado las respuestas asociadas a los
            siguientes tipos de vulnerabilidad: de índole natural, del uso del
            suelo y el ambiente construido, política, socioeconómica y de la
            infraestructura y los servicios. Varios son los factores que -en
            opinión de los actores entrevistados causaron la inundación del 2 de
            abril de 2013 en la región. La lluvia extrema, caracterizada como
            “torrencial”, “algo inédito” y hasta como fenómeno “excéntrico”,
            vinculado con el cambio climático, se asocia a diversas situaciones
            de vulnerabilidad, entendida esta como la predisposición o
            propensión de elementos de la sociedad (seres humanos, sus medios de
            vida y sus soportes infraestructuras) de sufrir daños y pérdidas.
          </p>
          <p>
            En el caso de la vulnerabilidad natural, La Plata cuenta con una red
            de arroyos que la transforman en{" "}
            <q>
              una ciudad vulnerable siempre; ocupamos más el terreno, llueve más
              y es un territorio que históricamente, es naturalmente riesgoso
              para la urbanización
            </q>{" "}
            (AVAT). Berisso y Ensenada coinciden en afirmar que la ciudad de La
            Plata presenta una cota más alta con relación a ellos, lo que
            ocasionó que el agua llegara a ambos municipios. La vulnerabilidad
            política se manifiesta en la forma de gestionar el territorio por
            parte de los organismos estatales -ausencia de decisiones políticas
            anticipadoras, accionar compartimentado de los organismos, falta de
            planes de contingencia, inadecuado Código de Ordenamiento Urbano (de
            La Plata), entre los más mencionados. La vulnerabilidad de la
            infraestructura y los servicios, los funcionarios, las asambleas y
            los movimientos sociales y para el caso específico de La Plata,
            coinciden en afirmar la falta de obras de infraestructura
            hidráulica, especialmente referidas a entubamiento de los arroyos y
            cauces de agua. Por su parte y en el caso específico de las
            Asambleas de Los Hornos se suma, además, la necesidad de zanjeos y
            cloacas. Vulnerabilidad del uso del suelo y del territorio
            construido y en especial en el Municipio de La Plata, los
            testimonios la asocian al crecimiento urbano sin planificación ya
            que la especulación inmobiliaria motivó el crecimiento “en altura”
            en el centro y la construcción de “barrios privados” (countries).
            Asimismo el crecimiento productivo trajo como consecuencia que
            suelos permeables se impermeabilizaran.
          </p>
          <p>
            La Universidad Nacional de La Plata se presenta como un actor
            aglutinador, es decir, sin ser necesariamente central, ocupa una
            posición estratégica por su actividad; las líneas de investigación,
            los proyectos de extensión, de servicios a terceros. Se destaca su
            rol mediador entre los diferentes tipos de actores en el Consejo
            Social.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Home;
