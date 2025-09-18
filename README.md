



## Student List Rendering Example

This project demonstrates **list rendering in React with Vite**.  
A list of student names is displayed dynamically using the `map()` function, with each list item assigned a unique `key` prop.

### Screenshot
Below is a screenshot of the app running on `http://localhost:5173/`:

![WhatsApp Image 2025-09-11 at 13 23 39_bc9c0630](https://github.com/user-attachments/assets/87ec51a7-66d7-4d02-a782-adf708fd73ce)

### Explanation
- A predefined array of students (`Mahesh, Gani, Harini, Sai`) is stored in the component.  
- Using the `map()` function, each student is rendered as an `<li>` element.  
- The `key` prop ensures that each list item is uniquely identifiable by React.  
- Example code:  
  ```jsx
  {students.map((student) => (
    <li key={student.id}>{student.name}</li>
  ))}
