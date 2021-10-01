import styles from "./ProfileTop.module.css"
import Avatar from '@material-ui/core/Avatar';


function ProfileTop(){


return <>
     <div className={styles.mainDiv}>
         <div className={styles.profilePicDiv}>
         <Avatar src="https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png" alt=""  className={styles.profilePic} />
         </div>
         <div className={styles.userInfo}>
            <div className={styles.firstDiv}>
                <div className={styles.userName}>
                     <p className={styles.name1}>username</p>

                </div>
                <div className={styles.editButtonDiv}>
                 <button className={styles.button}>Edit Profile</button>

                </div>
                <div className={styles.stettingDiv}>
                <svg aria-label="Options" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path></svg>

                </div>

            </div>
            <div className={styles.secondDiv}>
                <div className={styles.postFollowers}>
                    <div className={styles.data}>0</div>
                    <div className={styles.text}>posts</div>

                </div>
                <div className={styles.postFollowers}>
                    <div className={styles.data}>16</div>
                    <div className={styles.text}>followers</div>

                </div>
                <div className={styles.postFollowers}>
                    <div className={styles.data}>20</div>
                    <div className={styles.text}>following</div>

                </div>

            </div>
            <div className={styles.thirdDiv}>
                <h3 className={styles.name}>dhruvsurya</h3>

            </div>
            <div className={styles.fourthDiv}>
                <p className={styles.bio}>peace for life</p>

            </div>
        </div>
       

     </div>



</>


}

export default ProfileTop