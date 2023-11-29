import { useState } from "react";
import SectionCube from "../../components/SectionCube/SectionCube";
import { PageWrapper, TitleBox } from "./HomePageStyled";
import SelectLang from "../../components/SelectLanguage/SelectLang";

const HomePage = () => {
  
  const [lang, setLang] = useState("eng");

  const changeLanguage = (evt) => {
    const currentLang = evt.currentTarget.value.toLowerCase();
    setLang(currentLang);
  };

  return (
    <PageWrapper>
      <TitleBox>
        {lang==="eng"&&<h2>Cube</h2>}
        {lang==="cz"&&<h2>Kocka</h2>}        
        <SelectLang lang={lang} changeLanguage={changeLanguage} />
      </TitleBox>
      {lang==="eng"&&<h3>rotate cubes by clicking</h3>}
      {lang==="cz"&&<h3>otoc kocky kliknutim</h3>}
      <SectionCube />
    </PageWrapper>
  );
};

export default HomePage;
