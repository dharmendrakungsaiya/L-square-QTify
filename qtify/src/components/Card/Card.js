import React from "react";
import {Chip, Tooltip} from "@mui/material"
import StyleSheet from "../../components/Card/Card.module.css";
import "typeface-poppins";

const Card = ({data, type}) => {

    const getCard = (type) => {

        switch(type){
            case "album" : {
                const {image,follows,title,songs} = data;
                return (
                    <Tooltip title={`${songs?.length} songs`} placement='top' arrow>
          <div className={StyleSheet.wrapper}>
            <div className={StyleSheet.card}>
              <img src={image} alt='album' className={StyleSheet.img}/>
              <div className={StyleSheet.banner}>
                <Chip label={`${follows} Follows`} className={StyleSheet.chip} size="small"/>
              </div>
            </div>
            <div className={StyleSheet.titleWrapper}>
              <p style={{color: "white"}}>{title}</p>
            </div>
          </div>
          </Tooltip>
                )
            }

            case "song" : {
                const {image,likes,title,songs} = data;

                return(
                    <Tooltip title={`${songs?.length} songs`} placement='top' arrow>
          <div className={StyleSheet.wrapper}>
            <div className={StyleSheet.card}>
              <img src={image} alt='song' loading='lazy'/>
              <div className={StyleSheet.banner}>
                <div className={StyleSheet.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={StyleSheet.titleWrapper}>
              <p style={{color: "white"}}>{title}</p>
            </div>
          </div>
          </Tooltip>
                )
            }
             
            case 'songFilter' : {
                const {image,likes,title} = data;
                return(
                    <div className={StyleSheet.wrapper}>
            <div className={StyleSheet.card}>
              <img src={image} alt='song' loading='lazy' className={StyleSheet.img}/>
              <div className={StyleSheet.banner}>
                <Chip label={`${likes} Likes`} className={StyleSheet.chip} size="small"/>
              </div>
            </div>
            <div className={StyleSheet.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
                )
                            
            }

            case 'default':
                return <></>
        }
    } 
     return getCard(type);
}

export default Card;