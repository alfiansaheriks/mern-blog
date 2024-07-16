import React from 'react'
import { DlbBg, IkonDiscord, IkonE, IkonFacebook, IkonGithub, IkonInstagram, IkonTelegram, IkonTwitter } from '../../../assets'
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div>
                <img className="logo" src={DlbBg} />
            </div>
            <div className="social-wrapper">
                <Icon img={IkonFacebook} />
                <Icon img={IkonInstagram} />
                <Icon img={IkonTwitter} />
                <Icon img={IkonTelegram} />
                <Icon img={IkonDiscord} />
                <Icon img={IkonGithub} />
            </div>
        </div>
        <div className="copyright">
            <p>Copyright</p>
        </div>
    </div>
  )
}

export default Footer
