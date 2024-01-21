export default function TabButton({ children, onSelect, isSelected }) {
  // how to do it in javascript:
  // document.querySelector('button').addEventListener('click', () => {})
  //how to do it in react:
  //   function handleClick() {
  //     console.log("Hello World!");
  //   }

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
