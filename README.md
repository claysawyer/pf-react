# pf-react: a mini react portfolio showcase using Tailwind CSS

### Navigation

- **React**: Used as the JavaScript library for building the user interface and handling the component-based structure.
- **useContext**: React hook used to access the value provided by the `NavigationContext` context. Simplifies accessing and sharing data across components without prop drilling.
- **Context API**: Utilized to create the `NavigationContext` context, which provides a way to share data (`currentPath` and `navigate` function) between components. Eliminates the need for passing props through multiple levels of component hierarchy.
- **createContext**: Function used to create the `NavigationContext` context. Enables the creation of a context object to share data across components.
- **useState hook**: Used to manage the `currentPath` state, representing the current navigation path. Facilitates state management by providing a state variable and an associated update function.
- **useEffect hook**: Implemented to handle the initialization of the `currentPath` state and add/remove event listener for the "popstate" event. Allows for side effects to be executed during component lifecycle.
- **window.location**: Accessed to get the current pathname and update the `currentPath` state. Provides information about the current URL path.
- **window.history**: Utilized to update the URL path and navigate to a new path using `pushState`. Enables manipulation of browser history, allowing for navigation within the application.
- **popstate event**: Listened to on the `window` object to detect changes in the browser history. Triggers the handler function when the user navigates forward or backward in history.
- **setCurrentPath**: Update function used to update the `currentPath` state and reflect the current navigation path.
- **navigate**: Function provided by the `NavigationContext` context to navigate to a new path by updating the URL using `window.history.pushState` and updating the `currentPath` state.
- **NavigationProvider**: Component that wraps the application and provides the `NavigationContext` context. Allows other components to access the context value.
- **children prop**: Used in the `NavigationProvider` component to render the child components wrapped within the context provider. Supports the composition of components and their rendering within the context.
- **Component composition**: Components (`NavigationProvider`) are composed to build the navigation context and provide its value to consuming components. Promotes code reuse and modularity by combining smaller, reusable components.
- **Data sharing**: The `NavigationContext` context is used to share data (`currentPath` and `navigate` function) between components without the need for passing props through multiple levels of the component hierarchy. Simplifies data sharing and improves code organization.
- **Side effects**: The `useEffect` hook is utilized to handle side effects such as initializing the `currentPath` state and adding/removing event listeners. Enables executing code during component lifecycle events.
- **Code organization**: Components and hooks are split into separate files to improve code maintainability and readability. Facilitates separation of concerns and better modularization.
- **Exporting multiple values**: The `NavigationContext` and `NavigationProvider` components are exported using named exports. Allows other modules to import these components separately.
- **Importing named exports**: The `NavigationContext` is imported using the default import syntax, and the `NavigationProvider` is imported using named imports. Enables importing specific exports from a module.

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

### Counter Component

- **immer**: Utilized to work with immutable state updates in a more convenient and readable manner. Simplifies state management by allowing direct updates to a draft state, improving code maintainability.
- **useReducer**: React hook used for managing state and state transitions. Provides a way to handle complex state logic and dispatch actions to update the state. Offers a predictable and centralized approach to state management.
- **Button component**: Custom component used to create buttons with specific functionality. Promotes code reusability and consistent styling.
- **Panel component**: Custom component used to wrap the content and provide a visual grouping. Enhances the organization and readability of the user interface.
- **Reducer function**: Handles state updates based on dispatched actions. Improves code modularity by separating state transition logic from the component.
- **Switch statement**: Used within the reducer function to determine the state update based on the dispatched action. Provides a clear and structured approach to handle different action types.
- **Dispatch function**: Triggered to send actions to the reducer for state updates. Enables the modification of state by dispatching specific actions.
- **State management**: Implemented with the useReducer hook to manage the count and valueToAdd states. Facilitates consistent state handling and updates.
- **Event handling (`onClick`, `onChange`, `onSubmit`)**: Utilized to define the behavior of buttons and form elements when clicked or interacted with. Enables interactivity and user input processing.
- **Form submission handling**: Implemented to handle form submission and trigger the corresponding action. Allows the addition of values to the count state.
- **CSS styling**: Applied to customize the appearance of the input field and buttons using Tailwind CSS utility classes. Provides consistent and visually appealing styles to the components.
- **Custom hook (`useCounter`)**: Created to encapsulate the counter functionality and state management logic. Promotes code reuse and modularity by abstracting common counter-related operations.
- **useState hook**: Used within the custom hook to manage the count state and its updates. Simplifies state management by providing a state variable and a corresponding update function.
- **useEffect hook**: Implemented within the custom hook to log the count value when it changes. Enables side effects based on the count state updates.
- **Code organization**: Components and hooks are split into separate files to improve code maintainability and readability. Facilitates separation of concerns and better modularization.
- **Component composition**: Components (`Button`, `Panel`) are composed to build the CounterPage component. Encourages code reuse and modularity by combining smaller, reusable components.
- **Inline styling**: Applied to customize the appearance of the input field using Tailwind CSS utility classes. Provides a quick and efficient way to style the component without external CSS files.
- **Prop passing**: Props are passed between components (`Button`, `Panel`) to customize their behavior and appearance. Allows for flexible customization and reusability of components.
