// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
width: 100%;
`
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const TopHeading = styled.h1`
  color: #171f46;
  font-size: 22px;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #1e293b;
  font-size: 14px;
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Duration = styled.p`
  color: #1e293b;
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
`
export const AnchorTag = styled.a`
  text-decoration: none;
  color: #0967d2;
  font-size: 14px;
`
// export const Image = styled.img`
//   width: 100%;
//   height: 300px;
// `
export const ListItem = styled.li`
  padding: 5px;
`;
export const ListPara = styled.p`
  color: #25262c;
  background-color: #e2e8f0;
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  border-radius: 4px;
  line-height: 1.6;
  padding: 4px 8px;
  margin: 0px;
  margin-bottom: 8px;
  margin-right: 8px;
`;
export const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  padding: 0px;
`;