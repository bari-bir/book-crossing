import { ArrowLeftOutlined } from "@ant-design/icons"

export const Header = ({ title, isBack = true }: { title: string; isBack?: boolean }) => {
    return (
        <div style={{ ...styles.header }}>
            {isBack ? <ArrowLeftOutlined style={{ ...styles.iconBack }} /> : null}
            <h1 style={{ ...styles.title }}>{title}</h1>
        </div>
    )
}

const styles: { header: React.CSSProperties; iconBack: React.CSSProperties; title: React.CSSProperties } = {
    header: {
        margin: "20px 0",
        position: "relative",
    },
    iconBack: {
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
    },
    title: {
        textAlign: "center",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: "29px",
    },
}
