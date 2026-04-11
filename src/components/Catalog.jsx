import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Catalog() {
    const [servicios, setServicios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        async function obtenerServicios() {
            // 1. Pedimos los datos a Supabase
            const { data, error } = await supabase
                .from('servicios')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Error al cargar:", error);
            } else {
                setServicios(data);
            }
            setCargando(false);
        }

        obtenerServicios();
    }, []);

    if (cargando) return <div className="text-center py-20">Cargando experiencias...</div>;

    return (
        <section id="servicios" className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-12 text-stone-900">
                Nuestras Experiencias
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {servicios.map((item) => (
                    <div key={item.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100">
                        {/* Imagen */}
                        <div className="h-72 overflow-hidden">
                            <img
                                src={item.imagen_principal}
                                alt={item.nombre}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        {/* Contenido */}
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-stone-900 mb-2">{item.nombre}</h3>
                            <p className="text-stone-500 text-sm mb-6 line-clamp-2">{item.descripcion}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-rose-600 font-bold text-xl">${item.precio_base}</span>
                                <a href="#contacto" className="text-stone-900 font-semibold border-b-2 border-rose-500 pb-1 hover:text-rose-500 transition-colors">
                                    Reservar
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}