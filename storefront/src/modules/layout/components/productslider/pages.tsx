"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import Image from "next/image"

import { useProducts } from "medusa-react"
import Link from "next/link"
const ProductSlider = () => {
  const { products } = useProducts()

  return (
    <Carousel showThumbs={false} autoPlay >
      {products?.map((item) => (
        <div key={item.id}>
          <Link href={`/products/${item.handle}`}>
          <div style={{ width: '500px', height: '600px' }}>
              <Image
                src={item.thumbnail ?? ""}
                alt=''
                layout="fill"
                objectFit="cover"
              />
             
            </div>
            {item.title}
        
          </Link>
        </div>
      ))}
    </Carousel>
  )
}

export default ProductSlider
