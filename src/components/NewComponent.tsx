import React from "react";

export const NewComponent = (props: any) => {
    console.log(props);
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr: any, index: number) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    );
                })}
            </ul>
            <button onClick={() => props.onClickFilterHandler("all")}>all</button>
            <button onClick={() => props.onClickFilterHandler("dollar")}>dollar</button>
            <button onClick={() => props.onClickFilterHandler("ruble")}>ruble</button>
        </>
    )
}