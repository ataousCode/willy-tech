import Skeleton from "./Skeleton"

function SkeletonStats() {
  return (
    <div className="rounded-lg bg-slate-800 p-8 text-center shadow-sm">
      {/* Number placeholder */}
      <Skeleton className="h-10 w-16 mx-auto mb-2 bg-slate-700" />
      {/* Label placeholder */}
      <Skeleton className="h-4 w-32 mx-auto bg-slate-700" />
    </div>
  )
}

export default SkeletonStats
