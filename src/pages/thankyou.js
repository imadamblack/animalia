import { info } from '../../info';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center py-20 px-0">
      <div className="container md:w-1/2 flex flex-col items-center">
        <h2 className="ft-8 text-center">
          Gracias por contactarnos y sumarte al cambio de una agricultura sustentable.
        </h2>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center ft-4 mt-16">Si sólo quieres probar Animalia</p>
          <a
            className="button-secondary !bg-brand-3 ft-4 flex justify-center items-center mx-12"
            href={`https://aditivoanimalia.com/tienda`}
            target="_blank"
          >
            Compra en línea<span className="ml-2 material-icons">arrow_forward</span>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          <p className="text-center ft-4 mt-16">O continúa a WhatsApp si te interesa distribuir o requieres más información</p>
          <a
            className="button !bg-brand-5 ft-4 flex justify-center items-center mt-6"
            href={`https://wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`}
            target="_blank"
          >
            <span className="material-icons">arrow_forward</span>Da click aquí<span
            className="text-white material-icons">arrow_back</span>
          </a>
        </div>

      </div>
    </section>
  );
}
