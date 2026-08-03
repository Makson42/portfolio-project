import styled from "styled-components";
import photo from "../../../assets/images/image-preview.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Firstlook = () => {
    return (
        <FlexWrapper>
            <div>
                <h1>Elias is a web designer and front-end developer</h1>
                <p>He crafts responsive websites where technologies meet creativity</p>
                <button>Contact me !!</button>
            </div>

            <div>
                <Photo src={photo} alt="The guy in the hood"/>
                <span>Currently working on Portfolio</span>
            </div>
        </FlexWrapper>

    );
};

const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
    object-position: top;
`
