import CardSkeletonStyled from "./CardSkeleton.styled"

export const CardSkeleton = () => {
    return (
        <>
            <CardSkeletonStyled>
                <div className="divImage" />
                <div className="pizza-data">
                    <div className="h1"></div>
                    <div className="description"></div>
                    <hr />
                    <div className="priceItem"></div>
                </div>
            </CardSkeletonStyled>
        </>
    )
}
