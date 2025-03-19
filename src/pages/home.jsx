import { useState} from "react";

const Home = () => {
    const [cards, setCards] = useState([]);

    const addCard = () => {
        const newCard = {
            id: Date.now(),
            content: `Card ${cards.length + 1}`
        };
        setCards([...cards, newCard]);
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-8">

            {/* Sección de bienvenida */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">
                    BIENVENIDO, (USER)
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Bienvenido a mi página de programación. Siga las instrucciones para agregar un evento a mi calendario.
                </p>
            </div>
            
            {/* Contenedor de cards */}
            <div className="w-full max-w-6xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {cards.map(card => (
                        <div 
                            key={card.id}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="text-gray-700">
                                {card.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón para agregar cards */}
                <div className="text-center">
                    <button 
                        onClick={addCard}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg 
                                transition-colors duration-200 transform hover:scale-105"
                    >
                        Agregar Card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;