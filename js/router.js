/* *********************************************************************
* Objetivo: 
* Data: 04/12/2025
* Autor: Marcelo Vieira
* Versão: 1.0
* **********************************************************************/

const routes = {
    "/": {
        title: "NOSSOS PETS",
        template: `
            <div class="overlay"></div>
            
            <aside class="filtros">
                <h2>FILTROS</h2>
                <div class="grupo">
                    <h3>Região</h3>
                    <div>
                        <label><input type="checkbox"> Sudeste</label>
                        <label><input type="checkbox"> Nordeste</label>
                        <label><input type="checkbox"> Norte</label>
                        <label><input type="checkbox"> Sul</label>
                        <label><input type="checkbox"> Centro-Oeste</label>
                    </div>
                </div>

                <div class="grupo">
                    <h3>Espécie</h3>
                    <div>
                        <label><input type="checkbox"> Cachorro</label>
                        <label><input type="checkbox"> Gato</label>
                        <label><input type="checkbox"> Outros</label>
                    </div>
                </div>

                <div class="grupo">
                    <h3>Raça</h3>
                    <select class="select-raca">
                        <option value="">Selecione uma raça</option>
                        <option value="sem-raca">Sem raça definida</option>
                        <option value="poodle">Poodle</option>
                        <option value="bulldog">Bulldog</option>
                        <option value="siames">Siamês</option>
                        <option value="persa">Persa</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>

                <div class="grupo">
                    <h3>Porte</h3>
                    <div>
                        <label><input type="checkbox"> Pequeno</label>
                        <label><input type="checkbox"> Médio</label>
                        <label><input type="checkbox"> Grande</label>
                    </div>
                </div>

                <div class="grupo">
                    <h3>Idade</h3>
                    <div>
                        <label><input type="checkbox"> Filhote</label>
                        <label><input type="checkbox"> Adulto</label>
                        <label><input type="checkbox"> Idoso</label>
                    </div>
                </div>

                <div class="grupo">
                    <h3>Sexo</h3>
                    <div>
                        <label><input type="checkbox"> Macho</label>
                        <label><input type="checkbox"> Fêmea</label>
                    </div>
                </div>

                <div class="grupo">
                    <h3>Status</h3>
                    <div>
                        <label><input type="checkbox"> Adotado</label>
                        <label><input type="checkbox"> Disponível</label>
                    </div>
                </div>
            </aside>

            <section class="cards">
                <div class="card">
                    <img src="./img/pet-teste.jpg" alt="Pet">
                    <h3>Bob</h3>
                    <p>Disponível</p>
                </div>
                 <div class="card">
                    <img src="./img/pet-teste.jpg" alt="Pet">
                    <h3>Mel</h3>
                    <p>Disponível</p>
                </div>
                 <div class="card">
                    <img src="./img/pet-teste.jpg" alt="Pet">
                    <h3>Thor</h3>
                    <p>Disponível</p>
                </div>
                 <div class="card">
                    <img src="./img/pet-teste.jpg" alt="Pet">
                    <h3>Luna</h3>
                    <p>Disponível</p>
                </div>
            </section>
        `,
        // Função específica para fazer os scripts da Home funcionarem
        init: () => {
            const btnFilter = document.querySelector('.botao-mobile-filter');
            const menuFiltros = document.querySelector('.filtros');
            const overlay = document.querySelector('.overlay');

            // Só adiciona o evento se os elementos existirem (proteção de erro)
            if (btnFilter && menuFiltros && overlay) {
                
                // Abrir menu
                btnFilter.addEventListener('click', () => {
                    menuFiltros.classList.add('ativo');
                    overlay.classList.add('ativo');
                });

                // Fechar ao clicar no overlay
                overlay.addEventListener('click', () => {
                    menuFiltros.classList.remove('ativo');
                    overlay.classList.remove('ativo');
                });
            }
        }
    },
    "/favoritos": {
        title: "MEUS FAVORITOS",
        template: `<h2>Em breve: Seus favoritos</h2>`
    },
    "/notificacoes": {
        title: "NOTIFICAÇÕES",
        template: `<h2>Em breve: Notificações</h2>`
    },
    "/perfil": {
        title: "MEU PERFIL",
        template: `<h2>Em breve: Perfil</h2>`
    },
    "/cadastro": {
        title: "CRIE SUA CONTA",
        template: `
            <div class="cadastro-wrapper">
                <a href="/login" class="spa-link botao-voltar">
                    <i class="bi bi-arrow-left"></i>
                </a>

                <div class="card-auth">
                    <div class="content-login">
                        <img class="logo" src="./img/logo.png" alt="Logo do Site">

                        <form class="box-login">
                            <h3 class="titulo-secao">INFORMAÇÕES</h3>

                            <div class="input-login">
                                <input type="text" class="campo" placeholder="Usuário">
                                <i class="bi bi-person"></i>
                            </div>

                            <div class="input-login">
                                <input type="email" class="campo" placeholder="Email">
                                <i class="bi bi-envelope"></i>
                            </div>

                            <div class="input-senha">
                                <input id="criar-senha" type="password" class="campo" placeholder="Crie uma senha">
                                <i id="icon-criar-senha" class="bi bi-eye" style="cursor: pointer;"></i>
                            </div>

                            <div class="input-senha">
                                <input id="confirmar-senha" type="password" class="campo" placeholder="Confirme a senha">
                                <i id="icon-confirmar-senha" class="bi bi-eye" style="cursor: pointer;"></i>
                            </div>

                            <div class="input-login">
                                <input type="text" class="campo" placeholder="Telefone">
                                <i class="bi bi-telephone"></i>
                            </div>

                            <h3 class="titulo-secao">PREFERÊNCIA DE PETS</h3>
                            <div class="grupo-radios">
                                <label><input type="radio" name="pet" value="cachorro"> Cachorro</label>
                                <label><input type="radio" name="pet" value="gato"> Gato</label>
                                <label><input type="radio" name="pet" value="outros"> Outros</label>
                            </div>

                            <h3 class="titulo-secao">ENDEREÇO</h3>
                            <div class="input-login">
                                <input type="text" id="cep" class="campo" placeholder="Digite seu CEP" maxlength="9">
                            </div>
                            <div class="input-login">
                                <input type="text" id="logradouro" class="campo" placeholder="Logradouro">
                            </div>
                            <div class="input-login">
                                <input type="text" id="cidade" class="campo" placeholder="Cidade">
                            </div>
                            <div class="input-login">
                                <input type="text" id="estado" class="campo" placeholder="Estado">
                            </div>

                            <input type="submit" id="botao-cadastrar" class="botao" value="CADASTRAR">
                        </form>
                    </div>
                </div>
            </div>
        `,
        init: () => {
            // --- 1. Lógica de Senha (Olhinho) ---
            const togglePassword = (inputId, iconId) => {
                const input = document.getElementById(inputId);
                const icon = document.getElementById(iconId);
                
                if(input && icon) {
                    icon.addEventListener('click', () => {
                        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                        input.setAttribute('type', type);
                        icon.classList.toggle('bi-eye');
                        icon.classList.toggle('bi-eye-slash');
                    });
                }
            };
            togglePassword('criar-senha', 'icon-criar-senha');
            togglePassword('confirmar-senha', 'icon-confirmar-senha');

            // --- 2. Lógica de Consumo de API (ViaCEP) ---
            
            // Funções auxiliares definidas dentro do escopo do init
            const limparFormulario = () => {
                document.getElementById('logradouro').value = '';
                document.getElementById('cidade').value = '';
                document.getElementById('estado').value = '';
            }

            const preencherFormulario = (endereco) => {
                document.getElementById('logradouro').value = endereco.logradouro;
                document.getElementById('cidade').value = endereco.localidade;
                document.getElementById('estado').value = endereco.uf;
            }

            const verificarNumero = (numero) => /^[0-9]+$/.test(numero);

            const cepValido = (cep) => cep.length === 8 && verificarNumero(cep);

            const pesquisarCep = async () => {
                limparFormulario();
                
                const inputCep = document.getElementById('cep');
                // Remove traço caso o usuário digite
                const cep = inputCep.value.replace("-", "");
                const url = `https://viacep.com.br/ws/${cep}/json/`;

                if (cepValido(cep)) {
                    try {
                        const dados = await fetch(url);
                        const endereco = await dados.json();

                        if (endereco.hasOwnProperty('erro')) {
                            inputCep.value = '';
                            alert('CEP não encontrado!');
                        } else {
                            preencherFormulario(endereco);
                        }
                    } catch (error) {
                        console.error(error);
                        alert('Erro ao buscar CEP');
                    }
                } else {
                     // Só avisa se o campo não estiver vazio (para não irritar no foco inicial)
                     if(cep.length > 0) alert('CEP incorreto!');
                }
            }

            // Adiciona o evento APENAS se o campo existir
            const inputCep = document.getElementById('cep');
            if (inputCep) {
                inputCep.addEventListener('focusout', pesquisarCep);
            }
        }
    },
    "/login": {
        title: "ENTRAR",
        template: `
            <!-- ADICIONEI A CLASSE 'login-mode' AQUI NA DIV WRAPPER -->
            <div class="cadastro-wrapper login-mode">
                
                <a href="/" class="spa-link botao-voltar">
                    <i class="bi bi-arrow-left"></i>
                </a>

                <div class="card-auth">
                    <div class="content-login">
                    
                        <img class="logo" src="./img/logo.png" alt="Logo do Site">
                    
                        <form class="box-login">
                            <div class="input-login">
                                <input type="email" id="email" class="campo" name="email" placeholder="Email">
                                <i class="bi bi-person"></i>
                            </div>
                            
                            <div class="input-senha">
                                <input type="password" id="senha" class="campo" name="senha" placeholder="Senha">
                                <i id="icon-senha" class="bi bi-eye" style="cursor: pointer;"></i>
                            </div>
                            
                            <input type="submit" class="botao" value="ENTRAR">
                        </form>
                    
                        <div class="criar-cadastro">  
                            <a class="link spa-link" href="/cadastro">Cadastrar uma nova conta</a>
                        </div>
                    
                    </div>
                </div>
            </div>
        `,
        init: () => {
            const input = document.getElementById('senha');
            const icon = document.getElementById('icon-senha');
            
            if(input && icon) {
                icon.addEventListener('click', () => {
                    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                    input.setAttribute('type', type);
                    icon.classList.toggle('bi-eye');
                    icon.classList.toggle('bi-eye-slash');
                });
            }
        }
    },
    "/anunciar": {
        title: "ANUNCIAR PET",
        template: `
            <div class="anunciar-container">
                <div class="top-section">
                    <div class="photo-upload">
                        <div class="upload-icon">
                            <i class="bi bi-cloud-upload-fill"></i>
                        </div>
                        <input type="file" id="file-input" style="display: none;" accept="image/*">
                    </div>

                    <div class="info-basica">
                        <input type="text" placeholder="Nome do Pet" class="input-padrao">

                        <div class="input-selecao">
                            <select class="input-padrao">
                                <option disabled selected>Espécie</option>
                                <option value="cachorro">Cachorro</option>
                                <option value="gato">Gato</option>
                                <option value="outro">Outro</option>
                            </select>
                            <select class="input-padrao">
                                <option disabled selected>Raça</option>
                                <option value="sem-raca">Sem raça definida</option>
                                <option value="poodle">Poodle</option>
                                <option value="bulldog">Bulldog</option>
                                <option value="siames">Siamês</option>
                                <option value="persa">Persa</option>
                                <option value="outros">Outros</option>
                            </select>

                            <select class="input-padrao">
                                <option disabled selected>Porte</option>
                                <option value="pequeno">Pequeno</option>
                                <option value="medio">Médio</option>
                                <option value="grande">Grande</option>
                            </select>
                            <select class="input-padrao">
                                <option disabled selected>Idade</option>
                                <option value="filhote">Filhote</option>
                                <option value="adulto">Adulto</option>
                                <option value="idoso">Idoso</option>
                            </select>

                            <select class="input-padrao">
                                <option disabled selected>Sexo</option>
                                <option value="m">Macho</option>
                                <option value="f">Femea</option>
                            </select>
                        </div>
                    </div>

                    <div class="description-box">
                        <textarea placeholder="Descrição" class="input-padrao"></textarea>
                    </div>
                </div>

                <div class="details-section">
                    <textarea placeholder="Temperamento" class="input-padrao"></textarea>
                    <textarea placeholder="Informações Veterinárias" class="input-padrao"></textarea>
                    <textarea placeholder="Adaptabilidade" class="input-padrao"></textarea>
                </div>

                <div class="actions-section">
                    <button class="botao botao-salvar">Salvar</button>
                    <button class="botao botao-editar">Editar</button>
                    <button class="botao botao-excluir">Excluir</button>
                    <button class="botao botao-cancelar">Cancelar</button>
                </div>
            </div>
        `,
        init: () => {
            // Lógica para simular o clique no upload de imagem
            const uploadBox = document.querySelector('.photo-upload');
            const fileInput = document.getElementById('file-input');
            
            if(uploadBox && fileInput) {
                uploadBox.addEventListener('click', () => {
                    fileInput.click();
                });
                
                fileInput.addEventListener('change', (e) => {
                    if (e.target.files && e.target.files[0]) {
                        // Apenas um feedback visual simples que selecionou
                        alert(`Imagem selecionada: ${e.target.files[0].name}`);
                    }
                });
            }
        }
    },
    404: {
        title: "Página não encontrada",
        template: `<h2>Erro 404</h2>`
    }
};

const router = () => {
    let path = window.location.pathname;
    if (path === '/index.html') path = '/';

    const route = routes[path] || routes[404];

    // 1. Injeta o HTML
    document.getElementById('app').innerHTML = route.template;
    
    // 2. Atualiza o Título
    const pageTitle = document.getElementById('page-title');
    if(pageTitle) pageTitle.innerText = route.title;

    // --- NOVA LÓGICA: Ocultar Cabeçalho Secundário fora da Home ---
    const cabecalhoSecundario = document.querySelector('.cabecalho-secundario');
    if (cabecalhoSecundario) {
        if (path === '/') {
            // Se for Home, mostra (usa o display original do CSS, que é flex)
            cabecalhoSecundario.style.display = 'flex';
        } else {
            // Se for qualquer outra página, esconde
            cabecalhoSecundario.style.display = 'none';
        }
    }
    // ---------------------------------------------------------------

    // 3. Executa o script específico da página (se houver)
    if (route.init) {
        route.init();
    }
};

// Navegação via links
document.addEventListener('click', (e) => {
    // Procura o link mais próximo que tenha a classe spa-link
    const link = e.target.closest('.spa-link'); 
    
    // VERIFICAÇÃO EXTRA: Se for o botão de filtro, NÃO navega
    if (e.target.closest('.botao-mobile-filter')) return;

    if (link) {
        e.preventDefault();
        window.history.pushState({}, "", link.getAttribute('href'));
        router();
    }
});

window.onpopstate = router;
window.route = router;

// Inicia o router ao carregar
router();