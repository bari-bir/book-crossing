import { ArrowLeftOutlined } from "@ant-design/icons"

export const Header = ({ title, isBack = true }: { title: string; isBack?: boolean }) => {
    return (
        <div style={styles.header}>
            {isBack ? <ArrowLeftOutlined style={styles.iconBack} /> : null}
            <h1 style={styles.title}>{title}</h1>
        </div>
    )
}

const styles: { [key: string]: React.CSSProperties} = {
    header: {
        marginBottom: 20,
        position: "relative",
    },
    iconBack: {
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
        fontSize: 25,
    },
    title: {
        textAlign: "center",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: "29px",
    },
}
