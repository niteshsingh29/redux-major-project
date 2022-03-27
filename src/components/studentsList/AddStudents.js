import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  extendTheme,
  Box,
  Container,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
// import { collectStudentList } from "../../action/index";
import { useState } from "react";
import Typed from "react-typed";
import { Heading } from "@chakra-ui/react";
//import font__theme from "../Theme/Font";
import { addStudent } from "../../StateManagement/reducer1";
import Landingpage from "../landingpage/Landingpage";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "#d4dc87",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});
export default function AddStudents() {
  const [first__Name, setfirst__Name] = useState("");
  const [last__Name, setlast__Name] = useState("");
  const dispatch = useDispatch();
  const student__list = useSelector((state) => state.students.value);

  console.log(first__Name, last__Name); // to  add students name
  return (
    <>
      <Landingpage />
      <ChakraProvider theme={theme}>
        <Container
          maxW="container.sm"
          className="Add-students py-5"
          style={{
            backgroundColor: "rgba (255, 0, 0, 0.5)",
            boxShadow: "1px 3px 8px 1px #b8ad49",
            webkitBoxShadow: "1px 3px 8px 1px #b8ad49",
          }}
        >
          <Box p={8}>
            <FormControl
              variant="floating"
              id="first-name"
              isRequired
              isInvalid
            >
              <Input
                placeholder=" "
                className="text-white"
                style={{
                  color: "#ffe60a",
                  boxShadow: "0 0 0 1px #ffffff",
                  borderColor: "#ffeb3b",
                }}
                value={first__Name}
                onChange={(e) => setfirst__Name(e.target.value)}
              />
              <FormLabel>First name</FormLabel>
              <FormErrorMessage style={{ color: "#d7c522" }}>
                Student First name is invalid
              </FormErrorMessage>
            </FormControl>

            <FormControl
              variant="floating"
              id="first-name"
              isRequired
              isInvalid
              className="mt-3"
            >
              <Input
                placeholder=" "
                className="text-white"
                style={{
                  color: "#ffe60a",
                  boxShadow: "0 0 0 1px #ffffff",
                  borderColor: "#ffeb3b",
                }}
                value={last__Name}
                onChange={(e) => setlast__Name(e.target.value)}
              />
              <FormLabel>Last name</FormLabel>
              <FormErrorMessage style={{ color: "#d7c522" }}>
                Student Last name is invalid
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Button
            colorScheme="yellow"
            className="mx-4"
            onClick={() => {
              dispatch(
                addStudent({
                  id: student__list[student__list.length - 1].id + 1,
                  first__Name,
                  last__Name,
                })
              );
            }}
          >
            Add Student
          </Button>
        </Container>
      </ChakraProvider>
      <Heading isTruncated fontSize="40px">
        <Typed
          strings={["Add Students Data in 1 Click!"]}
          typeSpeed={35}
          backSpeed={22}
          loop
          className="py-1"
          style={{
            position: "absolute",
            top: "30%",
            left: "60%",
            color: "white",
            backgroundColor: "rgba (255, 0, 0, 0.5)",
            boxShadow: "1px 3px 8px 1px #b8ad49",
            webkitBoxShadow: "1px 3px 8px 1px #b8ad49",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
            bgClip: "text",
            fontSize: "2xl",
            fontWeight: "extrabold",
          }}
        />
      </Heading>
    </>
  );
}
