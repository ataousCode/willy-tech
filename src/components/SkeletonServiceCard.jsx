import Skeleton from "./Skeleton"

function SkeletonServiceCard() {
  return (
    <div className="group overflow-hidden rounded-lg border border-slate-700 bg-slate-800 p-6">
      <div className="flex flex-col space-y-4">
        {/* Icon placeholder */}
        <Skeleton className="h-10 w-10 rounded-md" />

        {/* Title placeholder */}
        <Skeleton className="h-7 w-3/4" />

        {/* Description placeholder */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>

        {/* Features placeholder */}
        <div className="mt-2 space-y-3">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonServiceCard
