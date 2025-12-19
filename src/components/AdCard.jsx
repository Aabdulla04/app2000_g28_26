export default function AdCard({ title, price, location, date, tag }) {
  return (
    <article className="bg-white rounded shadow p-5 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold text-lg">{title}</h3>
        {tag ? (
          <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">
            {tag}
          </span>
        ) : null}
      </div>

      <p className="text-gray-600 mt-2">{location}</p>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <span>{date}</span>
        <span className="font-semibold text-green-700">{price}</span>
      </div>

      <button className="mt-4 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
        Se annonse
      </button>
    </article>
  );
}
