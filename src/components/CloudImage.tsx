import { Image } from "antd"
import { useMemo } from "react"

type propsInfo = {
    src: string
    height?: number | string
    width?: number | string
    className?: string
    isPreview?: boolean 
}

export const CloudImage = ({ src, height = 35, width = 35, className = "cloud-image", isPreview = true }: propsInfo) => {
    const urlImg = useMemo(() => {
        if (src && src.indexOf("http") !== -1) {
            return src
        }
        return `${import.meta.env.VITE_API_URL}public/get_resource?name=${src}`
    }, [src])

    return (
        <Image
            preview={isPreview}
            className={className}
            src={urlImg}
            height={height}
            width={width}
            alt="image"
            fallback="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
        />
    )
}
