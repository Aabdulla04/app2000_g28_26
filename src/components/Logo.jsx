export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-green-700 text-white rounded p-1">
        {/* ikon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      </div>
      <span className="font-bold text-lg text-green-800">
        TuristNet
      </span>
    </div>
  );
}
