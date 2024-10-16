import React, { createContext, useContext, useState, ReactNode } from 'react';
import { X, Info } from 'lucide-react';

// Definir los tipos de alerta
type AlertType = 'success' | 'error' | 'warning' | 'info';

// Interfaz para la alerta
interface AlertMessage {
  type: AlertType;
  title: string;
  message: string;
  onAccept?: () => void;
  onInfo?: () => void;
}

// Interfaz para el contexto
interface AlertContextType {
  showAlert: (alert: AlertMessage) => void;
  hideAlert: () => void;
}

// Crear el contexto
const AlertContext = createContext<AlertContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert debe ser usado dentro de un AlertProvider');
  }
  return context;
};

// Componente proveedor del contexto
export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alert, setAlert] = useState<AlertMessage | null>(null);

  const showAlert = (newAlert: AlertMessage) => {
    setAlert(newAlert);
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alert && <AlertComponent alert={alert} onClose={hideAlert} />}
    </AlertContext.Provider>
  );
};

// Componente de Alerta Personalizado
const AlertComponent: React.FC<{ alert: AlertMessage; onClose: () => void }> = ({ alert, onClose }) => {
  return (
    <div className="fixed right-4 top-4 w-80 bg-blue-500 rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-blue-600">
        <h3 className="text-lg font-semibold text-black">{alert.title}</h3>
        <div className="flex space-x-2">
          {alert.onInfo && (
            <button onClick={alert.onInfo} className="text-red-500 hover:text-red-700">
              <Info size={20} />
            </button>
          )}
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white mb-4">{alert.message}</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => {
              if (alert.onAccept) alert.onAccept();
              onClose();
            }}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

// Ejemplo de uso en un componente
export const ExampleComponent: React.FC = () => {
  const { showAlert } = useAlert();

  const handleShowAlert = () => {
    showAlert({
      type: 'success',
      title: 'Operación Exitosa',
      message: 'La acción se completó correctamente.',
      onAccept: () => console.log('Alerta aceptada'),
      onInfo: () => console.log('Información adicional')
    });
  };

  return (
    <button onClick={handleShowAlert} className="bg-blue-500 text-white p-2 rounded">
      Mostrar Alerta
    </button>
  );
};

// Componente principal de la aplicación
const App: React.FC = () => {
  return (
    <AlertProvider>
      {/* Resto de tu aplicación */}
      <ExampleComponent />
    </AlertProvider>
  );
};

export default App;