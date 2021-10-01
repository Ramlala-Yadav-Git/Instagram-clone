import { SingleStory } from "./SingleStory"
import styles from "./Stories.module.css"
import Styled from "styled-components"
import Carousel, { consts } from 'react-elastic-carousel';



const ViewStoryWrapper = Styled.div`

    background-image: ${props => `url(${props.img})`};
    background-size: cover;
    background-repeat: no-repeat ;
    width:90%;
    margin:auto;
    border-radius:10px;
    padding:10px;
    `
const StoryWrapper = Styled.div`

    width:30%;
    margin:auto;
    border-radius:5px;
    /* padding-top:100px; */
    `
export const ViewStory = () => {

    const sample = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"


    return <>


        <div className={styles.viewStory}>
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png" alt="instagram" />
            <StoryWrapper>

                <div className={styles.progressBar}>

                    <Progress p={10} />
                    <Progress p={10} />

                </div>
                <Carousel itemsToShow={1} renderArrow={renderArrow} pagination={false} outerSpacing={-10} itemPadding={[0]} >
                    <ViewStoryWrapper img={sample}>
                        <div className={styles.singleStory}>
                            <SingleStory img={sample} name={"ramlala"} />
                            <div className={styles.singleStoryButtons} >
                                <i className="fa fa-play"></i>
                                <i class="fa fa-volume-off"></i>
                                <i class="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </ViewStoryWrapper>
                    <ViewStoryWrapper img={sample}>
                        <div className={styles.singleStory}>
                            <SingleStory img={sample} name={"ramlala"} />
                            <div >
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
        <div className="progress" style={{ height: "3px", background: "gray", width: "10%" }} >
            <div className="progress-bar progress-bar-gray" role="progressbar" aria-valuenow="10" aria-valuemin="10" aria-valuemax="100" style={{ width: `${p}% `, "background": "white" }}>
            </div>
        </div>
    </>
}

const left = <i className={"fa fa-chevron-circle-left"} style={{ color: "#d3cdcde6", marginTop: "250px", cursor: "pointer", fontSize: "25px" }}></i>
const right = <i className={"fa fa-chevron-circle-right"} style={{ color: "#e9dcdcf9", marginTop: "250px", cursor: "pointer", fontSize: "25px" }}></i>

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