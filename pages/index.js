import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno de useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Wizarding World</title>
        <link rel="sortcut icon" href="https://i.dlpng.com/static/png/6615198_preview.png" />;
        {/* colocar meta tag */}
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1> Harry Potter</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (insfosDoEvento) {
              insfosDoEvento.preventDefault(); /* Faz com que tire o comportamento padrao do form, faz com que não fique atualizando a página
              sempre que clicar no botão de jogar */

              router.push(`/quiz?name=${name}`);

              console.log('Fazendo uma submissão por meio do react');
              /* router manda para próxima página */
            }}


            > {/* onSubmit => para escrever em react */}
              <Input
                name="nomeDoUsuario"
                onChange={(insfosDoEvento) => setName(insfosDoEvento.target.value)}
                placeholder="Insira aqui seu nome"
                value={name}
              />

              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1> Quiz para medir seus conhecimentos</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
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
