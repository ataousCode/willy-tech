import Skeleton from "./Skeleton"

function SkeletonContactForm() {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm p-6">
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            {/* Label placeholder */}
            <Skeleton className="h-4 w-16 mb-2" />
            {/* Input placeholder */}
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
          <div className="space-y-2">
            {/* Label placeholder */}
            <Skeleton className="h-4 w-16 mb-2" />
            {/* Input placeholder */}
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        <div className="space-y-2">
          {/* Label placeholder */}
          <Skeleton className="h-4 w-20 mb-2" />
          {/* Input placeholder */}
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          {/* Label placeholder */}
          <Skeleton className="h-4 w-24 mb-2" />
          {/* Textarea placeholder */}
          <Skeleton className="h-32 w-full rounded-md" />
        </div>

        {/* Button placeholder */}
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  )
}

export default SkeletonContactForm
