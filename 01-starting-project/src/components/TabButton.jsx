export default function TabButton({ children, onSelect }) {
  // how to do it in javascript:
  // document.querySelector('button').addEventListener('click', () => {})
  //how to do it in react:
  //   function handleClick() {
  //     console.log("Hello World!");
  //   }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
