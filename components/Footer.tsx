import { Anchor } from "./CustomHtml";
import twitterLogo from "../images/twitter-logo.svg";
import githubLogo from "../images/github-logo.svg";
import linkedinLogo from "../images/linkedin-logo.svg";
import ReactGA from "react-ga4";

function Footer(): JSX.Element {
  return (
    <>
      <div className="w-full flex">

      </div>
      <footer className="flex flex-col items-center justify-center w-full py-6 border-t">
        <div className="flex items-center justify-center my-4">
          <Anchor
            id="github_logo_footer"
            data-cursor={true}
            href="https://github.com/ahmed-hodhod"
            className="w-8 h-8 mx-4 flex justify-center items-center"
          >
            <img
              data-cursor="github_logo_footer"
              className="w-6 h-6"
              src={githubLogo.src}
              alt="github logo"
            />
          </Anchor>
          <Anchor
            id="linkedin_logo_footer"
            data-cursor={true}
            href="https://linkedin.com/in/ahmed-abdelsalam-hodhod"
            className="w-8 h-8 mx-4 flex justify-center items-center"
          >
            <img
              className="w-6 h-6"
              data-cursor="linkedin_logo_footer"
              src={linkedinLogo.src}
              alt="linkedin logo"
            />
          </Anchor>

        </div>

        
      </footer>
    </>
  );
}

export default Footer;
