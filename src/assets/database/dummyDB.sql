
DROP TABLE IF EXISTS BANCA;
DROP TABLE IF EXISTS ORGAO;
DROP TABLE IF EXISTS PROVA;
DROP TABLE IF EXISTS ASSUNTO;
DROP TABLE IF EXISTS TOPICO;
DROP TABLE IF EXISTS QUESTAO_FORCA;
DROP TABLE IF EXISTS QUESTAO_FORCA_TOPICO;

CREATE TABLE BANCA(
    ID INTEGER PRIMARY KEY NOT NULL,
    NOME VARCHAR(200) NOT NULL
);

CREATE TABLE ORGAO(
    ID INTEGER PRIMARY KEY NOT NULL,
    NOME VARCHAR(200) NOT NULL
);

CREATE TABLE PROVA(
    ID INTEGER PRIMARY KEY NOT NULL,
    NOME VARCHAR(300) NOT NULL
);

CREATE TABLE ASSUNTO(
    ID INTEGER PRIMARY KEY NOT NULL,
    NOME VARCHAR(200) NOT NULL
);

CREATE TABLE TOPICO(
    ID INTEGER PRIMARY KEY NOT NULL,
    NOME VARCHAR(200) NOT NULL
);

CREATE TABLE QUESTAO_FORCA(
    ID INTEGER PRIMARY KEY NOT NULL,
    ID_BANCA INTEGER NOT NULL,
    ID_ORGAO INTEGER NOT NULL,
    ID_PROVA INTEGER NOT NULL,
    ID_ASSUNTO INTEGER NOT NULL,
    ANO INTEGER NOT NULL,
    ENUNCIADO VARCHAR(500) NOT NULL,
    RESPOSTA VARCHAR(100) NOT NULL,
    ID_SITE_ORIGEM VARCHAR(30) NULL,
    FOREIGN KEY(ID_BANCA) REFERENCES BANCA(ID),
    FOREIGN KEY(ID_ORGAO) REFERENCES ORGAO(ID),
    FOREIGN KEY(ID_PROVA) REFERENCES PROVA(ID),
    FOREIGN KEY(ID_ASSUNTO) REFERENCES ASSUNTO(ID)
);


INSERT INTO BANCA(ID, NOME) VALUES (1, 'FEMPERJ');
INSERT INTO BANCA(ID, NOME) VALUES (2, 'CESPE');
INSERT INTO BANCA(ID, NOME) VALUES (3, 'MGA');
INSERT INTO BANCA(ID, NOME) VALUES (4, 'FGV');
INSERT INTO BANCA(ID, NOME) VALUES (5, 'FCC');

INSERT INTO ORGAO(ID, NOME) VALUES (1, 'TCE-RJ');
INSERT INTO ORGAO(ID, NOME) VALUES (2, 'TCE-MG');
INSERT INTO ORGAO(ID, NOME) VALUES (3, 'TCE-PB');
INSERT INTO ORGAO(ID, NOME) VALUES (4, 'TCE-PR');
INSERT INTO ORGAO(ID, NOME) VALUES (5, 'TCE-CE');
INSERT INTO ORGAO(ID, NOME) VALUES (6, 'TCE-SE');

INSERT INTO PROVA(ID, NOME) VALUES (1, 'Analista de Controle Externo - Organizacional - Tecnologia da Informação');
INSERT INTO PROVA(ID, NOME) VALUES (2, 'Analista de Controle Externo - Ciência da Computação');
INSERT INTO PROVA(ID, NOME) VALUES (3, 'Agente de Documentação');
INSERT INTO PROVA(ID, NOME) VALUES (4, 'Analista de Controle - Tecnologia da Informação');
INSERT INTO PROVA(ID, NOME) VALUES (5, 'Informática');
INSERT INTO PROVA(ID, NOME) VALUES (6, 'Analista de Tecnologia da Informação - Desenvolvimento');
INSERT INTO PROVA(ID, NOME) VALUES (7, 'Analista de Controle Externo - Auditoria de Tecnologia da Informação');
INSERT INTO PROVA(ID, NOME) VALUES (8, 'Analista de Controle Externo - Tecnologia da Informação');

INSERT INTO ASSUNTO(ID, NOME) VALUES ( 1, 'Sistemas Operacionais');
INSERT INTO ASSUNTO(ID, NOME) VALUES ( 2, 'Segurança da Informação');
INSERT INTO ASSUNTO(ID, NOME) VALUES ( 3, 'Noções de Informática');
INSERT INTO ASSUNTO(ID, NOME) VALUES ( 4, 'Redes de Computadores');
INSERT INTO ASSUNTO(ID, NOME) VALUES ( 5, 'Governança de TI');
INSERT INTO ASSUNTO(ID, NOME) VALUES ( 6, 'Engenharia de Software');
INSERT INTO ASSUNTO(ID, NOME) VALUES ( 7, 'Banco de Dados');
INSERT INTO ASSUNTO(ID, NOME) VALUES ( 8, 'Redes de Computadores');
INSERT INTO ASSUNTO(ID, NOME) VALUES ( 9, 'Programação');
INSERT INTO ASSUNTO(ID, NOME) VALUES (10, 'Arquitetura de Software');
INSERT INTO ASSUNTO(ID, NOME) VALUES (11, 'Algoritmos e Estrutura de Dados');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (1, 'Q973873', 1, 1, 1, 1, 2012, 'O núcleo do sistema operacional, os drivers, os utilitários e os aplicativos são representados internamente por instruções de máquina, e se diferenciam de acordo com sua capacidade de interagir com o hardware. Enquanto aplicativos e utilitários possuem acesso mais restrito, os drivers e o núcleo devem ter pleno acesso ao hardware para poder configurá-lo e gerenciá- lo. Para que os acessos sejam diferenciados dentre os diversos elementos de software, os processadores contam com', 'níveis de privilégio de execução');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (2, 'Q973868', 1, 1, 1, 2, 2012, 'Alguns firewalls têm a capacidade de guardar o estado das últimas conexões efetuadas e inspecionar o tráfego para diferenciar pacotes legítimos dos ilegítimos, em função do estado dessas conexões. Esse tipo de firewall tem a denominação de', 'Firewall Stateful Inspection');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (3, 'Q973866', 1, 1, 1, 3, 2012, 'Um incômodo frequente no ambiente de correio eletrônico é o recebimento de mensagens não solicitadas, chamadas de spam. Uma técnica usada para diminuir o recebimento de spam é o uso de', 'Sender Policy Framework');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (4, 'Q973865', 1, 1, 1, 3, 2012, 'Um ataque que ocorre com razoável frequência é aquele em que o atacante consegue alterar uma consulta (query) a uma base de dados, consulta essa previamente codificada em uma aplicação, através da manipulação da entrada de dados desta aplicação. Esse ataque é chamado de', 'SQL injection');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (5, 'Q973863', 1, 1, 1, 3, 2012, 'Após a invasão de um sistema, uma análise identificou que o ataque ocorreu devido a uma falha de programação em um aplicativo, que permitiu que fossem ultrapassados os limites de uma área sua de entrada de dados, sobrescrevendo a memória adjacente e ali inserindo um código malicioso. Essa circunstância é denominada', 'Buffer Overflow');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (6, 'Q973856', 1, 1, 1, 4, 2012, 'João acabou de selecionar um link para obter uma página Web de dentro do seu browser Web, o qual está configurado como um cliente HTTP com conexões não-persistentes. O endereço IP para a URL selecionada não está armazenado no seu host local. Os protocolos das camadas de aplicação e de transporte que serão usados para completar a requisição feita por João, além do protocolo HTTP, serão', 'DNS e TCP');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (7, 'Q973849', 1, 1, 1, 5, 2012, 'Dos quatro domínios do COBIT 4.1, aquele preocupado com a definição e a manutenção dos níveis de serviço (SLA) é o domínio denominado:', 'entrega e suporte');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (8, 'Q973834', 1, 1, 1, 6, 2012, 'SCRUM é um processo de desenvolvimento de software iterativo e incrementai. Para tanto, ele propõe a divisão do projeto em ciclos chamados', 'Sprint');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (9, 'Q973832', 1, 1, 1, 6, 2012, 'A UML define que um diagrama de sequência pode representar o envio de mensagem de um objeto para ele próprio. Esta característica é chamada de Autodelegação. Com base nessa característica, as mensagens de Autodelegação podem ser:', 'síncronas ou assíncronas');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (10, 'Q973829', 1, 1, 1, 5, 2012, 'O Business Processing Modeling Notation (BPMN) (em português: Notação de Modelagem de Processos de Negócio) é uma notação gráfica definida pelo Object Management Group (OMG) para definição de processos de negócios. Segundo o BPMN, o termo que define um processo executado externamente a uma empresa (onde a empresa não tem controle sobre a sua gerência) é o processo:', 'Abstrato');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (11, 'Q973825', 1, 1, 1, 7, 2012, 'O termo “Sistemas Gerenciadores de Bancos de Dados” é usado para caracterizar os programas que tratam e controlam o acesso aos bancos de dados. Uma funcionalidade que usualmente NÃO é coberta pelos SGBDs é:', 'normalização de dados');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (12, 'Q973824', 1, 1, 1, 7, 2012, 'Data warehouses podem ser considerados um tipo especial de bancos de dados, com certas características decorrentes do uso a que são destinados. Diferentemente dos bancos transacionais, certas exigências de projeto de bancos de dados são de certa forma relaxadas por conta disso. No caso mais comum, isso ocorre com relação à:', 'normalização');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (13, 'Q507914', 1, 1, 1, 8, 2012, 'O serviço de diretório padrão adotado em sistemas abertos é o', 'LDAP');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (14, 'Q507909', 1, 1, 1, 8, 2012, 'Os padrões de rede sem fio 802.11a, 802.11b e 802.11g fazem o controle de acesso ao meio através do', 'CSMA/CA');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (15, 'Q507907', 1, 1, 1, 8, 2012, 'O protocolo padrão TCP/IP para gerenciamento de redes é o SNMP. No entanto, esse protocolo não especifica exatamente quais dados podem ser consultados e/ou alterados em cada dispositivo. Os detalhes de cada dispositivo, que informações este precisa manter e quais as operações permitidas ficam armazenadas em uma estrutura de dados específica, defnidas em um padrão separado. Essa estrutura de dados é conhecida como', 'MIB');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (16, 'Q507906', 1, 1, 1, 8, 2012, 'Uma das ferramentas de depuração mais utilizadas em redes TCP/IP é conhecida como PING. Essa ferramenta é baseada no protocolo', 'ICMP');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (17, 'Q507905', 1, 1, 1, 8, 2012, 'Em redes baseadas no padrão ethernet, para que um equipamento se comunique com outro na mesma rede física, é necessário que o equipamento de origem saiba o endereço físico do equipamento destino. O mapeamento dinâmico de endereços IP para endereços físicos em uma rede ethernet é feito através do protocolo', 'ARP');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (18, 'Q507895', 1, 1, 1, 5, 2012, 'Suponha que o setor de TI de uma empresa verifque a necessidade de restaurar a operação normal de um serviço o mais rápido possível, de modo a cumprir os acordos de nível de serviço contratados com fornecedores. O processo do ITIL v3 responsável por isso é denominado gerenciamento de', 'incidentes');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (19, 'Q507879', 1, 1, 1, 9, 2012, 'Muitos portais corporativos permitem que seus usuários recebam informações sobre conteúdos recentemente atualizados. Uma das formas de transmitir esse tipo de informação é a utilização de feeds RSS. O usuário efetua inscrição no portal e utiliza um programa para leitura de feeds. O RSS pode ser encontrado na versões 1.0, sendo chamado de “RDF Site Summary”, e na versão 2.0, sob o nome de “Really Simple Syndication”. A linguagem utilizada para representação de dados em RSS 2.0 é', 'XML');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (20, 'Q507877', 1, 1, 1, 7, 2012, 'Operações de carga em data warehouses normalmente fazem uso de utilitários para carga rápida de dados, como, por exemplo, o SQL*LOADER no Oracle, o LOAD DATA INFILE no MySQL, ou o BCP no SQL Server. Esse tipo de utilitário usualmente inclui registros (ou exporta) num modo operacional conhecido pelo termo', 'bulkcopy');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (21, 'Q507869', 1, 1, 1, 10, 2012, 'A Arquitetura Orientada a Serviços (SOA) NÃO é caracterizada por', 'assincronicidade');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (22, 'Q973842', 1, 1, 1, 9, 2012, 'Na linguagem XML, a tag <! > denota', 'comentário');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (23, 'Q949807', 2, 2, 2, 7, 2018, 'Na técnica de árvore de decisão em data mining, é empregada a abordagem denominada', 'estratificação');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (24, 'Q949806', 2, 2, 2, 7, 2018, 'A forma de navegação por nível de granularidade em um modelo de dados dimensional em que os detalhes de uma informação sejam recuperados de outra estrutura é chamada', 'drill-through');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (25, 'Q949803', 2, 2, 2, 7, 2018, 'Uma empresa, ao implementar técnicas e softwares de big data, deu enfoque diferenciado à análise que tem como objetivo mostrar as consequências de determinado evento. Essa análise é do tipo:', 'prescritiva');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (26, 'Q949800', 2, 2, 2, 6, 2018, 'O planejamento de testes é governado pela necessidade de selecionar alguns poucos casos de teste de um grande conjunto de possíveis casos. O exame que avalia se um grupo de entrada de dados resultou nas saídas pretendidas, levando-se em consideração a especificação do programa, é denominado teste da', 'caixa preta');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (27, 'Q949798', 2, 2, 2, 9, 2018, 'A recomendação do World Wide Web Consortium (W3C) que especifica como descrever formalmente os elementos em um documento XML para verificar se cada item de conteúdo no documento adere à descrição do elemento no qual o conteúdo deve ser colocado é designada', 'XSD');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (28, 'Q949797', 2, 2, 2, 1, 2018, 'A informação que é enviada por um servidor Web e pode ficar armazenada no navegador do usuário denomina-se', 'cookie');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (29, 'Q949794', 2, 2, 2, 6, 2018, 'Em uma programação orientada a objetos, a técnica de programação que mantém ocultos detalhes internos do funcionamento dos métodos de uma classe é denominada', 'encapsulamento');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (30, 'Q949793', 2, 2, 2, 11, 2018, 'Uma estrutura de dados em que o primeiro elemento inserido seja o primeiro elemento a ser retirado é denominada', 'fila');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (31, 'Q862715', 2, 3, 3, 3, 2018, 'Entre os vários tipos de programas utilizados para realizar ataques a computadores, aquele capaz de se propagar automaticamente pelas redes, enviando cópias de si mesmo entre computadores, é conhecido como', 'worm');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (32, 'Q693440', 2, 4, 4, 8, 2016, 'Uma consulta DNS inicial típica, originada de uma máquina de usuário e encaminhada ao servidor de nomes local para um nome de domínio externo não armazenado em cache DNS, será do tipo', 'recursiva');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (33, 'Q693420', 2, 4, 4, 7, 2016, 'Na modelagem de dados, o elemento que descreve as propriedades ou características em entidades e relacionamentos denomina-se', 'atributo');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (34, 'Q686209', 3, 5, 5, 6, 2015, 'Quando duas ou mais classes distintas possuem métodos de mesmo nome, de forma que uma função possa utilizar um objeto de qualquer uma das classes sem necessidade de tratar de forma diferenciada conforme a classe do objeto, tem-se:', 'polimorfismo');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (35, 'Q686207', 3, 5, 5, 7, 2015, 'Em SQL, a cláusula utilizada para expressar a condição que deve satisfazer cada grupo é denominada', 'HAVING');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (36, 'Q686206', 3, 5, 5, 3, 2015, 'Qual o nome dado a redes denominadas "locais" por cobrirem apenas uma área limitada?', 'LAN');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (37, 'Q686205', 3, 5, 5, 7, 2015, 'Em um Sistema de Gerência de Banco de Dados (SGBD), existe um conjunto de procedimentos (transações). A transação definida como: "Todas as ações que compõem a unidade de trabalho da transação devem ser concluídas com sucesso, para que seja efetivada. Se durante a transação qualquer ação que constitui unidade de trabalho falhar, a transação inteira deve ser desfeita (rollback). Quando todas as ações são efetuadas com sucesso, a transação pode ser efetivada e persistida em banco (commit)" é classificada como:', 'Atomicidade');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (38, 'Q686202', 3, 5, 5, 3, 2015, 'Qual o tipo de Servidor responsável pela conversão de endereços de sites em endereços IP e vice-versa?', 'DNS');
 
INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (39, 'Q686199', 3, 5, 5, 3, 2015, 'A Segurança da Informação é alicerçada em quatro princípios básicos. O princípio que garante que a informação é proveniente da fonte anunciada e que não foi alvo de mutações ao longo de um processo é o da:', 'autenticidade');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (40, 'Q686198', 3, 5, 5, 3, 2015, 'O método criptográfico que utiliza apenas uma chave para a decodificação da informação é conhecida por', 'chave simétrica');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (41, 'Q686197', 3, 5, 5, 3, 2015, 'Técnica que faz com que a URL (Uniform Resource Locator ou Localizador Uniforme de Recursos) de um site passe a apontar para um servidor diferente do original', 'Pharming');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (42, 'Q686196', 3, 5, 5, 3, 2015, 'Local onde ficam instalados o processador e a memória RAM de um computador pessoal, entre outros componentes, é', 'Motherboard');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (43, 'Q567881', 4, 6, 6, 7, 2015, 'No Oracle, a linguagem procedural que permite estreito acoplamento com o SQL é conhecida como', 'PL/SQL');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (44, 'Q567875', 4, 6, 6, 6, 2015, 'Identificar o conhecimento e os requisitos dos stakeholders é uma atividade importante do ciclo de desenvolvimento de um projeto de software. Considere que você tem a responsabilidade de desenvolver requisitos inovadores, porém, neste momento não está muito interessado em estabelecer requisitos precisos sobre o comportamento do sistema. Dentre as técnicas de elicitação de requisitos a seguir, a mais indicada para esboçar uma visão inicial do sistema e identificar fatores inesperados de satisfação dos stakeholders é', 'brainstorming');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (45, 'Q567870', 4, 6, 6, 8, 2015, 'Uma equipe precisa desenvolver um aplicativo de transmissão de voz e vídeo através da rede. O importante é que a latência seja a menor possível, e admite-se que haja perda ou corrupção de parte dos pacotes transmitidos. Nesse contexto, o protocolo mais indicado para ser usado pelo aplicativo para realizar a transmissão é', 'udp');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (46, 'Q567866', 4, 6, 6, 8, 2015, 'No âmbito das APIs RESTful para acesso e manipulação de uma coleção de recursos designados por URIs específicas, o método do protocolo HTTP utilizado para criação de uma nova entrada na coleção de recursos é', 'POST');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (47, 'Q528413', 5, 5, 7, 2, 2015, 'Após o exame no computador do funcionário de uma instituição foi detectada sua participação em um ataque de DDoS sem seu conhecimento, em que seu computador atuava como um "zumbi", controlado remotamente por um atacante. Isso ocorreu porque o computador estava infectado por', 'bot');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (48, 'Q526160', 5, 5, 7, 5, 2015, 'A área de TI de um Tribunal de Contas estabeleceu um conjunto de auditorias planejado para um determinado período de tempo, com o propósito específico de avaliar a integridade dos dados comunicados entre os sistemas de informação, ou seja, suas interfaces. Essas auditorias fazem parte de um', 'programa');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (49, 'Q526146', 5, 5, 7, 8, 2015, 'Este protocolo permite que os gerentes de rede configurem uma faixa de endereços IP por rede em vez de um endereço IP por host, melhorando a capacidade de gerenciamento da rede. O servidor mantém esse conjunto de endereços IP disponíveis e entrega aos hosts sob demanda. Trata-se do protocolo', 'DHCP');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (50, 'Q516693', 5, 5, 7, 2, 2015, 'Um usuário reclamou da lentidão e do comportamento errático de seu computador. Uma análise do equipamento identificou a presença de vários processos maliciosos, oriundos de um programa baixado da Internet, que o usuário julgava ser apenas um jogo inofensivo. No caso, a máquina foi comprometida devido a um', 'Cavalo de Troia');

INSERT INTO QUESTAO_FORCA(ID, ID_SITE_ORIGEM, ID_BANCA, ID_ORGAO, ID_PROVA, ID_ASSUNTO, ANO, ENUNCIADO, RESPOSTA)
VALUES (51, 'Q507896', 1, 1, 8, 5, 2012, 'O volume do ITIL v3 que visa à liberação de um serviço, abordando a implantação de todos os seus aspectos, é o volume de', 'transição de serviço');


