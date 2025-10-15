import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
     const handleDelete = (colaboradorId, index) => {
        props.aoDeletar(colaboradorId, index);
    };

    const handleFavoritar = (colaboradorId) => {
        props.aoFavoritar(colaboradorId);
    };

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor,'0.6') }}>
            <input onChange={evento => props.mudarCor(props.id ,evento.target.value)} value={props.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.cor }} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, index) => 
                    <Colaborador 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        corDeFundo={props.cor} 
                        aoDeletar={() => handleDelete(colaborador.id, index)}
                        colaborador={colaborador} 
                        aoFavoritar={() => handleFavoritar(colaborador.id)}
                    />
                )}
            </div>
        </section>
        : ''
    )
}

export default Time