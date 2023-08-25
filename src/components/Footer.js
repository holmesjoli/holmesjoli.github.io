import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return(
        <div className="Footer">
            <div className="Social-media">
                <a href="https://www.linkedin.com/in/joli-holmes/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="mailto:holmesjoli@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
                <a href="https://github.com/holmesjoli"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    )
}
