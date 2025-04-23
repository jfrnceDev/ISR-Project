"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/types/strapi-content-types"

interface CarouselTickerProps {
  items: Navigation['carouselTicker']
  speed?: number
  backgroundColor?: string
  textColor?: string
}

export default function CarouselTicker({
  items = [],
  speed = 30,
  backgroundColor = "#FFFFFF",
  textColor = "#000000"
}: CarouselTickerProps) {
  const [duplicatedItems, setDuplicatedItems] = useState<Navigation['carouselTicker']>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasRendered, setHasRendered] = useState(false)

  useEffect(() => {
    setDuplicatedItems([...items, ...items, ...items, ...items])
  }, [items])

  useEffect(() => {
    setHasRendered(true)
  }, [])

  const duration = 60 - speed * 0.3

  return (
    <div
      className="w-full overflow-hidden border-b border-gray-200"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            },
          }}
        >
          {duplicatedItems && duplicatedItems.map((item, index) => (
            <div
              key={`first-${index}`}
              className="inline-flex items-center px-6 py-2 text-sm font-medium"
            >
              {item?.carouselItemLogo && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.carouselItemLogo.url}`}
                  alt={item.carouselItemLogo.alternativeText || ""}
                  width={16}
                  height={16}
                  className="h-4 w-auto mr-2"
                />
              )}
              {item?.carouselItemTitle}
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["100%", "0%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            },
          }}
        >
          {duplicatedItems && duplicatedItems.map((item, index) => (
            <div
              key={`second-${index}`}
              className="inline-flex items-center px-6 py-2 text-sm font-medium"
            >
              {item?.carouselItemLogo && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.carouselItemLogo.url}`}
                  alt={item.carouselItemLogo.alternativeText || ""}
                  width={16}
                  height={16}
                  className="h-4 w-auto mr-2"
                />
              )}
              {item?.carouselItemTitle}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}