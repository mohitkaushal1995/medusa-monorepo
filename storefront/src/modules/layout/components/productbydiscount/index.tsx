"use client"


import Image from "next/image"
import clsx from "clsx"
import {  useProducts } from "medusa-react"
import Link from "next/link"
const ProductByDiscount = () => {
  const { products } = useProducts()
  const discountedProducts = products?.filter((b) => b.discountable );

  return (
   
    <div className="bg-red-200 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">Shop By Discount</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 ">
            {discountedProducts?.map((b) => (
              
                  <li key={b.id}>
                    <Link href={`/products/${b.handle}`}>
                      <div className="relative aspect-[29/34] w-full">
                      <Image
                        src={b.thumbnail ?? ''}
                        alt=""
                        width={400}
                        height={400}
                        
                      />
                      {b.title}
                      </div>
                    </Link>
                  </li>
                 
                ))
              }
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductByDiscount
