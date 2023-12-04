import { useState } from "react";
import SelectLang from "../../components/Buttons/SelectLanguage/SelectLang";
import CubeSection from "../../components/Cube/CubeSection/CubeSection";
import CubeSection2 from "../../components/Cube2/CubeSection2/CubeSection2";
import {  
  PageWrapper,
  SectionsWrapper,
  TitleBox,
} from "./HomePageStyled";
import SocialLinks from "../../components/Buttons/SocialLinks/SocialLinks";

const HomePage = () => {
  const [lang, setLang] = useState("eng");

  const changeLanguage = (evt) => {
    const currentLang = evt.currentTarget.value.toLowerCase();
    setLang(currentLang);
  };

  return (
    <PageWrapper>
      <TitleBox>
        {lang === "eng" && <h2>Cube</h2>}
        {lang === "cz" && <h2>Kocka</h2>}
        <SelectLang lang={lang} changeLanguage={changeLanguage} />
      </TitleBox>
      {lang === "eng" && <h3>rotate cubes by clicking</h3>}
      {lang === "cz" && <h3>otoc kocky kliknutim</h3>}
      <SectionsWrapper>
        <CubeSection lang={lang}/>
        <CubeSection2 lang={lang}/>
      </SectionsWrapper>
      <SocialLinks />
    </PageWrapper>
  );
};

export default HomePage;
