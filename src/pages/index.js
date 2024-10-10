import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i02 from '../../public/landing/01.png';
import i03 from '../../public/landing/08.png';
import i04 from '../../public/landing/03.png';
import i05 from '../../public/landing/05.png';
import i06 from '../../public/landing/06.png';
import i13 from '../../public/landing/07.png';
import it01 from '../../public/landing/t01.png';
import it02 from '../../public/landing/t02.png';
import it03 from '../../public/landing/t03.png';
import ico01 from '../../public/landing/icons/ico-botella.png';
import ico02 from '../../public/landing/icons/ico-botellas-5.png';
import ico03 from '../../public/landing/icons/ico-botellas-caja.png';
import ico04 from '../../public/landing/icons/ico-etiqueta.png';
import ico05 from '../../public/landing/icons/ico-crecimiento.png';
import ico06 from '../../public/landing/icons/ico-entrega.png';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('fullScroll');
  const [bgImg, setBgImg] = useState('00');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  useEffect(() => {
    const imgArray = ['00', '05', '02'];
    const idx = Math.floor(Math.random() * imgArray.length);
    setBgImg(imgArray[idx]);
  }, [bgImg]);
  console.log(bgImg);

  const cta = {
    main: 'Mándanos un WhatsApp',
    // description: 'Solicita una asesoría de nuestro ingeniero sin costo',
    description: 'Fortalece la salud digestiva y el sistema inmunológico de los animales.',
  };

  return (
    <>
      <section
        className={`relative min-h-[80vh] w-full flex flex-col justify-center items-center bg-cover bg-bottom`}
        style={{backgroundImage: `url(/landing/${bgImg}.png)`}}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 z-10"/>

        <div className="container w-full text-center md:text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-medium ft-9 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Reduce las enfermedades de tu ganado bovino, porcino o de tus aves en 72 horas y aumenta su peso vivo al menos
            un 10%
          </h1>
          <p className="md:w-2/3 ft-2 font-medium md:text-left my-12">{cta.description}</p>
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left mb-12">Conoce todos los beneficios de Animalia</p>
          </div>
        </div>
        <div className="absolute flex flex-col justify-center items-center text-white bottom-8 mt-8 md:mt-20 z-10">
          <p className="ft-1">Sigue leyendo</p>
          <div className="animate-bounce">
            <div className="ft-3 material-icons mx-auto">expand_more</div>
          </div>
        </div>
        <div className="w-full h-full absolute bg-black/30 -z-1"/>
      </section>

      <section className="reading-container mb-16">
        <div className="flex border-b border-brand-1 pb-4 mb-8">
          <span className="material-icons mr-2 -ft-2">timer</span>
          <p className="-ft-2" style={{marginBlockEnd: 0}}>Conoce los principales beneficios en 4 min</p>
        </div>
        <p className="ft-2">
          No importa si es bovino, porcino o avícola, este negocio es caro y más si se te enferman.
          <br/><br/>
          Vi como mis colegas probaban suplementos, dietas especiales y es que servía… a medias o de plano
          perdían su ganado.
          <br/><br/>
          Decidí que no iba a ver como mis animales se morían y mi dinero se iba a la basura y creé un aditivo orgánico
          de absorción efectiva y alivio rápido para el ganado.
          <br/><br/>
          Para que tengas animales más sanos, más ganancias y clientes felices.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('story')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Garantías"
        title="Ver el ganado sano de nuestros clientes es nuestra mayor satisfacción y garantía"
        image={i13}
      />
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch justify-center md:mx-52 mx-8 gap-8">
          <div className="relative flex flex-col p-12 flex-grow bg-brand-3 rounded-2xl border-2 border-brand-1 mt-2">
            <p className="md:absolute top-[-2.5rem] inset-x-0.5 w-max mx-auto ft-5 bg-neutral-700 rounded-lg py-4 px-6">
              ⭐️⭐️⭐️⭐️⭐️
            </p>
            <p className="mt-12 ft-1 flex-grow">Desde que comenzamos a usar Animalia, hemos visto una mejora en la salud
              de todo el ganado. Las enfermedades bajaron y nuestros costos de alimento se redujeron significativamente.
              No podríamos estar más contentos con los resultados.</p>
            <div className="flex items-center justify-start mt-8 border-t border-brand-1 pt-6">
              <div className="relative rounded-full h-[6rem] w-[6rem] overflow-hidden mr-8">
                <Image src={it01} layout="fill" objectFit="contain"/>
              </div>
              <p className="font-bold ft-1">Juan <br/>Ganadero en Nuevo León</p>
            </div>
          </div>
          <div className="relative flex flex-col p-12 flex-grow bg-brand-3 rounded-2xl border-2 border-brand-1 mt-2">
            <p className="md:absolute top-[-2.5rem] inset-x-0.5 w-max mx-auto ft-5 bg-neutral-700 rounded-lg py-4 px-6">
              ⭐️⭐️⭐️⭐️⭐️
            </p>
            <p className="mt-12 ft-1 flex-grow">Este producto revolucionó como estábamos manejando la nutrición de
              nuestros cerdos. Los ciclos de engorda son más cortos y cada vez se nos mueren menos. Es una inversión que de
              verdad vale la pena.</p>
            <div className="flex items-center justify-start mt-8 border-t border-brand-1 pt-6">
              <div className="relative rounded-full h-[6rem] w-[6rem] overflow-hidden mr-8">
                <Image src={it02} layout="fill" objectFit="cover"/>
              </div>
              <p className="font-bold ft-1">María <br/>Porcicultora en Jalisco</p>
            </div>
          </div>
          <div className="relative flex flex-col p-12 flex-grow bg-brand-3 rounded-2xl border-2 border-brand-1 mt-2">
            <p className="md:absolute top-[-2.5rem] inset-x-0.5 w-max mx-auto ft-5 bg-neutral-700 rounded-lg py-4 px-6">
              ⭐️⭐️⭐️⭐️⭐️
            </p>
            <p className="mt-12 ft-1 flex-grow">Había perdido casetas enteras de pollos y gallinas por una que se enfermaba.
              Le tenía poca fe a Animalia, pero después de animarme a probarlo. Salvé una caseta
              entera de pollos, sin palabras, el mejor aditivo para aves.</p>
            <div className="flex items-center justify-start mt-8 border-t border-brand-1 pt-6">
              <div className="relative rounded-full h-[6rem] w-[6rem] overflow-hidden mr-8">
                <Image src={it03} layout="fill" objectFit="contain"/>
              </div>
              <p className="font-bold ft-1">Carlos <br/>Avicultor en Sonora</p>
            </div>
          </div>

        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="¿Por qué Animalia no es como los otros aditivos que has probado?"
        image={i02}
      />
      <section className="my-16">
        <p className="reading-container">
          Ya te conté la historia de mis colegas perdiendo su dinero,
          ahora te voy a contar la mía.
          <br/><br/>
          Andaba perdiendo casi todo mi ganado avícola, ya sabes que una se enferma y todas caen como fichas de dominó
          y para salvarlas quién sabe que tantos aditivos usé que ni sirvieron, solo gasté un friego de
          lana y más de la mitad se me murió.
          <br/><br/>
          Y bueno,
          como nada sirvió, me enojé, perdí dinero y animales,
          pues me aferré y me tuve que inventar un producto perro.
          <br/>
          <b>Estas son 3 razones para usar Animalia en tu ganado:</b>
        </p>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="text-brand-2 mb-8">Controla y reduce enfermedades en 72 horas</h3>
            <p className="mb-8">Promueve una salud digestiva robusta y fortalece el sistema inmunológico, reduciendo la
              incidencia de enfermedades.</p>
          </div>
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="text-brand-2 mb-8">Menores costos de alimentación</h3>
            <p className="mb-8">Mejora la eficiencia en la conversión alimenticia en al menos un 10%, lo que se traduce
              en menores costos de alimentación</p>
          </div>
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="text-brand-2 mb-8">Acorta los ciclos de engorda</h3>
            <p className="mb-8">Al ser un promotor natural del crecimiento, ayuda a que tus animales alcancen el peso
              ideal más rápidamente, acortando los ciclos de engorda y aumentando tus ganancias</p>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Precio"
        title="Deja de gastar tanta lana en el coctel de productos que le avientas a tus cultivos"
        image={i03}
      />
      <section className="container my-16 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full flex flex-col bg-white shadow-md rounded-2xl overflow-hidden">
            <div className="relative flex justify-center p-16">
              <Image src={ico01}/>
            </div>
            <div className="flex flex-col px-4 py-8 flex-grow">
              <p className="text-center"><span className="ft-4 font-bold">$450 mxn</span> / litro</p>
              <p className="text-center -ft-1">Rinde para 2,800 litros de agua</p>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white shadow-md rounded-2xl overflow-hidden">
            <div className="relative flex justify-center p-16">
              <Image src={ico02}/>
            </div>
            <div className="flex flex-col px-4 py-8 flex-grow">
              <p className="text-center"><span className="ft-4 font-bold">$3,000 mxn</span> / 10 litros</p>
              <p className="text-center -ft-1">Rinde 28,000 litros de agua</p>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white shadow-md rounded-2xl overflow-hidden">
            <div className="relative flex justify-center p-16">
              <Image src={ico03}/>
            </div>
            <div className="flex flex-col px-4 py-8 flex-grow">
              <p className="text-center"><span className="ft-4 font-bold">$5,500 mxn</span> / 20 litros</p>
              <p className="text-center -ft-1">Rinde 56,000 litros de agua</p>
            </div>
          </div>
        </div>
        <div className="reading-container">
          <p className="ft-2 text-center">
            Una inversión que además de curar a tu ganado y mantenerlo sano,
            aumentara su peso vivo al menos 10%,
            fortalecerá su sistema inmunológico
            y mejorará la salud digestiva de los animales.
          </p>
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a onClick={() => setLastClick('price')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Proceso"
        title="¿Qué esperar al aplicar Animalia?"
        image={i04}
      />
      <section className="reading-container my-16">
        <p className="ft-2">
          <b>¿Cuántas veces te has preguntado si hay una solución eficaz para mejorar la salud de tus animales y reducir
            los costos?</b>
          <br/>
          Ahi te va, desde la primera consulta hasta la aplicación en tu ganado.
        </p>
        <ol className="space-y-4">
          <li className="ft-1">Empezamos con una llamada o visita para hacer un diagnóstico de tu ganado.</li>
          <li className="ft-1">Te asesoramos sobre la dosis y el plan de administración adecuado.</li>
          <li className="ft-1">Verás cómo en 72 horas la salud digestiva de tus animales mejora y su sistema
            inmunológico se fortalece.
          </li>
          <li className="ft-1">Gracias a nuestra experiencia, garantizamos que verás resultados en menos de 72 horas.
          </li>
          <li className="ft-1">Reduces tus costos operativos y aseguras que tus animales crezcan de manera natural y
            saludable.
          </li>
          <li className="ft-1">Realizamos un acompañamiento para asegurar los mejores resultados.</li>
        </ol>
        <p className="ft-2">No solo atacamos un problema, sino que te proporcionamos una solución sostenible para
          el futuro.</p>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('process')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      {/*<Blockbuster*/}
      {/*  overhead="Extras"*/}
      {/*  title="3 beneficios a tu medida"*/}
      {/*  image={i05}*/}
      {/*/>*/}
      {/*<section className="container my-16">*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">*/}
      {/*    <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">*/}
      {/*      <div className="relative w-2/3 pt-[100%]">*/}
      {/*        <Image src={ico04} layout="fill" objectFit="contain"/>*/}
      {/*      </div>*/}
      {/*      <h4 className="text-center my-8">Recibe descuentos a partir de la compra de 5 lts</h4>*/}
      {/*    </div>*/}
      {/*    <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">*/}
      {/*      <div className="relative w-2/3 pt-[100%]">*/}
      {/*        <Image src={ico05} layout="fill" objectFit="contain"/>*/}
      {/*      </div>*/}
      {/*      <h4 className="text-center my-8">Resultados visibles en 48 hrs</h4>*/}
      {/*    </div>*/}
      {/*    <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">*/}
      {/*      <div className="relative w-2/3 pt-[100%]">*/}
      {/*        <Image src={ico06} layout="fill" objectFit="contain"/>*/}
      {/*      </div>*/}
      {/*      <h4 className="text-center my-8">Envío gratis a toda la República Mexicana</h4>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="reading-container">*/}
      {/*    <div className="flex flex-col justify-center items-center">*/}
      {/*      <Link href="#contact">*/}
      {/*        <a onClick={() => setLastClick('extras')} className="button mb-4">{cta.main}</a>*/}
      {/*      </Link>*/}
      {/*      <p className="-ft-2 text-center">{cta.description}</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}


      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i06}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-4 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Listo, es momento de contactar a uno de nuestros técnicos
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Ya llegaste hasta acá, <br/>
                ya le dedicaste unos minutos de tu valioso tiempo a saber como puedes curar tus animales en tiempo
                exprés.
                <br/><br/>
                Regálanos unos datos y mándanos un WhatsApp.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
