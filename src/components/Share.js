import React from "react"
import PropTypes from "prop-types"
import {
  FaRedditAlien,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from "react-share"

import "../assets/styles/Share.scss"

const Share = props => {
  const socialConfig = props.socialConfig
  const tag = props.tags
  const urlImage = "http://wild-dev.com/" + socialConfig.config.image
  const url = socialConfig.config.url.toString()
  const title = socialConfig.config.title.toString()
  const summary = socialConfig.config.description

  return (
    <div className="post-social">
      <FacebookShareButton url={url} className="button facebook">
        <span className="icon">
          <FaFacebookF />
        </span>
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        className="button twitter"
        title={title}
        via={socialConfig.twitterUsername.split("@").join("")}
        hashtags={tag}
      >
        <span className="icon">
          <FaTwitter />
        </span>
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        source={url}
        title={title}
        summary={socialConfig.config.description}
        className="button linkedin"
      >
        <span className="icon">
          <FaLinkedinIn />
        </span>
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title} className="button reddit">
        <span className="icon">
          <FaRedditAlien />
        </span>
      </RedditShareButton>
      <WhatsappShareButton
        url={url}
        className="button whatsapp"
        title={title}
        image={urlImage}
      >
        <span className="icon">
          <FaWhatsapp />
        </span>
      </WhatsappShareButton>
    </div>
  )
}

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterUsername: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}
Share.defaultProps = {
  tags: [],
}

export default Share
