import React from 'react';
import * as emailjs from "emailjs-com";
import AOS from 'aos';
import { TextField } from '@material-ui/core';
import InputMask from 'react-input-mask'
import alertify from 'alertifyjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

AOS.init();

class FormContato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            celular: '',
            telefone: '',
            id: '',
            email: '',
            assunto: '',
            mensagem: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const userId = process.env.REACT_APP_USER_ID;

        this.sendEmail(templateId, userId, {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            celular: this.state.celular,
            telefone: this.state.telefone,
            id: this.state.id,
            email: this.state.email,
            assunto: this.state.assunto,
            mensagem: this.state.mensagem,

        });

    }


    sendEmail(templateId, userId, variables) {
        alertify.confirm(
            '<h1>Confirmar solicitação</h1>',
            `<p><b>Nome:</b> ${this.state.nome}</p>  <br />
             <p><b>Sobrenome:</b> ${this.state.sobrenome}</p> <br />
             <p><b>Celular:</b> ${this.state.celular}</p> <br />
             <p><b>Telefone:</b> ${this.state.telefone}</p> <br />
             <p><b>CPF ou CNPJ:</b> ${ this.state.id}</p> <br / >
             <p><b>E-mail:</b> ${ this.state.email}</p> <br />
             <p><b>Assunto:</b> ${ this.state.assunto}</p> <br />
             <p><b>Mensagem:</b> ${ this.state.mensagem}</p> <br />
          `,
            () => {
                /*Manda o email */
                emailjs.send('smtp_server', templateId, variables, userId
                ).then(res => {
                    alertify.success('Solicitação enviado')
                });
            }, () => {
                alertify.error('Solicitação cancelado.')
            });
    }
    render() {
        return (
            <div className="contato-conteudo">
                <form className="formulario" autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField required id="standard-required" label="Nome" name="nome" onChange={this.handleInputChange} />
                        <TextField required id="standard-required" label="Sobrenome" name="sobrenome" onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <InputMask
                            mask="(99) 99999-9999"
                            disabled={false}
                            maskChar=" "
                            onChange={this.handleInputChange}
                        >
                            {() => <TextField required className="col-3" label="Celular" name="celular" />}
                        </InputMask>
                    </div>
                    <div>
                        <InputMask
                            mask="(99) 9999-9999"
                            disabled={false}
                            maskChar=" "
                            onChange={this.handleInputChange}
                        >
                            {() => <TextField className="col-3" label="Telefone (não obrigatório)" name="telefone" />}
                        </InputMask>
                    </div>
                    <div>
                        <TextField required id="standard-required" label="CPF ou CNPJ" name="id" type="number" onChange={this.handleInputChange} onInput={(e) => {
                            e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 15)
                        }} />
                    </div>
                    <div>
                        <TextField fullWidth required id="standard-required" label="E-mail" name="email" type="email" onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <TextField fullWidth spell-check required id="standard-required" label="Assunto" name="assunto" type="text" onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <TextField fullWidth spell-check required label="Mensagem" multiline name="mensagem" onChange={this.handleInputChange} />
                    </div>
                    <div className="button-enviar">
                        <button type="submit" className="enviar"><a>Enviar</a></button>
                    </div>
                </form>
            </div>
        );
    }

}

export default FormContato;



