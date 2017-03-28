export default function Button({ children }) {
  return (
    <button
      className="btn btn-secondary special"
      type="button"
    >
      {children}

      <style jsx>{`
        .special {
          color: blueviolet;
        }
      `}</style>
    </button>
  );
}
