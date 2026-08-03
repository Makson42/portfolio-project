import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {SkillCard} from "./SkillCard.tsx";
import {Square} from "../../../components/Square.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle icon="#" label="skills" linewidth="239px"/>
            <FlexWrapper gap="40px">
                <GeometricPattern>
                    <Square gridcolumn="3/4" size={100}/>
                    <Square gridcolumn="3/4" alignself="center" justifyself="end" size={60}/>
                </GeometricPattern>
                <StyledGrid>
                    <SkillCard title="Languages" lines={["TypeScript Lua", "Python JavaScript"]}/>
                    <SkillCard title="Databases" lines={["SQLite PostgreSQL", "Mongo"]}/>
                    <SkillCard title="Other" lines={["HTML CSS EJS SCSS", "REST Jinja"]}/>
                    <SkillCard title="Tools" lines={["VSCode Neovim Linux", "Figma XFCE Arch", "Git Font Awesome"]}/>
                    <SkillCard title="Frameworks" lines={["React Vue", "Disnake Discord.js", "Flask Express.js"]}/>
                </StyledGrid>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
min-height: 100vh;
`

const GeometricPattern = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    width: 420px;
    height: 300px;
    background: #282C33;
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    gap: 20px;
`