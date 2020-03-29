import React from 'react';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Be The Heroi" />

                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso dtalhadamente para encontrar um herói para resolver.</p>
                            <br>
                            </br>
                        <Link className="back-link" to="/profile">
                            <FiArrowLeft size={16} color="E02041" />
                            Valtar para home
                        </Link>
                    </section>
                    <form>
                        <input placeholder="Titulo do caso" />
                        <textarea placeholder="Descrição" />
                        <input placeholder="Valor em reais" />

                        <button className="button" type="Submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        )
}