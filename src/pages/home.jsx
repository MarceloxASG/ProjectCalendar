import { useState} from "react";
import Bienvenida from "../components/home/bienvenida";
import NuevaReunion from "../components/home/crearReunion/nuevaReunion";

const Home = () => {
    const [reuniones, setReuniones] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const addReunion = (reunionData) => {
        const newReunion = {
            id: Date.now(),
            ...reunionData,
            date: new Date().toLocaleDateString()
        };
        setReuniones([...reuniones, newReunion]);
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-8">

            <Bienvenida />

            {/* Botón para agregar cards */}
            <div className="text-center mb-6">
                <button 
                    onClick={() => setShowForm(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg 
                            transition-colors duration-200 transform hover:scale-105"
                >
                    Agregar Reunión
                </button>
            </div>
            
            {/* Formulario flotante */}
            {showForm && (
                <NuevaReunion 
                    onClose={() => setShowForm(false)}
                    onSubmit={addReunion}
                />
            )}
            {/* Listado de reuniones */}
            <div className="w-full max-w-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {reuniones.map(reunion => (
                        <div 
                            key={reunion.id}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-2">{reunion.title}</h3>
                            <p className="text-gray-600 mb-3">{reunion.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                                    {reunion.specialty}
                                </span>
                                <span className="text-gray-500 text-sm">{reunion.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;