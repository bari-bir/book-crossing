import { MainNavigation } from "./src/navigation/MainNavigation"
import { Provider } from "react-redux"
import { Text } from "react-native"
import store from "./src/redux/store"
import { useState, useEffect } from "react"
import { loadAsync } from "expo-font"

export default function App() {
    const [fontLoaded, setFontLoaded] = useState<boolean>(false)

    useEffect(() => {
        _loadAssets()
    }, [])

    async function _loadAssets() {
        await loadAsync({
            antoutline: require("@ant-design/icons-react-native/fonts/antoutline.ttf"),
            antfill: require("@ant-design/icons-react-native/fonts/antfill.ttf"),
        })
        setFontLoaded(true)
    }

    if (!fontLoaded) {
        return <Text>Load font</Text>
    }

    return (
        <Provider store={store}>
            <MainNavigation />
        </Provider>
    )
}
