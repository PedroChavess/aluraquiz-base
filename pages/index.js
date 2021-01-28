import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
      margin: auto;
      padding: 15px; 
    }

    h1, h2, h3 {
      font-size: 16px;
      font-weight: 700;
      line-height: 1;
      margin-bottom:0;
    }
    p{
      font-size: 14px;
      font-weight: 400;
      line-height:1;
    }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>https://cinesiageek.com.br/wp-content/uploads/2017/06/Harry-Potter-Wallpapers-Archives-Page-2-of-4-Wallpaper.jpg
        <Widget>
          <Widget.Header>
            <h1> Harry Potter</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Draco Dormiens Nunquam Titillandus </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1> Quiz para medir seus conhecimentos</h1>

            <p>Draco Dormiens Nunquam Titillandus </p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/PedroChavess" />
      </QuizContainer>
    </QuizBackground>
  );
}

/*
function Title(props) { //propcidades/propriedades <
  return ( //característica do React
    <h1>
    {props.children}
    </h1>
    )
  } 

const BackgroundImage = styled.div`
background-image: url(${db.bg});
flex:1;
background-size: conver;
  background-position: center;
`; */
