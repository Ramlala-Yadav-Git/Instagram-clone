import { SingleStory } from "./SingleStory"
import styles from "./Stories.module.css"
import Styled from "styled-components"
import Carousel, { consts } from 'react-elastic-carousel';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory, Link } from "react-router-dom"



const ViewStoryWrapper = Styled.div`

    background-image: ${props => `url(${props.img})`};
    background-size: cover;
    background-repeat: no-repeat ;
    width:84%;
    height:90vh;
    margin:auto;
    border-radius:5px;
    padding:10px;
    `
const StoryWrapper = Styled.div`

    width:30%;
    margin:auto;
    border-radius:5px;
    /* padding-top:100px; */
    `
const sample = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
export const ViewStory = () => {
    const [story, setStory] = useState([])
    const [show, setShow] = useState("")
    const history = useHistory()
    const [progress, setProgress] = useState(0)
    const params = useParams()
    const id = params.id;
    useEffect(() => {
        move()
        getStory()
        // filterData()

    }, [])
    const getStory = () => {
        axios.get(`http://localhost:8000/story/${id}`).then((res) => {
            setStory(res.data.data)
            // filterData()
            console.log(res.data.data.img, "id", id)
        })

    }


    // increaseProgress()
    var i = 0;
    function move() {
        if (i === 0) {
            i = 1;
            var width = 1;
            var id = setInterval(frame, 100);
            function frame() {
                if (width >= 101) {
                    clearInterval(id);
                    i = 0;
                    history.push("/")
                } else {
                    setProgress(progress => width)
                    width++;
                }
            }
        }
    }

    const filterData = () => {

        // console.log(params, id)
        const filt = story.filter((el) => {

            return el._id === id
        })

        setShow(filt)
        console.log(filt, "filterd story")
    }

    return <>


        <div className={styles.viewStory}>
            <Link to="/">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png" alt="instagram" />
            </Link>
            <StoryWrapper>

                <div className={styles.progressBar}>
                    <Progress p={progress} />
                </div>
                <Carousel itemsToShow={1} renderArrow={renderArrow} pagination={false} outerSpacing={-10} itemPadding={[0]} >
                    <ViewStoryWrapper img={story.img}>
                        <div className={styles.singleStory}>
                            <SingleStory img={story.img} />
                            <div className={styles.singleStoryButtons} >
                                <i className="fa fa-play"></i>
                                <i class="fa fa-volume-off"></i>
                                <i class="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </ViewStoryWrapper>

                </Carousel>
            </StoryWrapper>
        </div>
    </>
}



const Progress = ({ p }) => {
    return <>
        <div className="progress" style={{ height: "3px", background: "gray", width: "50px" }} >
            <div className="progress-bar progress-bar-gray" role="progressbar" aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" style={{ width: `${p}% `, "background": "white" }}>
            </div>
        </div>
    </>
}

const left = <i className={"fa fa-chevron-circle-left"} style={{ color: "#d3cdcde6", marginTop: "250px", cursor: "pointer", fontSize: "15px" }}></i>
const right = <i className={"fa fa-chevron-circle-right"} style={{ color: "#e9dcdcf9", marginTop: "250px", cursor: "pointer", fontSize: "15px" }}></i>

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