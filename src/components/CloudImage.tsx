import { Image } from "antd"

export const CloudImage = ({ src, height = 35, width = 35 }: { src: string; height?: number | string; width?: number | string }) => {
    return (
        <Image
            className="cloud-image"
            src={src}
            height={height}
            width={width}
            alt="image"
            fallback="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
        />
    )
}
