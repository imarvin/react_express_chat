import React from 'react';
import Moment from 'react-moment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const MessageCard = (props) => {
    const { message, showCard } = props;
    return (
        <div className="chat__card">
            <div className="chat__card-container" >
                <div className="chat__card-flipper" data-flip={showCard}>

                    <div className="chat__card-front">
                        <div className="chat__message-content">{message.message}</div>
                    </div>

                    <div className="chat__card-back">
                        <div className="chat__card-content">
                            <CalendarTodayIcon></CalendarTodayIcon> Active Since &nbsp;<Moment date={message.ts} format="MMM YYYY"></Moment>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MessageCard;
