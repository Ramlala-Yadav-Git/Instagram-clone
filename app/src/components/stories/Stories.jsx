import { useEffect, useState } from "react"
import { SingleStory } from "./SingleStory"
import styles from "./Stories.module.css"
import axios from "axios"
import Carousel, { consts } from 'react-elastic-carousel';

const sample = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"

export const Stories = () => {
    const [watch, setWatch] = useState(true)
    const [stories, setStories] = useState([])
    useEffect(() => {
        getStories()
    }, [])

    const handleStoryClick = () => {

        setWatch(false)
    }
    const getStories = () => {
        axios.get("http://localhost:8000/story").then((res) => {
            console.log(res.data.data);
            setStories(res.data.data)
        })
    }

    return <>
        <div className={styles.storiesContainer}>
            <Carousel itemsToShow={5 + 1
            } renderArrow={renderArrow} pagination={false} outerSpacing={-8} itemPadding={[0]} >

                {
                    stories && stories.map((el) => {
                        return <>
                            <SingleStory img={el.img} name={el.username} />
                        </>
                    })
                }
            </Carousel>
        </div>
    </>
}

const left = <i className={"fa fa-chevron-circle-left"} style={{ color: "#7a757521", marginTop: "20px", cursor: "pointer", fontSize: "25px" }}></i>
const right = <i className={"fa fa-chevron-circle-right"} style={{ color: "#7a757521", marginTop: "20px", cursor: "pointer", fontSize: "25px" }}></i>

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