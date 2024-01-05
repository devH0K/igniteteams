import { TextInputProps } from "react-native";
import { Container } from "./styled";

export function Input({ ...rest }: TextInputProps){
    return(
        <Container
            {...rest}
        />
    );
}