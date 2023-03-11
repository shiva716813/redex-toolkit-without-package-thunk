import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';
import React, { useState } from "react";
// import "./styles.css";
import Select , {components} from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "Apple", label: "apple" },
  { value: "Orange", label: "orange" }
];

const MultiValueRemove = (props) => {
  if (props.data.isFixed) {
    return null;
  }
  return <components.MultiValueRemove {...props} />;
};

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

// const App = () => {
//   return (
//     <Select
//       isMulti
//       defaultValue={[colourOptions[0], colourOptions[1]]}
//       isClearable={false}
//       options={colourOptions}
//       components={{ MultiValueRemove }}
//     />
//   );
// };
// export default App;
//============
// export default function App() {
//   const [selectedOption, setSelectedOption] = useState([]); //add initial state

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const filterOptions = (candidate, input) => {
//     if (input) {
//       if (candidate.label.toLowerCase().includes(input.toLowerCase()))
//         return true;
//       if (
//         selectedOption.some((opt) => {
//           if (opt.value === candidate.value) return true;
//           else return false;
//         })
//       )
//         return true;
//       return false;
//     }
//     return true;
//   };

//   return (
//     <div className="App">
//       <Select
//         defaultValue={{ value: "chocolate", label: "Chocolate" }} // default value must be like this.
//         value={selectedOption}
//         onChange={handleChange}
//         options={options}
//         isMulti
//         hideSelectedOptions={false}
//         isSearchable
//         filterOption={filterOptions}
//       />
//     </div>
//   );
// }
// ==================
// const App = () => {
//   const [selectedOption, setSelectedOption] = useState();

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   }
//   const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
//   ];

//   return (
//     <div>
//       <Select
//         isMulti
//         hideSelectedOptions={false}
//         defaultValue={{ value: 'chocolate', label: 'Chocolate' }} // default value must be like this.
//         value={selectedOption} //You forgot pass this  parameter
//         onChange={handleChange}
//         options={options}
//       />
//     </div>
//   );
// }

// export default App;


//=============================
function App() {
  return (
    <div className='App'>  
      <AddToDo/>
      <ToDos/>
    </div>
  );
}

export default App;
