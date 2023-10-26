export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'coseno' : IDL.Func([IDL.Float64], [IDL.Float64], []),
    'dividir' : IDL.Func([IDL.Int, IDL.Int], [IDL.Int], []),
    'logaritmo' : IDL.Func([IDL.Float64], [IDL.Float64], []),
    'multiplicar' : IDL.Func([IDL.Int, IDL.Int], [IDL.Int], []),
    'potencia' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Float64], []),
    'raizCuadrada' : IDL.Func([IDL.Float64], [IDL.Float64], []),
    'restar' : IDL.Func([IDL.Int, IDL.Int], [IDL.Int], []),
    'seno' : IDL.Func([IDL.Float64], [IDL.Float64], []),
    'sumar' : IDL.Func([IDL.Int, IDL.Int], [IDL.Int], []),
    'tangente' : IDL.Func([IDL.Float64], [IDL.Float64], []),
  });
};
export const init = ({ IDL }) => { return []; };
