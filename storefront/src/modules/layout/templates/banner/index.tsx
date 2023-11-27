"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Banner = () => {


  return (
    <div style={{ position: "relative" }}>
      <Image
        src="/freestocks-_3Q3tsJ01nc-unsplash.jpg"
        alt=""
        width={500}
        height={500}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div
        style={{
          position: "absolute",
          color: "#FFFFFF",
          top: "2rem",
          backgroundColor: "rgba(128, 128, 128, 0.3)",
          padding: "1rem",
          width: "100%",
          fontFamily: "sans-serif",
        }}
      >
       Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
          <Link href={`/store`}>
          <button
            style={{
              padding: "0.5rem 1rem",
              background: "#FF0000", 
              color: "#FFFFFF", 
              cursor: "pointer",
             
            }}
          >
            SHOW NOW
          </button>
          </Link>
      
      </div>
    </div>
  )
}
