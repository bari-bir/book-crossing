import { useRef, useState } from "react"
import "../assets/styles/components/customTabs.scss"

type propsInfo = {
    valueList: { value: string; label: string }[]
    onClickTab: (valueTab: string) => void
    activeValue?: string
}

export const CustomTabs = ({ valueList, onClickTab, activeValue }: propsInfo) => {
    const translationTabs = useRef(0)
    const [tab, setTab] = useState<{ value: string; label: string }>({
        value: valueList[0].value,
        label: valueList[0].label,
    })

    const getTranslationValue = (index: number) => {
        return (index * (window.screen.width - 32)) / valueList.length
    }

    const onChangeTabs = (index: number, valueTab: string) => {
        onClickTab(valueTab)
        setTab(valueList.find((value) => value.value === valueTab) || { value: valueList[0].value, label: valueList[0].label })
        translationTabs.current = getTranslationValue(index)
    }

    const isSelectTab = (tabValue: string) => {
        return tab.value === tabValue
    }

    return (
        <div className="tabs-wrapper">
            <div
                className="animation-tabs"
                style={{
                    width: (window.screen.width - 32) / valueList.length,
                    transform: `translateX(${activeValue ? getTranslationValue(valueList.findIndex((item) => item.value === activeValue)) : translationTabs.current}px)`,
                }}
            />

            {valueList.map((item, i) => (
                <div key={i} className="tab-block" onClick={() => onChangeTabs(i, item.value)}>
                    <p
                        className="tab-text"
                        style={{
                            color: (activeValue && item.value !== activeValue) || (!isSelectTab(item.value) && !activeValue) ? "#212121" : "#fff",
                        }}>
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    )
}
