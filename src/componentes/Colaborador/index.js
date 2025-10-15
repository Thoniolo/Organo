import './Colaborador.css'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar, aoFavoritar, colaborador}) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    
    return (<div className='colaborador'>
        <BsFillTrash3Fill 
            size={25} 
            className="deletar" 
            onClick={() => aoDeletar(colaborador.id)} 
        />
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                    ? <AiFillHeart {...propsFavorito} color='#ff0000'/> 
                    : <AiOutlineHeart {...propsFavorito}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador