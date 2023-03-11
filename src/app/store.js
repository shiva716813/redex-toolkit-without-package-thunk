import { Iterable } from 'immutable'
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  // isPlain,
} from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todoSlice';

function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
  proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
  }


function isPlain(val) {
  return (
    typeof val === 'undefined' ||
    val === null ||
    typeof val === 'string' ||
    typeof val === 'boolean' ||
    typeof val === 'number' ||
    (val instanceof Date? val.valueOf() : false) ||
    // !(val instanceof Date) ||
    Array.isArray(val) ||
    isPlainObject(val)
  )
}

// Augment middleware to consider Immutable.JS iterables serializable
const isSerializable = (value) => {
  // if(value.payload instanceof Date){
  //   console.log(value.valueOf()); 
  // }
  
  return Iterable.isIterable(value) || isPlain(value)
}
const getEntries = (value) => Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
})

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: [serializableMiddleware],
});