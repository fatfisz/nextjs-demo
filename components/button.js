export default function Button({ children }) {
  return (
    <button
      className="btn btn-secondary"
      type="button"
    >
      {children}
    </button>
  );
}
