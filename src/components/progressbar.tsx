export default function ProgressBar({ percentage }: { percentage: string }) {
  return (
    <>
      <div className="w-full h-4 bg-gray-200 rounded-3xl">
        <div
          style={{ width: percentage }}
          className={`h-4 bg-[#3f1e63] rounded-3xl flex items-center justify-end pr-2`}>
          <p className="text-xs text-white">{percentage}</p>
        </div>
      </div>
    </>
  );
}
