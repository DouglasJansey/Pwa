import React, { memo } from "react";
import SharedIcon from '../../Image/share.svg';
import CopyIcon from '../../Image/copy.svg'

const navigatorHasShared = navigator.share

const URL = 'http://localhost:3001'

function Actions({post, subject}) {
    const {id, title} = post
    const shareInfo = () =>{
        navigator.share({
            title: `PWA News - ${subject}`,
            text: title,
            url: URL,
        }) 
    }
    const copyInfo = () =>{
        navigator.clipboard.writeText(`${title} - *Learn more about in* ${URL}/${subject}/${id}`)
    }

    const renderAction =()=>{
        const action = navigatorHasShared ? shareInfo : copyInfo

        const icon = navigatorHasShared ? SharedIcon : CopyIcon

        return <img alt="icon" src={icon} className="share-icon" onClick={action} />
    }
    return(
        <div className="share">
            {renderAction()}
        </div>
    )
}
export default memo(Actions);