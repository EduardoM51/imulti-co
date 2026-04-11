import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Obtenemos los datos del formulario
        const formData = new FormData(e.target);
        const data = {
            nombre_cliente: formData.get('nombre'),
            email: formData.get('email'),
            mensaje: formData.get('mensaje'),
        };

        // Insertamos en Supabase
        const { error } = await supabase.from('contactos').insert([data]);

        setLoading(false);
        if (!error) {
            setEnviado(true);
            e.target.reset();
        } else {
            alert("Hubo un error al enviar: " + error.message);
        }
    };

    return (
        <section id="contacto" className="py-20 px-6 bg-stone-50">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-stone-100">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-serif text-stone-900 mb-4 text-bold">Hagamos algo especial</h2>
                    <p className="text-stone-500 italic">Escríbenos y diseñaremos la mesa perfecta para tu ocasión.</p>
                </div>

                {enviado ? (
                    <div className="text-center py-10 bg-green-50 rounded-2xl">
                        <p className="text-green-700 font-bold text-xl">¡Mensaje recibido! ✨</p>
                        <p className="text-green-600">iMulti Co te contactará muy pronto.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                name="nombre"
                                required
                                placeholder="Tu nombre"
                                className="w-full p-4 bg-stone-50 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/20 border border-stone-100 transition-all"
                            />
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Tu email"
                                className="w-full p-4 bg-stone-50 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/20 border border-stone-100 transition-all"
                            />
                        </div>
                        <textarea
                            name="mensaje"
                            rows="4"
                            required
                            placeholder="¿Qué tienes en mente? (Fecha, número de personas, ocasión...)"
                            className="w-full p-4 bg-stone-50 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/20 border border-stone-100 transition-all"
                        ></textarea>

                        <button
                            disabled={loading}
                            className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-rose-600 transition-all disabled:bg-stone-300"
                        >
                            {loading ? "Enviando..." : "Enviar Solicitud"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}