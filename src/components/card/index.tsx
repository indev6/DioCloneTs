import { FiThumbsUp } from "react-icons/fi";
import { CardContainer, Content, HasInfo, ImageBackground,PostInfo, UserInfo, UserPicture } from "./style";
import imgbackgound from '../../assets/backgroud-feed.jpg';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={imgbackgound}/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/130708525?v=4"/>
                <div>
                    <h4>Igor Neves</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp dio do Global avenada <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card};
