// src/components/Hero.jsx (Versión sin errores de librería)
export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
            <div className="absolute inset-0 z-0">
                <img
                    src="TU_URL_DE_IMAGEN"
                    className="w-full h-full object-cover opacity-50 transition-transform duration-[10000ms] hover:scale-110"
                    alt="iMulti Co Hero"
                />
            </div>
            <div className="relative z-10 text-center px-6">
                <span className="text-rose-500 font-bold tracking-[0.4em] uppercase text-sm mb-4 block">
                    Catering & Picnic de Lujo
                </span>
                <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-tighter">
                    Momentos <span className="italic text-stone-300">Inolvidables</span>
                </h1>
                <div className="flex gap-4 justify-center mt-10">
                    <a href="#servicios" className="bg-rose-600 text-white px-10 py-4 rounded-full font-bold">Ver Catálogo</a>
                    <a href="#contacto" className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold border border-white/20">Contactar</a>
                </div>
            </div>
        </section>
    );
}