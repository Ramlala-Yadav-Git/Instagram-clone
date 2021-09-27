import { useState } from "react"
import { SingleStory } from "./singleStory"
import styles from "./stories.module.css"
import Carousel, { consts } from 'react-elastic-carousel';

const sample = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"

export const Stories = () => {
    const [watch, setWatch] = useState(true)

    const handleStoryClick = () => {

        setWatch(false)
    }

    return <>
        <div className={styles.storiesContainer}>
            <Carousel itemsToShow={5} renderArrow={renderArrow} pagination={false} outerSpacing={0} itemPadding={[1]} >
                <SingleStory watch={watch} img={sample} name={"sample"} />
                <SingleStory watch={false} img={sample} name={"sample"} />
                <SingleStory watch={true} img={sample} name={"sample"} />
                <SingleStory watch={true} img={sample} name={"sample"} />
                <SingleStory watch={true} img={sample} name={"sample"} />
                <SingleStory watch={true} img={sample} name={"sample"} />
                <SingleStory watch={true} img={sample} />
                <SingleStory watch={true} img={sample} />
                <SingleStory watch={true} img={sample} />
            </Carousel>
        </div>
    </>
}

const left = <i className={"fa fa-chevron-circle-left"} style={{ color: "#7a757521", marginTop: "28px", cursor: "pointer", fontSize: "25px" }}></i>
const right = <i className={"fa fa-chevron-circle-right"} style={{ color: "#7a757521", marginTop: "28px", cursor: "pointer", fontSize: "25px" }}></i>

function renderArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? left : right;
    return (
        <>
            <i onClick={onClick} disabled={isEdge} >
                {pointer}
            </i>

        </>
    )

}