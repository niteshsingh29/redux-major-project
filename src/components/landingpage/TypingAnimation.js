import Typed from "react-typed";
import { Heading } from "@chakra-ui/react";
import Landingpage from "./Landingpage";
const TypingAnimation = () => {
  return (
    <>
      <Landingpage />
      <Heading isTruncated fontSize="40px">
        <Typed
          strings={[
            "Welcome to ProLance Students Data Portal...",
            "Keep Students Data upDated Anywhere Anytime ",
            "Add Students Data in 1 Click!",
          ]}
          typeSpeed={30}
          backSpeed={20}
          loop
          className="py-1"
          style={{
            position: "absolute",
            top: "30%",
            left: "10%",
            color: "white",
            backgroundColor: "rgba (255, 0, 0, 0.5)",
            boxShadow: "1px 3px 8px 1px #b8ad49",
            webkitBoxShadow: "1px 3px 8px 1px #b8ad49",
          }}
        />
      </Heading>
    </>
  );
};

export default TypingAnimation;
