import { StyledHeader, StyledImage } from "./style";
import logo from "../../assets/logo.jpg"


export default function Header () {
    return (
        <StyledHeader>
            <nav>
                <StyledImage src={logo}/>
                <ul>
                    <li>About</li>
                    <li>Posts</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </StyledHeader>
    )
}