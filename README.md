# 7 Proyectos

  1. ApiSong
     1. Consumo de API para buscar Canciones y letra de Artista seleccionado
  2. Crud
     1. Ejemplo básico obteniendo datos desde un archivo
     2. json-server para simular una conexión a una api rest
  3. Formulario
     1. Funcionalidades completas (validaciones y envío) con capacidad de escalar
  4. Gif app
     1. Buscador de Gif animados (consumo de API)
  5. hooks
     1. Ejemplo de creacion y uso de custom hooks
  6. Lista de tareas
     1. Un todo list con funcionalidades completas
  7. Modal
     1. Plantilla para ventanas modales con "useRef"
  8. Poke app
     1. Redux Toolkit con createSlice
  9. Select Anidado
     1. Consumo de API "postal Mexico" (cuidad,distrito,colonia)
  10. Todo App RTK
    1.  Redux RTK ejemplo de uso para consumo de api.

## Dependencies

  1. npm install --save styled-components
  2. npm i axios
  3. npm i react-redux
  4. npm i @reduxjs/toolkit
  5. npm i enzime-to-json
  6. npm i styled-components
  7. npm i animated-css

## Dev Dependencies

  1. npm i --save-dev "@testing-library/react-hooks"
  2. npm i --save-dev "@wojtekmaj/enzyme-adapter-react-17"
  3. npm i --save-dev "enzyme"

## Lista hooks usados aquí

  1. useSate
  2. useEffect
  3. useContext
  4. Memo: memoriza un componente
  5. useMemo: memoriza el resultado de un función
  6. useCallback: memoriza una función
  7. useReduce
  8. useCustom

## Notas - test

- configuración en "setupTest.js"
  
  ``` js
  import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
  import Enzyme from 'enzyme';
  import { createSerializer } from 'enzyme-to-json';
  
  Enzyme.configure({adapter: new Adapter()})
  expect.addSnapshotSerializer(createSerializer({mode:'deep'}))
  ```

- actualización de snapshot, luego del test presiona "u" eso es suficiente
