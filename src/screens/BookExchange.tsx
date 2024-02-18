import Icon from "@ant-design/react-native/lib/icon"
import Carousel from "@ant-design/react-native/lib/carousel"
import { TouchableOpacity, View, StyleSheet, Image, Text } from "react-native"
import BookImage from "../../assets/images/book-test.png"
import HeartDisactive from "../../assets/images/heart-disactive.png"
import { useRef, useState } from "react"
import { useNavigation } from "@react-navigation/native"

export const BookExchange = () => {
    const carouselElement = useRef<Carousel>(null)
    const navigation = useNavigation()
    const [carouselInfo, setCarouselInfo] = useState<{ selectedIndex: number }>({
        selectedIndex: 0,
    })
    const [info, setInfo] = useState<{ images: number[] }>({
        images: [1, 2, 3],
    })

    function onHorizontalSelectedIndexChange(index: number) {
        setCarouselInfo((carousel) => ({ ...carousel, selectIndex: index }))
    }

    function goToCarousel(index: number) {
        const indexCarousel = index < 0 ? 2 : index > 2 ? 0 : index
        carouselElement.current?.goTo(indexCarousel, true)
        setCarouselInfo((carousel) => ({ ...carousel, selectedIndex: indexCarousel }))
    }

    return (
        <View style={styles.exchange}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ ...styles.topIconWrapper, left: 15 }}>
                <Icon name="arrow-left" style={{ color: "#fff" }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Root" as never)} style={{ ...styles.topIconWrapper, right: 15 }}>
                <Icon name="close" style={{ color: "#fff" }} />
            </TouchableOpacity>
            <View style={styles.carouselWrapper}>
                <Carousel ref={carouselElement} style={{ height: "100%", width: "100%" }} selectedIndex={carouselInfo.selectedIndex} horizontal dots={false} autoplay={false} infinite afterChange={onHorizontalSelectedIndexChange}>
                    {info.images.map((item) => (
                        <Image key={item} style={{ height: "100%", width: "100%", borderRadius: 10 }} resizeMode="contain" source={BookImage} />
                    ))}
                </Carousel>
                <TouchableOpacity onPress={() => goToCarousel(carouselInfo.selectedIndex - 1)} style={{ ...styles.arrowWrapper, left: 14 }}>
                    <Icon name="left" size={"md"} color={"#adadad"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goToCarousel(carouselInfo.selectedIndex + 1)} style={{ ...styles.arrowWrapper, right: 14 }}>
                    <Icon name="right" size={"md"} color={"#adadad"} />
                </TouchableOpacity>
            </View>

            <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>Кемел адам 2020</Text>
                <Text style={{ ...styles.bookDescr, marginTop: 13 }}>Саморазвитие</Text>

                <View style={styles.bookSubInfo}>
                    <Text style={{ ...styles.bookDescr, flex: 1, fontWeight: "300" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ex praesentium quam consequuntur architecto cum, aperiam voluptas similique, possimus totam fugiat eligendi quod odio blanditiis illum tempore quae ab distinctio.
                    </Text>
                    <View style={styles.favoriteBlock}>
                        <Image style={styles.favoriteIcon} source={HeartDisactive} />
                    </View>
                </View>

                <View></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    exchange: {
        position: "relative",
    },
    topIconWrapper: {
        position: "absolute",
        zIndex: 100,
        top: 45,
        height: 32,
        width: 32,
        backgroundColor: "rgba(217, 217, 217, 0.5)",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    carouselWrapper: {
        height: 390,
        width: "100%",
    },
    arrowWrapper: {
        position: "absolute",
        zIndex: 100,
        width: 30,
        height: 30,
        top: "50%",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "rgba(173, 173, 173, .5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    bookInfo: {
        marginTop: 24,
        flexDirection: "column",
        paddingHorizontal: 16,
    },
    bookTitle: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 23,
    },
    bookDescr: {
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 15,
    },
    bookSubInfo: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 25,
    },
    favoriteBlock: {
        width: 26,
        height: 26,
        backgroundColor: "#C8C8C8CC",
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    favoriteIcon: {
        width: 16,
        height: 16,
    },
})
