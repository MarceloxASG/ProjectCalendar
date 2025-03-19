import { useState } from 'react';

const NuevaReunion = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    specialty: ''
  });

  const specialties = [
    'Desarrollo Web',
    'Programación Backend',
    'Diseño UI/UX',
    'Base de Datos',
    'DevOps'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Nueva Reunión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Título:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Descripción:</label>
            <textarea
              className="w-full p-2 border rounded h-24"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Especialidad:</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.specialty}
              onChange={(e) => setFormData({...formData, specialty: e.target.value})}
              required
            >
              <option value="">Seleccione una especialidad</option>
              {specialties.map((spec, index) => (
                <option key={index} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
          
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevaReunion;