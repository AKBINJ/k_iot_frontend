import ToggleSection from "@/components/ToggleSection";
import React from "react";
import A_CSS from "./A_CSS";
import B_Module from "./B_Module";
import C_StyleComponents from "./C_StyleComponents";
import D_Emothon from "./D_Emothon";
import EmothonPractice from "./emothon-practice/EmothonPractice";

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        === 리액트 스타일(Style) ===
      </h1>

      <ToggleSection title="1. 일반 CSS">
        <A_CSS />
      </ToggleSection>

      <ToggleSection title="2. Module CSS">
        <B_Module />
      </ToggleSection>

      <ToggleSection title="3. Styled Components">
        <C_StyleComponents />
      </ToggleSection>

      <ToggleSection title="4. Emothon">
        <D_Emothon />
      </ToggleSection>

      <ToggleSection title="5. Emothon + 반응형">
        <EmothonPractice />
      </ToggleSection>
    </div>
  );
}

export default Index;
