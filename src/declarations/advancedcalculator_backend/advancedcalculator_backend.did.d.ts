import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'coseno' : ActorMethod<[number], number>,
  'dividir' : ActorMethod<[bigint, bigint], bigint>,
  'logaritmo' : ActorMethod<[number], number>,
  'multiplicar' : ActorMethod<[bigint, bigint], bigint>,
  'potencia' : ActorMethod<[number, number], number>,
  'raizCuadrada' : ActorMethod<[number], number>,
  'restar' : ActorMethod<[bigint, bigint], bigint>,
  'seno' : ActorMethod<[number], number>,
  'sumar' : ActorMethod<[bigint, bigint], bigint>,
  'tangente' : ActorMethod<[number], number>,
}
