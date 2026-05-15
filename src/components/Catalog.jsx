import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Catalog() {
    const [servicios, setServicios] = useState([]);
    const [servicioAbierto, setServicioAbierto] = useState(null); // Controla la ventana independiente

    useEffect(() => {
        const fetchServicios = async () => {
            const { data } = await supabase.from('servicios').select('*');
            setServicios(data || []);
        };
        fetchServicios();
    }, []);

    return (
        <section id="servicios" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicios.map((servicio) => (
                    <div
                        key={servicio.id}
                        className="cursor-pointer group border rounded-3xl p-4 hover:shadow-xl transition-all"
                        onClick={() => setServicioAbierto(servicio)} // Al hacer clic, se guarda el servicio
                    >
                        <img src={servicio.imagen_principal} className="rounded-2xl h-48 w-full object-cover" />
                        <h3 className="text-xl font-bold mt-4">{servicio.nombre}</h3>
                        <p className="text-rose-600 font-bold">${servicio.precio_base}</p>
                        <button className="mt-2 text-sm text-stone-400">Hacer clic para ver detalles</button>
                    </div>
                ))}
            </div>

            {/* VENTANA INDEPENDIENTE (MODAL) */}
            {servicioAbierto && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
                        {/* Botón Cerrar */}
                        <button
                            onClick={() => setServicioAbierto(null)}
                            className="absolute top-6 right-6 text-2xl text-stone-400 hover:text-black"
                        >
                            ✕
                        </button>

                        <img src={servicioAbierto.imagen_principal} className="w-full h-64 object-cover rounded-3xl mb-6" />

                        <h2 className="text-4xl font-serif mb-2">{servicioAbierto.nombre}</h2>
                        <p className="text-2xl text-rose-600 font-bold mb-6">${servicioAbierto.precio_base}</p>

                        <div className="prose text-stone-600">
                            <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-2">Descripción completa:</h4>
                            <p className="leading-relaxed">
                                {servicioAbierto.descripcion_detallada || "Pronto tendremos más detalles de este servicio."}
                            </p>
                        </div>

                        <a
                            href="#contacto"
                            onClick={() => setServicioAbierto(null)}
                            className="mt-10 block text-center bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-rose-600 transition-all"
                        >
                            Consultar disponibilidad
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
