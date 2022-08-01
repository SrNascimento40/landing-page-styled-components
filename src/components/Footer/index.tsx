import { StyledFooter, StyledImage } from "./style";
import logo from "../../assets/logo.jpg"


export default function Footer () {
    return (
        <StyledFooter>
            <nav>
                <StyledImage src={logo}/>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </StyledFooter>
    )
}