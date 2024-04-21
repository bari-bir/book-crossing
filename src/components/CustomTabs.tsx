import { useRef, useState } from "react"
import "../assets/styles/components/customTabs.scss"

type propsInfo = {
    valueList: { value: string; label: string }[]
    onClickTab: (valueTab: string) => void
}

export const CustomTabs = ({ valueList, onClickTab }: propsInfo) => {
    const translationTabs = useRef(0)
    const [tab, setTab] = useState<{ value: string; label: string }>({
        value: valueList[0].value,
        label: valueList[0].label,
    })

    const onChangeTabs = (index: number, valueTab: string) => {
        onClickTab(valueTab)
        setTab(valueList.find((value) => value.value === valueTab) || { value: valueList[0].value, label: valueList[0].label })
        translationTabs.current = (index * (window.screen.width - 32)) / valueList.length
    }

    const isSelectTab = (tabValue: string) => {
        return tab.value === tabValue
    }

    return (
        <div className="tabs-wrapper">
            <div
                className="animation-tabs"
                style={{ width: (window.screen.width - 32) / valueList.length, transform: `translateX(${translationTabs.current}px)` }}
            />

            {valueList.map((item, i) => (
                <div key={i} className="tab-block" onClick={() => onChangeTabs(i, item.value)}>
                    <p className="tab-text" style={{ color: !isSelectTab(item.value) ? "#212121" : "#fff" }}>
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    )
}
