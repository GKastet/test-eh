import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LinksWrapper, SingleLink } from "./SocialLinksStyled";

const SocialLinks = () => {
  return (
    <LinksWrapper>
      <SingleLink
        to="https://github.com/GKastet/test-eh"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub />
      </SingleLink>

      <SingleLink
        to="https://www.linkedin.com/in/konstantin-goncharenko/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaLinkedin />
      </SingleLink>

      <SingleLink
        to="tel:+421950582120"
        type="phone"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaPhoneAlt />
      </SingleLink>

      <SingleLink to="mailto:goncharenko.k.mail@gmail.com">
        <IoMdMail />
      </SingleLink>
    </LinksWrapper>
  );
};

export default SocialLinks;
