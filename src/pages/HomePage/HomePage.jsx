import { useState } from "react";
//import SectionCubeOld from "../../components/SectionCubeOld/SectionCubeOld";
import { PageWrapper, TitleBox } from "./HomePageStyled";
import SelectLang from "../../components/Buttons/SelectLanguage/SelectLang";
//import DContainer from "../../components/D.Container/DContainer";
//import DContainerUL from "../../components/D.ContainerUL/DContainerUL";
import SectionCube from "../../components/SectionCube/SectionCube";

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
      {/* <SectionCubeOld /> */}
      {/* <DContainer/> */}
      <SectionCube/>
      {/* <DContainerUL/> */}
      
    </PageWrapper>
  );
};

export default HomePage;
