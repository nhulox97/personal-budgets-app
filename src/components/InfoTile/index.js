import React from 'react';

const InfoTile = ({ numberTransactions, transactionType, amount }) => {
  
  const getTextColorByTransaction = (transactionType) => {
    let color = 'text-blue-600';
    if (transactionType === 'Gastos')
      color = 'text-red-600';
    else if (transactionType === 'Ingresos')
      color = 'text-green-500';
    return color;
  }

  return (
  <div className="flex flex-col content-center m-8 pt-8 pb-8 pl-16 pr-16 border border-gray-400 rounded-lg shadow-lg hover:shadow-2xl transition ease-in duration-300 transform hover:scale-110 bg-gray-50">
    <div className="flex flex-row justify-between p-2">
      <div className={`text-3xl font-semibold ${getTextColorByTransaction(transactionType)}`}>
        {transactionType}
      </div>
      
      <div className="text-gray-400 text-right self-center hover:text-blue-400 underline">
        <a href='/'>ver mas</a>
      </div>
    </div>
    <div className="justify-center m-2 pl-6 pr-6 pt-4 pb-4">
      <p className="text-black text-5xl text-center">{`$${amount}`}</p>
    </div>
    <div className="text-gray-600 text-center p-2">
      Número de transacciones: {numberTransactions}
    </div>
  </div>
);
}

export default InfoTile;
