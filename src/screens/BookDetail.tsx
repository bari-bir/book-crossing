import { Text, View, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from "react-native"
import BookImage from "../../assets/images/book-test.png"
import HeartDisactive from "../../assets/images/heart-disactive.png"
import Button from "@ant-design/react-native/lib/button"
import Carousel from "@ant-design/react-native/lib/carousel"
import Icon from "@ant-design/react-native/lib/icon"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/MainNavigation"
import { useRef, useState } from "react"

type NavigateType = CompositeNavigationProp<BottomTabNavigationProp<RootStackParamList, "Root">, NativeStackNavigationProp<RootStackParamList, "BookDetail">>

export const BookDetail = () => {
    const { height } = useWindowDimensions()
    const carouselElement = useRef<Carousel>(null)
    const navigation = useNavigation<NavigateType>()
    const [dataList, setDataList] = useState<number[]>([1, 2, 3])
    const [carousel, setCarousel] = useState<{ selectIndex: number; autoplay: boolean }>({
        selectIndex: 0,
        autoplay: false,
    })

    function onHorizontalSelectedIndexChange(index: number) {
        /**
         * @TODO fix when first slide change index will not find
         */
        setCarousel((carousel) => ({ ...carousel, selectIndex: index }))
    }

    function goToCarousel(index: number) {
        const indexCarousel = index < 0 ? 2 : index > 2 ? 0 : index
        carouselElement.current?.goTo(indexCarousel)
        setCarousel((carousel) => ({ ...carousel, selectIndex: indexCarousel }))
    }

    return (
        <View style={{ position: "relative" }}>
            <Carousel ref={carouselElement} style={styles.carouselWrapper} selectedIndex={carousel.selectIndex} autoplay={carousel.autoplay} infinite horizontal afterChange={onHorizontalSelectedIndexChange} dots={false}>
                {dataList.map((item) => (
                    <Image key={item} resizeMode="contain" style={{ width: "100%", height: "100%" }} source={BookImage}></Image>
                ))}
            </Carousel>
            <View style={styles.backImg}>
                <TouchableOpacity style={{ ...styles.closeIcon, top: -height + 45 }} onPress={() => navigation.goBack()}>
                    <Icon name="close" style={{ color: "#fff" }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goToCarousel(carousel.selectIndex - 1)} style={{ ...styles.arrowWrapper, top: -height / 2, left: 14 }}>
                    <Icon name="left" size={"md"} color={"#adadad"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goToCarousel(carousel.selectIndex + 1)} style={{ ...styles.arrowWrapper, top: -height / 2, right: 14 }}>
                    <Icon name="right" size={"md"} color={"#adadad"} />
                </TouchableOpacity>
                <View style={styles.bookWrapper}>
                    <View style={styles.bookInfo}>
                        <Text style={styles.bookTitle}>Кемел адам</Text>
                        <Text style={{ ...styles.bookTitle, fontSize: 14 }}>2020</Text>
                        <Text style={styles.bookDescr}>Саморазвитие</Text>
                    </View>
                    <View style={styles.bookSubInfo}>
                        <Text style={{ ...styles.bookDescr, flex: 1 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ex praesentium quam consequuntur architecto cum, aperiam voluptas similique, possimus totam fugiat eligendi quod odio blanditiis illum tempore quae ab distinctio.
                        </Text>
                        <View style={styles.favoriteBlock}>
                            <Image style={styles.favoriteIcon} source={HeartDisactive} />
                        </View>
                    </View>

                    <View style={styles.dots}>
                        {dataList.map((item) => (
                            <View key={item} style={{ ...styles.dotsStyle, backgroundColor: carousel.selectIndex === item - 1 ? "#111" : "rgba(255, 255, 255, 0)" }}></View>
                        ))}
                    </View>

                    <Button type="primary" style={styles.btnExchange} onPress={() => navigation.navigate("BookExchange", { bookId: "1" })}>
                        Exchange
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    carouselWrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    backImg: {
        width: "100%",
        position: "absolute",
        bottom: 25,
        left: 0,
        zIndex: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    closeIcon: {
        position: "absolute",
        right: 24,
        height: 32,
        width: 32,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "rgba(217, 217, 217, 0.5)",
    },
    bookWrapper: {
        width: "90%",
        position: "absolute",
        bottom: 25,
        borderRadius: 20,
        minHeight: 262,
        backgroundColor: "#fff",
        paddingTop: 16,
        paddingBottom: 25,
        paddingHorizontal: 30,
    },
    bookInfo: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    bookTitle: {
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 24,
    },
    bookDescr: {
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 13,
    },
    bookSubInfo: {
        marginTop: 20,
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
    btnExchange: {
        borderWidth: 0,
        marginTop: 24,
        backgroundColor: "#525DDD",
    },
    arrowWrapper: {
        position: "absolute",
        zIndex: 100,
        width: 30,
        height: 30,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "rgba(173, 173, 173, .5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    dots: {
        marginTop: 5,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    dotsStyle: {
        width: 8,
        height: 8,
        borderRadius: 100,
        borderStyle: "solid",
        borderColor: "#111",
        borderWidth: 2,
    },
})
