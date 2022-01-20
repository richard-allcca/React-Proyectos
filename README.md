# 7 Proyectos   
  1. ApiSong => Consumo de API para buscar Canciones y letra de Artista seleccionado
  2. Crud    => Uno simple y Otro con simulación de conexión a DB con json-server
  3. Formulario => con funcionalidad completa (validaciones y envío) con capacidad de escalar 
  4. Gif app => buscador de Gif animados (consumo de API)
  5. Lista de tareas => un todo list con funcionalidades completas
  6. Modal => Plantilla para ventanas modales con "useRef"
  7. Select Anidado => consumo de API "postal Mexico" (cuidad,distrito,colonia)

## Lista hooks usados aquí
  1. useSate
  2. useEffect
  3. useContext
  4. useMemo
  5. useCallback
  5. useReduce
  6. useCustom

# Dependencias Gif
- npm install animate.css --save

# Dependencias - test
  1. npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
  2. npm i enzyme-to-json
  3. "npm install --save-dev enzyme
  4. npm install --save-dev @testing-library/react-hooks


## Notas - test
  - configuración en "setupTest.js"
  import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
  import Enzyme from 'enzyme';
  import { createSerializer } from 'enzyme-to-json';
  Enzyme.configure({adapter: new Adapter()})
  expect.addSnapshotSerializer(createSerializer({mode:'deep'}))

  - actualización dce snapshot, lugeo del test presiona <u> eso es suficiente


