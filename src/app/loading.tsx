export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2">
        <div className="animate-pulse rounded-full bg-gray-500 h-12 w-12"></div>
        <div className="space-y-2">
            <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[200px]"> </div>
            <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[170px]"> </div>
        </div>
        </div>
    </div>
    
  )
}
