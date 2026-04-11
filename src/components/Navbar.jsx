// src/components/Navbar.jsx
export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-serif font-bold tracking-tighter text-stone-900">
                    Picnic<span className="text-rose-600 text-3xl">.</span>Date
                </div>

                {/* Links */}
                <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-stone-600">
                    <a href="#" className="hover:text-rose-600 transition-colors">Inicio</a>
                    <a href="#servicios" className="hover:text-rose-600 transition-colors">Servicios</a>
                    <a href="#contacto" className="hover:text-rose-600 transition-colors">Contacto</a>
                </div>

                {/* Botón de Acción */}
                <a href="#contacto" className="bg-stone-900 text-white px-6 py-2 rounded-full text-sm hover:bg-rose-600 transition-all">
                    Reservar
                </a>
            </div>
        </nav>
    );
}