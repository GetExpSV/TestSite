import React, {useEffect, useRef} from 'react';
import './App.css';
import logo from './images/logo.png'
import aboutImage from './images/image.png'
import ellipse from './images/Ellipse 1 (Stroke).png'
import abilities from './images/icon-1.png';
import equipment from './images/icon-2.png';
import certificate from './images/icon-3.png';
import partner from './images/partner.png';
import iconHeading from './images/icon-heading.png';
import teacher1 from './images/teacher 1.png';
import teacher2 from './images/teacher-2.png';
import teacher3 from './images/teacher 3.png';
import vk from './images/vk.png';
import youtube from './images/youtube.png';
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import FirstCourse from './components/FirstCourse'
import FillLine from "./components/FillLine";

function App() {
    let menuRef = useRef('menu');
    let handleMenu = () =>{
        menuRef.current.classList.toggle('active')
    };
    return (
        <div className="App">
            <header className="header" id="header">
                <div className="container">
                    <div className="main-screen">
                        <div className="header__nav">
                            <img className={'header__nav-logo'} src={logo} alt={'logo'}/>
                            <div onClick={handleMenu}>
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </div>
                            <ul ref={menuRef}>
                                <li><a href={'#header'}>Главная</a></li>
                                <li><a href={'#course'}>Курсы</a></li>
                                <li><a href={'#program'}>Расписание</a></li>
                                <li><a href={'#teachers'}>Преподаватели</a></li>
                                <li><a href={'#footer'}>Рассылка</a></li>
                                <li><a href={'#social'}>Контакты</a></li>
                            </ul>
                            <a className='btn' href={'#'}>Зайти в кабинет</a>
                        </div>
                        <div className='main-screen-content'>
                            <div>Первый курс <br/> по компьютерной сборке</div>
                            <FirstCourse/>
                        </div>
                    </div>
                </div>
                <div className="main-screen__last-line" id='course'>
                    <div className="main-screen__last-line-container">
                        <div>
                            <a href={'#'} className={'btn'}>Заказать курс</a>
                        </div>
                        <div>
                            <div className="main-screen__last-line-container-users">
                                <span>Учеников всего: </span>
                                <span>200</span>
                            </div>
                            <div className="main-screen__last-line-container-users">
                                <span>Успешно закончили курс: </span>
                                <span>190</span>
                            </div>
                        </div>
                        <div className="main-screen__last-line-container-info">
                            <div className="main-screen__last-line-container-earn">
                                <span>Заработано учениками: </span>
                                <span>400 000₽</span>
                            </div>
                            <FillLine earned={400000}/>
                            <div className="main-screen__last-line-container-count">
                                <span>0 </span>
                                <span>1 000 000₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="about" id="about">
                <div className="container">
                    <div className="container__about-img">
                        <img src={aboutImage} alt="about image"/>
                    </div>
                    <div className="container__about-content">
                        <h2>Чем мы занимаемся?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat
                            elit
                            augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum,
                            morbi.
                            Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis
                            aliquet
                            fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra
                            rhoncus risus,
                            cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi,
                            lobortis. </p>
                    </div>
                </div>
            </section>
            <section className="start" id="start">
                <div className="container">
                    <div className="start__container-header">
                        <span></span>
                        <h3>Быстрый старт</h3>
                    </div>
                    <p>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
                    <div className="start__container-infographic">
                        <div className="start__container-infographic-header">
                            <ul>
                                <li>100%</li>
                                <li>75%</li>
                                <li>50%</li>
                                <li>Итог</li>
                            </ul>
                        </div>
                        <div className="start__container-infographic-graphic">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="start__container-infographic-content">
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                                    eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi
                                    porttitor
                                    tempus. Placerat dui.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                                    accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                                    Placerat dui.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                                    accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                                    Placerat dui.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                                    accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                                    Placerat dui.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="advantages" id='advantages'>
                <div className="container">
                    <h4>Получите профессию прямо сейчас</h4>
                    <div className="advantages__container-cards">
                        <div className="advantages__container-card-abilities">
                            <img src={abilities} alt="abilities"/>
                            <span>Только практические навыки в работе</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                                accumsan
                                amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                        </div>
                        <div className="advantages__container-card-equipment">
                            <img src={equipment} alt="equipment"/>
                            <span>Работа на самом современном оборудовании</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                                accumsan
                                amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                        </div>
                        <div className="advantages__container-card-certificate">
                            <img src={certificate} alt="certificate"/>
                            <span>Сертификация по окончании обучения</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                                accumsan
                                amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners" id='partners'>
                <div className="container">
                    <div className='partners__container-header'>
                        <span></span>
                        <h5>Партнеры - топовые бренды</h5>
                    </div>
                    <div className='partners__container-partners'>
                        <ul>
                            <li><img src={partner} alt="partner"/></li>
                            <li><img src={partner} alt="partner"/></li>
                            <li><img src={partner} alt="partner"/></li>
                            <li><img src={partner} alt="partner"/></li>
                            <li><img src={partner} alt="partner"/></li>
                            <li><img src={partner} alt="partner"/></li>
                            <li><img src={partner} alt="partner"/></li>
                            <li><img src={partner} alt="partner"/></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="program" id="program">
                <div className="container">
                    {/*<img src={iconHeading} alt="program icon"/>*/}
                    <span className='spin'></span>
                    <h6>Программа обучения</h6>
                    <p>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
                    <div className="timeline">
                        <div className="container left">
                            <span>Неделя №1</span>
                            <p>Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <div className="container right">
                            <span>Неделя №2</span>
                            <p>Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <div className="container left">
                            <span>Неделя №3</span>
                            <p>Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <div className="container right">
                            <span>Неделя №4</span>
                            <p>Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <div className="container left">
                            <span>Неделя №5</span>
                            <p>Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <div className="container right">
                            <span>Неделя №6</span>
                            <p>Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                        <div className="container left">
                            <span>Неделя №7</span>
                            <p>Красивая часть курса,
                                которая помогает в успехе</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="teachers" id="teachers">
                <div className="container">
                    <div className="teachers__container-header">
                        {/*<img src={ellipse} alt="teachers logo"/>*/}
                        <span className='spin'></span>
                        <span>Ваши преподаватели</span>
                    </div>
                    <div className="teachers__container-teachers">
                        <div>
                            <img src={teacher1} alt="teacher"/>
                            <span>Дмитрий Иванов</span>
                            <span>Специалист по видеокартам</span>
                            <a href={'#'}>Биография</a>
                        </div>
                        <div>
                            <img src={teacher2} alt="teacher"/>
                            <span>Дмитрий Иванов</span>
                            <span>Специалист по видеокартам</span>
                            <a href={'#'}>Биография</a>
                        </div>
                        <div>
                            <img src={teacher3} alt="teacher"/>
                            <span>Дмитрий Иванов</span>
                            <span>Специалист по видеокартам</span>
                            <a href={'#'}>Биография</a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer" id="footer">
                <div className="container">
                    <span>Статьи каждую неделю</span>
                    <p>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
                    <div>
                        <input type='text' placeholder='Email'/>
                        <a href={'#'} className={'footer__btn'}>Подписаться</a>
                    </div>
                    <div className="footer__container-social" id='social'>
                        <a href={'#'}><img src={vk} alt=""/></a>
                        <a href={'#'}><img src={youtube} alt=""/></a>
                        <a href={'#'}><img src={facebook} alt=""/></a>
                        <a href={'#'}><img src={instagram} alt=""/></a>
                    </div>
                    <p>Templates #18. More on Figma.info</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
