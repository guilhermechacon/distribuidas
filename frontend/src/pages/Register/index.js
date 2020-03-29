import React, {useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeftCircle} from 'react-icons/fi';
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import './styles.css';


export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            
        const response = await api.post('ongs', data);  //e8021a16

        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
        } catch (err) {
            alert ('Erro no cadastro, tente novamente')
        }
    }

    return (
            <div className="register-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Be The Heroi" />

                        <h1>Cadastro</h1>
                        <p>Faça deu cadastro, entre ma plataforma e ajude pessoas a encontrarem os casos da ONG.</p>
                            <br>
                            </br>
                        <Link className="back-link" to="/">
                            <FiArrowLeftCircle size={16} color="E02041" />
                            Não tenho cadastro
                        </Link>
                    </section>
                    <form onSubmit={handleRegister}>
                        <input placeholder="Nome da Ong" 
                        value={name}
                        onChange={e => setName(e.target.value)}                        
                        />

                        <input type="email" placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />

                        <input placeholder="Whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        />

                        <div className="input-group">

                            <input placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            />

                            <input placeholder="UF" style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            />

                        </div>

                        <button className="button" type="Submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        )
}