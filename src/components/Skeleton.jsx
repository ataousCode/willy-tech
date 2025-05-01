function Skeleton({ className = "", ...props }) {
    return <div className={`animate-pulse rounded-md bg-slate-700 ${className}`} {...props} aria-hidden="true" />
  }
  
  export default Skeleton
  