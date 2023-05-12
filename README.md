# pf-react: a react portfolio showcase using Tailwind

## Components and technologies used -

## custom navigation implementation

<details>
  <summary>Dropdown component: by incorporating these React hooks, technologies, and concepts, the component achieves dynamic behavior, manages state, adds event listeners, handles outside click events, and styles the dropdown using Tailwind CSS classes.</summary>

1. **React Hooks**:
   - `useState`: Used to manage state within the functional component (`isOpen`).
   - `useEffect`: Used to handle side effects and perform actions on component mount and unmount (adding and removing event listeners).
   - `useRef`: Used to create a reference to an element (`divEl`) and access it across renders.

2. **React Icons**: The component imports the `GoChevronDown` icon from the `react-icons/go` package and uses it as an icon within the dropdown.

3. **Component Composition**: The component utilizes the `Panel` component imported from "./Panel" to compose the main dropdown button and the dropdown options panel.

4. **Event Handling**: The component defines event handler functions (`handleClick` and `handleOptionClick`) to handle click events on the dropdown and its options.

5. **JSX Markup**: The component uses JSX syntax to define the component's structure and render the HTML-like markup.

6. **Conditional Rendering**: The component conditionally renders the options panel based on the `isOpen` state variable.

7. **CSS Styling**: The component uses inline CSS and applies Tailwind CSS class names (`hover:bg-sky-100`, `rounded`, `cursor-pointer`, `p-1`, etc.) to style the various elements.

8. **Tailwind CSS**: The component applies Tailwind CSS utility classes for easy and rapid styling of components.

9. **HTML and JavaScript**: The component is embedded within an HTML file and utilizes JavaScript to add interactivity and behavior to the component.

10. **Outside Click Handling**: The `useEffect` hook is used to add an event listener to the document to handle clicks outside the dropdown component (`divEl`). This concept is used to close the dropdown when clicking outside of it.

</details>