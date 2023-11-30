import Example from './exampleUL'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const DContainerUL = () => {
    return (
        // <div className="App">
          <DndProvider backend={HTML5Backend}>
            <Example />
          </DndProvider>
        // </div>
      );
  };

export default DContainerUL;
