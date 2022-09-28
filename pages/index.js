import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import GithubStats from '../components/GithubStats'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Statistics from '../components/Statistics'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Apurva Divakar | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.jpg" />
      </Head>
    <Main />
    <About />
    <GithubStats/>
    <Statistics/>
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
