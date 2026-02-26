export default function OutputPanel({ output }) {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg mt-6 shadow">
      <h2 className="font-semibold">Output Panel:</h2>
      <p>{output}</p>
    </div>
  );
}