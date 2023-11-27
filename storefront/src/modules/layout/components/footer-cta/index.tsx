 "use client"

 import UnderlineLink from "@modules/common/components/underline-link"
 import Image from "next/image"
 import clsx from "clsx"
 import { useProductCategories , useProducts} from "medusa-react"
 import Link from "next/link"
 const FooterCTA = () => {
  const { product_categories } = useProductCategories()
  const {  products  } = useProducts()



  return ( 
    <div className="bg-blue-200 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">SHOP BY CATEGORY </h3>
          <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8 ">
            {product_categories?.map((c) => {
              if (c.parent_category) {
                return
              }
              const imageUrl = "/woman-posing-jumping-while-holding-shopping-bags.jpg"
              return (
                <li className="flex flex-col gap-2" key={c.id}>
                  <Link href={`/${c.handle}`}>
                    <Image
                      src={imageUrl}
                      alt=""
                      width={250}
                      height={250}
                    />
                     {c.name}
                  </Link>
                 
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default FooterCTA





