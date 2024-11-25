import { useEffect, useState } from 'react';

export default function Alerta({ alerta }) {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Si hay una alerta activa, inicia el temporizador
    if (alerta.tipo) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); // 3000 ms = 5 segundos

      // Limpia el temporizador si el componente se desmonta antes de que termine el tiempo
      return () => clearTimeout(timer);
    }
  }, [alerta]);

  // Oculta la alerta si 'visible' es falso
  if (!visible) return null;

  return (
    <>
      {alerta && (
        <div
          className={`p-3 my-2 text-white rounded-md ${
            alerta.tipo === 'error' ? 'border-l-8 border-red-900 bg-red-500' : 'border-l-8 border-green-900 bg-green-500'
          }`}
        >
          <p>{alerta.msg}</p>
        </div>
      )}
    </>
  );
}
