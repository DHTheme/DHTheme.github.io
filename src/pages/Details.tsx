export function Details () {
    return (
        <article>
            <h1>Dark Hummingbird Theme</h1>
            <h2>COLABORAÇÕES</h2>
            <div id="content">
                <h3>Como contribuir com este projeto?</h3>
                <p>Antes de começar verifique e siga as instruções para contribuição do repositório. Caso não possua você pode seguir as instruções abaixo: </p>
                <ol style={{ listStylePosition: "inside" }}>
                        <li>Acesse o repositório que deseja contribuir</li>
                        <li>Faça Fork do projeto</li>
                        <li>Crie uma nova branch: git checkout -b nova-branch</li>
                        <li>Commit suas mudanças: git commit -m 'Adicionei alguma coisa'</li>
                        <li>Push para a branch: git push origin nova-branch</li>
                        <li>Abra um Pull Request</li>
                </ol>
                <h3>Como reportar um erro ou solicitar recurso?</h3>
                <p>Caso deseja reportar um erro ou solicitar um recurso, acesse Issue no repositório do Projeto GitHub e adicione sua requisição.</p>
            </div>
            <div className="button-container">
                <a href="http://github.com/eucarlos" target="_blank">
                    <button className="button"><i className="fab fa-github"></i> Ver no Github</button>
                </a>
            </div>
        </article>
    )
}