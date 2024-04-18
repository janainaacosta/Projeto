import './index.css'
import Buttons from '../../Componets/List-Buttons/buttons';

function Home(){
    return(
        <>
        <Buttons/>
        <div className="container-tabela">
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tarefa</th>
                        <th>Autor</th>
                        <th>Status</th>
                        <th>Editar</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td className="td-nome-tarefa">Varrer a casa</td>
                        <td>João</td>
                        <td>Em progresso</td>
                        <td>
                            <button className="btn-editar-tarefa">editar</button>
                        </td>
                        <td>
                            <button className="btn-remover-tarefa">remover</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className="td-nome-tarefa">Lavar a louça</td>
                        <td>Janaina</td>
                        <td>Completo</td>
                        <td>
                            <button className="btn-edit-tarefa">editar</button>
                        </td>
                        <td>
                            <button className="btn-remover-tarefa">remover</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className="td-nome-tarefa" >Regar as plantas</td>
                        <td>Pedro</td>
                        <td>A fazer</td>
                        <td>
                            <button className="btn-edit-tarefa">editar</button>
                        </td>
                        <td>
                            <button className="btn-remover-tarefa">remover</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
       
    )
}

export default Home;