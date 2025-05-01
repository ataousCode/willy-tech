import Skeleton from "./Skeleton"

function SkeletonTestimonialCard() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
      <div className="p-6">
        {/* Quote mark placeholder */}
        <Skeleton className="h-8 w-8 mb-4" />

        {/* Quote text placeholder */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>

      <div className="border-t border-slate-700 bg-slate-800/50 p-6">
        <div className="flex items-center">
          {/* Avatar placeholder */}
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="ml-4">
            {/* Name placeholder */}
            <Skeleton className="h-4 w-24 mb-2" />
            {/* Position placeholder */}
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonTestimonialCard
