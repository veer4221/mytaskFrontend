// Write your code here
// Write your code here
import { AiFillCalendar } from "react-icons/ai";
import * as React from "react";
import {
    ProjectContainer,
    TopContainer,
    TopHeading,
    Description,
    IconContainer,
    Duration,
    AnchorTag,
    // Image,
    TagList,
    ListPara,
    ListItem,
} from "./styledComponents";
import { RxDot, RxDotFilled } from "react-icons/rx";
import YoutubeIfrem from "./ifrem";
const ProjectTimelineCard = (props) => {
    const [selected, setselected] = React.useState(0);
    const [isDisplay, setIsDisplay] = React.useState(false);
    const { item } = props;
    const { projectTitle, description, duration, projectUrl, imageUrl, videoURL, tagsList } = item;
    let postURLS = [];
    // React.useEffect(() => {
    postURLS.push(
        ...videoURL.map((url, i) => {
            return { type: "video", url };
        })
    );
    postURLS.push(
        ...imageUrl.map((url, i) => {
            return { type: "image", url };
        })
    );
    // }, [item])
    console.log(postURLS);
    React.useEffect(() => { }, [selected]);
    // const reRender = () => {
    //     setIsDisplay(false)
    // }
    // setTimeout(() => setIsDisplay("100%"), 500)
    // const reRender = () => {
    //     setIsDisplay("90%")
    //     setTimeout(() => setIsDisplay("100%"), 500)

    //
    // setTimeout(() => setIsDisplay("100%"), 500)
    // React.useEffect(() => {
    //     setIsDisplay("90%")

    // }, [isDisplay])
    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }


    async function render() {
        setIsDisplay(false)
        await sleep(0)
        setIsDisplay(true)
    }
    React.useEffect(() => {
        render()
    }, [selected])
    return (
        <ProjectContainer>
            {postURLS.length !== 0 ? (
                postURLS[selected].type === "video" ? (
                    <>
                        {isDisplay && <YoutubeIfrem videoURL={postURLS[selected].url} />}
                    </>
                ) : (
                    <img src={postURLS[selected].url} alt="project" height="315px" width="100%" />
                )
            ) : (
                ``
            )}

            <div>
                {postURLS.map((d, i) => {
                    if (i == selected) return <RxDotFilled size={30} style={{ cursor: "pointer", padding: "0", margin: 0 }} />;
                    return <RxDot size={30} onClick={() => setselected(i)} style={{ cursor: "pointer", padding: "0", margin: 0 }} />;
                })}
            </div>
            <TopContainer>
                <TopHeading>{projectTitle}</TopHeading>
                <IconContainer>
                    <AiFillCalendar />
                    <Duration>{duration}</Duration>
                </IconContainer>
            </TopContainer>
            <Description>{description}</Description>
            {tagsList.length !== 0 && (
                <TagList>
                    {tagsList.map((eachValue) => (
                        <ListItem key={eachValue.id}>
                            <ListPara>{eachValue.name}</ListPara>
                        </ListItem>
                    ))}
                </TagList>
            )}
            <AnchorTag href={projectUrl} target="__blank">
                Visit
            </AnchorTag>
        </ProjectContainer>
    );
};

export default ProjectTimelineCard;
