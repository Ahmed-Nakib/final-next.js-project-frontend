import { Star } from "lucide-react"

const StarGroup = ({count}:{count: number}) => {
  return (
    <div className="flex gap-x-1 py-2">
      {[1,2,3,4,5].map((data) => (
        <div key={data}>
            {data > count ? <Star /> : <Star className="text-primary"/> }
        </div>
      ))}
    </div>
  )
}

export default StarGroup
