import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Cómo se aplica el aditivo?",
      a: "El aditivo se agrega directamente a los bebederos de los animales siguiendo las instrucciones proporcionadas."
    },
    {
      q: "¿Cuánto tiempo tarda en ver resultados?",
      a: "En menos de 72 horas, notarás una mejora en la salud y comportamiento de los animales."
    },
    {
      q: "¿Es compatible con otros productos?",
      a: "Sí, nuestro aditivo es compatible con la mayoría de los productos de nutrición animal. Consulta con nuestro equipo para detalles específicos."
    },
    {
      q: "¿Cuánto cuesta el envío?",
      a: "El envío es gratuito en toda la república y se realiza en 24 horas."
    },
    {
      q: "¿Ofrecen descuentos por compras al por mayor?",
      a: "Sí, ofrecemos un litro adicional gratuito por cada garrafa de 10 litros comprada."
    }
  ]

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}