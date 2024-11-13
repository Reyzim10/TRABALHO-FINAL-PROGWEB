function showInfo(disciplina) {
    const title = document.getElementById('course-title');
    const description = document.getElementById('course-description');
    const infoBox = document.getElementById('course-info');

    let courseTitle = '';
    let courseDescription = '';

    switch (disciplina) {
        case 'prog':
            courseTitle = 'Programação II';
            courseDescription = 'Na disciplina de Programação II, com foco na linguagem C, os alunos aprofundam conhecimentos avançados, incluindo estruturas de dados como listas, pilhas, filas e árvores, e algoritmos complexos para ordenação e busca. O curso enfatiza a programação modular com funções e bibliotecas, o uso de ponteiros e alocação dinâmica de memória, e a manipulação de arquivos para entrada e saída de dados. Além disso, os alunos aprendem técnicas de debugging e testes para garantir a qualidade do código. A disciplina prepara os alunos para desenvolver software mais robusto e eficiente, proporcionando uma base sólida em conceitos avançados de programação.';
            break;
        case 'web':
            courseTitle = 'Programação Web I';
            courseDescription = 'Na disciplina de Programação Web I, os alunos são introduzidos aos fundamentos do desenvolvimento para a web. O curso cobre HTML para estruturar páginas, CSS para estilização e JavaScript para programação do lado do cliente, incluindo manipulação do DOM e eventos. Os alunos aprendem a criar layouts responsivos que se adaptam a diferentes dispositivos e tamanhos de tela, além de princípios de usabilidade e acessibilidade para garantir que as páginas sejam funcionais e inclusivas. O curso também aborda o uso de editores de código, navegadores e ferramentas de desenvolvimento para criar e testar aplicações web, fornecendo uma base sólida para o desenvolvimento de sites e interfaces interativas.';
            break;
        case 'so':
            courseTitle = 'Sistemas Operacionais';
            courseDescription = 'Na disciplina de Sistemas Operacionais, os alunos estudam os conceitos fundamentais que possibilitam o funcionamento eficiente dos sistemas de computador. O curso abrange a arquitetura e as principais funções dos sistemas operacionais, como gerenciamento de processos, memória e sistemas de arquivos. Inclui também o gerenciamento de processos e threads, escalonamento, sincronização e comunicação entre processos. Além disso, explora técnicas de alocação e gerenciamento de memória, sistemas de arquivos e controle de dispositivos de entrada e saída. A disciplina também cobre mecanismos de segurança e proteção dos dados e processos, e estratégias para otimizar o desempenho do sistema. ';
            break;
        case 'alg':
            courseTitle = 'Álgebra Linear';
            courseDescription = 'Na disciplina de Álgebra Linear, os alunos exploram conceitos essenciais para entender e manipular espaços vetoriais e sistemas lineares. O curso abrange vetores e espaços vetoriais, operações com matrizes, e a resolução de sistemas lineares utilizando métodos como eliminação de Gauss. Inclui o cálculo e a interpretação de determinantes, transformações lineares e suas representações por matrizes, e o estudo de autovalores e autovetores, com suas aplicações práticas. A disciplina também aborda aplicações em gráficos computacionais, otimização e modelagem matemática, fornecendo ferramentas fundamentais para resolver problemas em diversas áreas da ciência e engenharia.';
            break;
    }

    title.innerText = courseTitle;
    description.innerText = courseDescription;
    infoBox.style.display = 'block';
}

function hideInfo() {
    const infoBox = document.getElementById('course-info');
    infoBox.style.display = 'none';
}
