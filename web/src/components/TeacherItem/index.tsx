import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/6620074?s=460&u=3b786481319920f03b37156f1a7e9ab92d47f9ca&v=4" alt="Sandro Oliveira" />
                <div>
                    <strong>Sandro Oliveira</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avancada.
                <br /> <br />
                Apaixonado por explor coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 mil pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
            <strong>R$75,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
