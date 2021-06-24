import { useRef, useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import bg from './Image/hero/4.jpg'
import man from './Image/hero/3.png'
import cloud1 from './Image/hero/cloud1.png'
import cloud2 from './Image/hero/colud-2.png'
import left from './Image/hero/1.png'
import right from './Image/hero/2.png'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const App = () => {
    const rights = useRef()
    const bgsr = useRef()
    const texts = useRef()
    const lefts = useRef()

    useEffect(() => {
      gsap.to(rights.current, {
        scrollTrigger: {
          scrub: 1,
        },
        scale: 3.2,
        duration: 2,
      })
    }, [])

    useEffect(() => {
      gsap.to(lefts.current, {
        scrollTrigger: {
          scrub: 2,
        },
        scale: 3.2,
        duration: 2,
      })
    }, [])
    
    useEffect(() => {
      gsap.to(bgsr.current, {
        scrollTrigger: {
          scrub: 3,
        },
        scale: 1.8,
        duration: 2,
      })
    }, [])
    useEffect(() => {
      gsap.to(texts.current, {
        scrollTrigger: {
          scrub: 4,
        },
        y: '-100px',
        duration: 2,
        fontSize: '50px',
        color: 'red',
      })
    }, [])



  return (
    <>
     
     <section>     
          <img ref={bgsr} src={bg} alt="" id="bg" />
          <h2 ref={texts} id="text"> Mountains</h2>
          <img  src={man} alt="" id="man" />
          <img  src={cloud1} alt="" id="cloud-1" />
          <img  src={cloud2} alt="" id="cloud-2" />
          <img ref={lefts} src={left} alt="" id="left" />
          <img  ref={rights} src={right} alt="" id="right" />
      </section>
      <div className="sec">
        <h3>ScrollTrigger is Awesome</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis distinctio ut odio incidunt eius dolore voluptates corporis natus ad velit, soluta mollitia hic neque atque laudantium amet nam quam sint? Omnis debitis minima veniam, odio placeat voluptates facilis alias reiciendis quam esse nisi incidunt nostrum laboriosam dicta provident temporibus saepe libero? Incidunt quia tempora adipisci, dicta unde laudantium, vero itaque culpa quas exercitationem fugiat eveniet quasi deleniti reprehenderit, laboriosam quaerat ratione beatae aliquam possimus natus recusandae iste! Ipsa sed accusantium est perspiciatis ab nobis fuga magnam repellendus itaque voluptatem, eaque ipsum ducimus odio similique soluta debitis quia aliquid enim quam obcaecati voluptatum! Totam corporis fuga veritatis nostrum corrupti aspernatur autem accusamus deserunt aliquid delectus, quo dicta. Necessitatibus natus aspernatur id harum esse eligendi cumque unde voluptas voluptate, corrupti sunt in reiciendis ipsum odio, quasi quia doloribus ratione ducimus facilis odit quisquam nostrum. A libero doloremque asperiores necessitatibus id nihil, maiores assumenda, excepturi dolores qui accusantium earum est amet ad eveniet vitae illo corporis, dignissimos facere mollitia dicta consequatur magni! Vero, ipsam pariatur corrupti, quod eum perspiciatis maiores delectus aliquid officia hic reprehenderit sequi nesciunt, unde tenetur odit? Iure ipsam ullam molestiae atque nemo deleniti aspernatur consequuntur, quibusdam iste at excepturi libero. Laboriosam ad sapiente omnis et incidunt dolorum dolorem, porro veniam dolores. Nulla at perferendis nemo dolore delectus eveniet nesciunt incidunt officiis. Minima blanditiis eaque, repellat atque doloremque, aspernatur ipsa accusantium tenetur voluptates vel magnam suscipit, aliquid repudiandae provident laboriosam cumque amet voluptate debitis recusandae? Deleniti maxime quo quae at minima saepe et recusandae aperiam cupiditate ipsum ad omnis, illo quod, numquam mollitia aut nam esse. Qui hic recusandae doloremque ullam aliquam, veritatis velit quos soluta quaerat maxime reprehenderit, ipsam, delectus ipsa vel explicabo. Omnis corporis molestias excepturi fugiat ut autem alias, amet magnam quaerat. Dolores incidunt ratione voluptatum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni blanditiis tenetur rerum incidunt minus nostrum, veritatis porro perspiciatis cupiditate ad est, pariatur praesentium dolorem omnis veniam sint error temporibus architecto officiis provident. Alias illo ipsam dolorem, nostrum saepe ipsa et obcaecati, ullam architecto porro tenetur cumque harum, quod amet dolores at sapiente neque veritatis sed mollitia suscipit? Harum corrupti cumque nobis fugiat optio rem nesciunt corporis quisquam aspernatur et voluptatum nam, saepe fugit tenetur esse labore ut id iure animi, in accusamus sequi porro hic! Assumenda iste totam maxime vel quasi dolor saepe culpa libero, facere debitis architecto commodi, eveniet ipsum voluptas iusto dolorem iure magni asperiores voluptates ut repellendus numquam. Nihil odit mollitia repellat, numquam necessitatibus quibusdam, odio asperiores repellendus corrupti quis repudiandae ea? Excepturi id eaque omnis. Quod explicabo iusto odit iste numquam. Id molestiae repellendus, aperiam provident nihil nulla, a quibusdam, molestias adipisci commodi magni tenetur? Exercitationem, fugiat. Tempora, asperiores deleniti! Quasi reiciendis, laboriosam et ad ullam, sequi, magnam mollitia illo corrupti tenetur suscipit asperiores non. Quae rem quasi laudantium eius in fugit cupiditate numquam, deleniti adipisci, ut ea excepturi amet nihil inventore reiciendis ipsum dolorum? Ipsa corrupti soluta non iste natus delectus quae! Impedit, doloribus vitae.</p>
      </div> 
    </>
  )
}

export default App

