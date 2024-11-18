
export default function Alerta({ alerta }) {
  return (
    <>
        {alerta.tipo && (
            <div
            className={`p-3 my-2 text-white rounded-md ${
                alerta.tipo === 'error' ? 'border-l-8 border-red-900 bg-red-500' : 'border-l-8 border-green-900 bg-green-500'
            }`}
            >
            <p>{alerta.msg}</p>
            </div>
        )}        
    </>
  )
}
