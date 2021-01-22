// useState - a react hook
import React, { useState } from 'react';
import './App.css';

function App() {
  return <div className="myFolders">
      {/* Rendering the Folder function - this returns whatever the Folder function returns */}
      {/* Booleans as props must be enclosed in curly braces */}
      <Folder name='Desktop'>
      {/* Valid code rendered within this html tags will manifest as a prop called 'children'.
          Multiple items rendered here will manifest in an array within the children prop. */}
          <Folder name='Music'>
            <File name='all_star.mp4'/>
            <File name='express_file.mp4'/>
          </Folder>
          <File name='dogs.jpeg'/>
          <File name='cats.png'/>
      </Folder>
      <Folder name='Applications'>
        <Folder name='MS Paint'/>
        <Folder name='Atom'/>
      </Folder>
    </div>
}

// functional component with the ability to take in props
// Props are the default properties of the component that the return of the functional component is rendered in.
// Those props are accessed in the following component by calling props as an argument to the function.
// The props are referenced in the return of this function by calling {this.props}
const Folder = (props) => {
  // Destructuring an array: assinging an array to an array assigns the respective items to each other.
  // This means that the first item in useState(false) is assigned to isOpen, and the second, to setIsOpen
  const [ isOpen, setIsOpen ] = useState(true);
  // Assigning props to these properties within the component pulls the values from the props object.
  // This allows us to reference them without writing 'props' each time
  const { name, children } = props;

  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => { setIsOpen(!isOpen); }

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      {name}
    </span>
    {/* Elements can be styled directly within the html tags as well */}
    <div style={{marginLeft: '17px'}}>
      {/* Conditional operator to render folder contents if open, and null if not */}
      {isOpen ? children : null}
    </div>
  </div>
}

const File = (props) => {
  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline'
  };
  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {props.name}
  </div>
}

export default App;
