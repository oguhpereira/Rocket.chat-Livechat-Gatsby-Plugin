import React from 'react'
import PropTypes from 'prop-types'


const RocketLiveChat = (props) => {
    console.log(props)
    function setLiveChat(w, d, s, u) {
        w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
        var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
        j.async = true; j.src = props.uri+'/packages/rocketchat_livechat/assets/rocketchat-livechat.min.js?_=201702160944';
        h.parentNode.insertBefore(j, h);
    }
    return (

        <div> oi{setLiveChat(window, document, 'script', props.uri+'/livechat')}</div>   
    )
}

  
export default RocketLiveChat


  