# pf-react: a mini react portfolio showcase using Tailwind CSS

## Components and technologies used -

### Dropdown component:

- **React Hooks**:
  - `useState`: Used to manage state within the functional component (`isOpen`).
  - `useEffect`: Used to handle side effects and perform actions on component mount and unmount (adding and removing event listeners).
  - `useRef`: Used to create a reference to an element (`divEl`) and access it across renders.
- **React Icons**: The component imports the `GoChevronDown` icon from the `react-icons/go` package and uses it as an icon within the dropdown.
- **Component Composition**: The component utilizes the `Panel` component imported from "./Panel" to compose the main dropdown button and the dropdown options panel.
- **Event Handling**: The component defines event handler functions (`handleClick` and `handleOptionClick`) to handle click events on the dropdown and its options.
- **JSX Markup**: The component uses JSX syntax to define the component's structure and render the HTML-like markup.
- **Conditional Rendering**: The component conditionally renders the options panel based on the `isOpen` state variable.
- **CSS Styling**: The component uses inline CSS and applies Tailwind CSS class names (`hover:bg-sky-100`, `rounded`, `cursor-pointer`, `p-1`, etc.) to style the various elements.
- **Tailwind CSS**: The component applies Tailwind CSS utility classes for easy and rapid styling of components.
- **HTML and JavaScript**: The component is embedded within an HTML file and utilizes JavaScript to add interactivity and behavior to the component.
- **Outside Click Handling**: The `useEffect` hook is used to add an event listener to the document to handle clicks outside the dropdown component (`divEl`). This concept is used to close the dropdown when clicking outside of it.

### Table Component

- **React**: The components are written using React, a JavaScript library for building user interfaces.
- **JSX**: The components utilize JSX syntax, which allows mixing HTML-like code within JavaScript.
- **Functional Components**: The components are written as functional components using the function syntax.
- **Props**: The components receive data and configurations through props.
- **Fragment**: The `Fragment` component from React is imported and used to wrap multiple elements without adding an extra DOM element.
- **Array.map()**: The `map` method is used to iterate over arrays and transform data into JSX elements.
- **CSS**: The components apply CSS classes to style the table and its elements.
- **Component Composition**: The components are composed together to create the final `Table` component.
- **Key Prop**: Each rendered element in an iteration is assigned a unique `key` prop to help React efficiently update the component.
- **Table Structure**: The `table`, `thead`, `tbody`, `tr`, `th`, and `td` elements are used to structure and display the table.
- **Conditional Rendering**: The `renderedHeaders` array checks if a `header` function is provided for each column and renders it accordingly.
- **Dynamic Rendering**: The `config` array is used to dynamically render the table headers and cells based on the configuration provided.
- **className**: The `className` prop is used to apply CSS classes to elements.
- **keyFn**: The `keyFn` function is passed as a prop to generate unique keys for each row of data.
