import clsx from "clsx"
import Link from "next/link"
import { CategoryData } from "types/global"
import Thumbnail from "../thumbnail"

const CategoryPreview = ({
  id,
  title,
  name,
  
}: CategoryData) => {
  return (
    <Link href={`/category/${id}`}>
      <div>
      
        <div className="text-base-regular mt-2">
          <span>{title}</span>
        </div>

        <div className="text-base-regular mt-2">
          <span>{name}</span>
        </div>
      </div>
    </Link>
  )
}

export default CategoryPreview
