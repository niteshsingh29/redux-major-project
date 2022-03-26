import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box,
  Container,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "../App.css";
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
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.sm" className="Add-students">
        <Box p={8}>
          <FormControl variant="floating" id="first-name" isRequired isInvalid>
            <Input
              placeholder=" "
              className="text-white"
              style={{ color: "#ffe60a", boxShadow: "0 0 0 1px #ffffff" , borderColor:'#ffeb3b'}}
            />
            <FormLabel>First name</FormLabel>
            <FormHelperText>Keep it very short and sweet!</FormHelperText>
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
              style={{ color: "#ffe60a", boxShadow: "0 0 0 1px #ffffff",  borderColor:'#ffeb3b' }}
            />
            <FormLabel>Last name</FormLabel>
            <FormErrorMessage style={{ color: "#d7c522" }}>
              Student Last name is invalid
            </FormErrorMessage>
          </FormControl>
        </Box>
        <Button colorScheme="yellow" className="mx-4">
          Add Student
        </Button>
      </Container>
    </ChakraProvider>
  );
}
