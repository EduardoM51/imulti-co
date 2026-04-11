// 1. Importaciones de React y estilos
import React from 'react';

// 2. Importación de tus componentes (las piezas del rompecabezas)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ContactForm from './components/ContactForm';

function App() {
    return (
        /* Contenedor principal con una fuente limpia y color de fondo base */
        <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-rose-100 selection:text-rose-600">

            {/* Navegación fija en la parte superior */}
            <Navbar />

            {/* Sección de Bienvenida (Impacto visual) */}
            <Hero />

            {/* Contenedor del contenido principal */}
            <main>
                {/* Sección de Servicios: Le ponemos un ID para que el Navbar pueda navegar aquí */}
                <section id="servicios" className="py-12">
                    <Catalog />
                </section>

                {/* Sección de Contacto: Aquí es donde los datos viajan a Supabase */}
                <section id="contacto" className="py-12">
                    <ContactForm />
                </section>
            </main>

            {/* Pie de página profesional para tu portafolio */}
            <footer className="bg-stone-900 text-stone-400 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xl font-serif font-bold text-white">
                        Picnic<span className="text-rose-500">.</span>Date
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-sm">© {new Date().getFullYear()} Picnic Date. Eventos Premium.</p>
                        <p className="text-xs mt-1 uppercase tracking-widest opacity-50">
                            Desarrollado por Jesus Morales | MVP v1.0
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;





