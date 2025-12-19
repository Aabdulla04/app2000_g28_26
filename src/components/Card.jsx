export default function Card({ title, text }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
