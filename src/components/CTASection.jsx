export default function CTASection({ onOpenPublish }) {
  return (
    <section
      id="para-negocios"
      className="bg-gradient-to-br from-laguna-600 to-laguna-800 py-14 text-white sm:py-16"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          ¿Tienes un negocio en la Laguna?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50">
          Únete a más de 100 negocios que ya confían en Mercado Laguna para llegar
          a más clientes locales en Torreón, Gómez Palacio, Lerdo y Matamoros.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={onOpenPublish}
            className="rounded-lg bg-white px-8 py-3.5 font-bold text-laguna-700 shadow-xl transition hover:bg-emerald-50"
          >
            Registrar mi negocio gratis
          </button>
          <a
            href="#como-funciona"
            className="rounded-lg border-2 border-white/30 px-8 py-3.5 font-bold transition hover:bg-white/10"
          >
            Conocer beneficios
          </a>
        </div>
      </div>
    </section>
  )
}
