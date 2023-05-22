# pf-react: a mini react portfolio showcase using Tailwind CSS

### Dropdown Component

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

- **Functional Components**: The components are written as functional components using the function syntax.
- **Props**: The components receive data and configurations through props.
- **Fragment**: The `Fragment` component from React is imported and used to wrap multiple elements without adding an extra DOM element.
- **Array.map()**: The `map` method is used to iterate over arrays and transform data into JSX elements.
- **CSS styling (using class names and inline styles)**: Used to define the visual appearance of the components by applying specific class names and inline styles.
- **CSS framework (Tailwind CSS)**: Tailwind CSS was used as a CSS framework to provide pre-defined styles and utility classes, enabling quick and consistent styling of the modal and its components.
- **Component Composition**: The components are composed together to create the final `Table` component.
- **Key Prop**: Each rendered element in an iteration is assigned a unique `key` prop to help React efficiently update the component.
- **Table Structure**: The `table`, `thead`, `tbody`, `tr`, `th`, and `td` elements are used to structure and display the table.
- **Conditional Rendering**: The `renderedHeaders` array checks if a `header` function is provided for each column and renders it accordingly.
- **Dynamic Rendering**: The `config` array is used to dynamically render the table headers and cells based on the configuration provided.
- **className**: The `className` prop is used to apply CSS classes to elements.
- **keyFn**: The `keyFn` function is passed as a prop to generate unique keys for each row of data.

### Modal Component

- **React Hooks (useState, useEffect)**: Used to add state and side effects to functional components, managing the modal's visibility and applying CSS class to the document.body.
- **React Portal (ReactDOM.createPortal)**: Used to create a portal for rendering the modal component outside the normal component hierarchy, using the .modal-container element as the target container.
- **CSS styling (using class names and inline styles)**: Used to define the visual appearance of the components by applying specific class names and inline styles.
- **CSS framework (Tailwind CSS)**: Tailwind CSS was used as a CSS framework to provide pre-defined styles and utility classes, enabling quick and consistent styling of the modal and its components.
- **Event handling (onClick event)**: Used to trigger actions like opening or closing the modal when buttons or elements are clicked.
- **Conditional rendering ({showModal && modal})**: Used to conditionally render the modal component based on the value of the showModal state variable.
- **State management**: Used to track and manage the showModal state variable to control the visibility of the modal.
- **Component composition and nesting**: Used to compose the modal component by combining smaller components like buttons and paragraphs.

### Accordion Component

- **React Hooks (`useState`)**: Used to add state to functional components, allowing the tracking of the expanded index state in the accordion. Simplifies state management and allows functional components to have local state without needing a class component. Provides a straightforward and declarative way to handle component state.

- **React Icons (`GoChevronDown`, `GoChevronLeft`)**: Used to display chevron icons in the accordion component. Offers a wide range of pre-built icons, eliminating the need to create custom icons. Provides consistent and visually appealing icons without requiring additional design efforts.

- **Array `map` method**: Used to iterate over the `items` array and generate the accordion items dynamically. Enables the rendering of accordion items based on the data provided. Provides flexibility and scalability when dealing with dynamic data.

- **Conditional rendering (`{isExpanded && <div className="border-b p-5">{item.content}</div>}`)**: Used to conditionally render the content of an accordion item based on whether it is expanded or not. Optimizes performance by rendering only the necessary content. Improves user experience by displaying relevant information only when needed.

- **Event handling (`onClick` event)**: Used to trigger the expansion or collapse of accordion items when they are clicked. Enables interactivity by allowing users to expand or collapse accordion items with a simple click. Provides a responsive and intuitive user interface.

- **CSS styling**: Used to define the visual appearance of the accordion component, applying specific classes for colors, padding, borders, and cursor styles. Offers consistent and visually appealing styles to the component. Simplifies styling by utilizing pre-defined classes from a CSS framework.

- **CSS framework (Tailwind CSS)**: Used to provide pre-defined styles and utility classes for quick and consistent styling of the accordion component. Speeds up development by eliminating the need to write custom CSS. Offers a wide range of utility classes for responsive and customizable styling options.

### Button Component

- **React Icons (`GoBell`, `GoCloudDownload`, `GoDatabase`)**: Used to display different icons in the buttons. Provides a wide range of pre-built icons, reducing the need for custom icon creation. Ensures consistent and visually appealing icons.

- **Button component**: Custom component used to create buttons with different variations. Promotes code reusability and consistency across the application.

- **CSS framework (Tailwind CSS)**: Utilized to apply pre-defined styles and utility classes to the buttons. Facilitates rapid and consistent styling of the components. Offers a wide range of utility classes for responsive and customizable styling options.

- **Conditional rendering**: Used to conditionally render certain elements based on specific props. Enables the dynamic display of different button variations with corresponding icons and text.

- **Event handling (`onClick`, `onMouseEnter`, `onMouseLeave`)**: Utilized to define the behavior of buttons when clicked or interacted with. Enables interactivity and user engagement by providing appropriate response to user actions.

- **CSS styling**: Applied to customize the appearance of the buttons using Tailwind CSS utility classes. Provides consistent and visually appealing styles to the buttons.

- **Classname library (`className`)**: Used to conditionally apply multiple CSS classes based on different button variations. Simplifies the process of composing class names dynamically.

- **Props destructuring (`{ children, primary, secondary, success, warning, danger, outline, rounded, ...rest }`)**: Enables the extraction of specific props from the component's props object, allowing easy access to the desired prop values. Improves code readability and reduces the need for repetitive props accessing.

- **Rest parameters (`...rest`)**: Used to capture any remaining props that are not explicitly destructured, allowing the forwarding of any additional props to the underlying button element. Enhances extensibility by enabling the passing of arbitrary props to the button component.

- **PropTypes validation**: Utilized to enforce prop type validation for the button component. Helps catch potential bugs or issues during development by ensuring the correct usage of props. Provides clearer documentation for component consumers.

- **Error handling for prop validation**: Implemented custom prop validation logic to prevent multiple conflicting variations from being active simultaneously. Helps maintain consistency and prevents incorrect usage of button variations.
