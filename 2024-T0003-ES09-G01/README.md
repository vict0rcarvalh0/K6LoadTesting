# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="./assets/inteli_logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" width="300px"></a>
</p>

# Construção de testes automatizados e controle de qualidade de software

## Grupo 1 - Só Track.co boa

## Integrantes
- <a href="https://www.linkedin.com/in/felipe-gomes-dev/">Felipe Gomes</a> 
- <a href="https://www.linkedin.com/in/liviapcoutinho/">Livia Coutinho</a> 
- <a href="https://www.linkedin.com/in/lu%C3%ADsa-leite-681443230/">Luísa Leite</a>
- <a href="https://www.linkedin.com/in/luiz-k-alencar/">Luiz Alencar</a> 
- <a href="https://www.linkedin.com/in/marcos-vinicius-166531239/">Marcos Moura</a>
- <a href="https://www.linkedin.com/in/matheusmacedosantos/">Matheus Macedo</a> 
- <a href="https://www.linkedin.com/in/priscila-falc%C3%A3o-3435a1244/">Priscila Falcão</a> 
- <a href="https://www.linkedin.com/in/victor-severiano-de-carvalho/">Victor Carvalho</a> 


## Sumário

>[Descrição](#-descrição)

> [Como começar](#-como-começar)

> [Estrutura de pastas](#-estrutura-de-pastas)

> [Histórico de lançamentos](#-histórico-de-lançamentos)

> [Licença/License](#-licençalicense)

> [Referências](#-referências)

## Entregas

*Vale destacar que essa seção só existe durante o desenvolvimento do projeto e tem o fim de contribuir (facilitar) o trabalho de correção dos professores e orientador. Ao final do projeto, será deletada. Toda sprint ela será atualizada.*

* [Definição de Requisitos Funcionais](./docs/doc.md/#definição-dos-requisitos-funcionais)

* [Prototipação de frontend](./docs/doc.md/#prototipação-do-front-end)

* [Diagrama Nível 1 C4 Model - Contexto](./docs/doc.md/#diagrama-nível-1-c4-model---contexto)

* [Diagrama Nível 2 C4 model - Container](./docs/doc.md/#diagrama-nível-2-c4-model---contêiner)

* [Plano e definição e descrição dos testes](./docs/doc.md/#testes)



## 📝 Descrição

A implementação de testes automatizados nessas funcionalidades críticas não apenas reduzirá a probabilidade de regressões durante os deploys, mas também permitirá uma rápida detecção de problemas potenciais, contribuindo para a identificação precoce de bugs. Isso, por sua vez, resultará em uma melhoria substancial na confiança do cliente, pois a plataforma será percebida como mais robusta e confiável. Para endereçar essa questão de forma eficaz, é crucial focar nas funcionalidades CORE, especificamente em Pesquisas, Dashboards, Distribuição e Interação, uma vez que essas telas desempenham um papel central em nossa plataforma

## 📁 Estrutura de Pastas

Este repositório contém várias pastas e arquivos importantes. Aqui está um resumo de cada um deles:

- `README.md`: Este arquivo serve como um guia e explicação geral sobre o projeto. É o documento que você está lendo agora.

- `docs`: Neste diretório há toda a documentação do desenvolvimento do projeto e outros arquivos relacionados a documentação.

- `tests`: Pasta que contém o código-fonte do projeto. Aqui você encontrará todos os scripts e arquivos de código necessários para executar e entender o funcionamento do projeto.

- `assets`: Pasta que contém arquivos de mídia, contando principalmente com imagens, gráficos e outros.


## Documentação

  Confira nossa documentação no botão abaixo:

  [![Button Click]][Link]

  [Button Click]: https://img.shields.io/badge/Documentação-37a779?style=for-the-badge
  [Link]: ./docs/doc.md


## 📋 Licença/License

<a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023M8T2-Inteli/grupo1">Inteli</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>. <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"></p>

## Métricas

### **Objetivos, Questões:**

**Objetivo 1: O sistema deve assegurar que irá armazenar e proteger todos os dados dos clientes;**

Q1 - Que medidas de segurança podemos implementar para proteger os dados dos clientes contra acesso não autorizado ou violações de segurança?

R: Implementação do Auth0 que é uma plataforma de identidade como serviço (IDaaS) que oferece soluções completas para autenticação, autorização e gerenciamento de identidade em aplicativos da web, aplicativos móveis e APIs.

Q2 - Como podemos garantir a integridade e confidencialidade dos dados dos clientes durante o armazenamento e transmissão?

R: Realização frequente de backups de dados sensíveis utilizando o serviço de backup centralizado da AWS, AWS Backup.

Q3 - Como o sistema lidará com um aumento repentino no volume de dados dos clientes sem acontecer algum tipo de perda?

R: Serão utilizados os serviços da AWS para aplicar o Balanceamento de carga e para fazer uma arquitetura escalável na nuvem.

Q4 - Como podemos garantir a recuperação rápida e eficiente dos dados dos clientes em caso de falha do sistema ou desastre?

R: Aplicação de um sistema de failover automático em que o tráfego é transferido para um local de backup caso o local principal se torne inacessível

**Objetivo 1: O sistema deve assegurar que irá armazenar e proteger todos os dados dos clientes;**

1. 90% de sucesso na recuperação de dados em caso de aumento repentino no volume, considerando o antes e depois do aumento.
2. Três horas no máximo necessário para recuperar os dados dos clientes em caso de falha do sistema ou desastre.

**Objetivo 2: O sistema deve ter suas funcionalidades funcionado em diferentes ocasiões;** 

Q1 - Como podemos garantir que todas as funcionalidades do sistema permaneçam operacionais mesmo em situações de carga pesada?

R: Implementação de testes de carga com o Apache JMeter e a limitação de requisições.

Q2 - Como podemos simular condições adversas e validar a capacidade do sistema de se recuperar sem perda de funcionalidade?

R: Realização de testes de estresse com o JMeter e de injeção de falhas utilizando o Jest para validar.

Q3 - Que métricas de desempenho devemos monitorar para avaliar a capacidade do sistema de funcionar em diferentes ocasiões?

R: É necessário que as métricas de tempo de resposta, taxa de erros e de disponibilidade do sistema recebam atenção especial para avaliar a capacidade do sistema de funcionar em diferentes ocasiões.

Q4 - Como podemos usar ferramentas de monitoramento para identificar padrões de uso do sistema e antecipar potenciais problemas de desempenho antes que afetem a funcionalidade?

R: Para monitorar padrões de uso do sistema, pode-se utilizar ferramentas como o Prometheus, uma ferramenta de monitoramento de código aberto que oferece coleta de métricas, armazenamento de séries temporais, consultas e alertas.

**Objetivo 2: O sistema deve ter suas funcionalidades funcionado em diferentes ocasiões;**

1. 95% do tempo em que todas as funcionalidades do sistema estão operacionais.
2. Em uma escala de 0 a 5 o sistema deve ter a capacidade 4 de se recuperar sem perda de funcionalidade em condições adversas simuladas. Sendo que:
Nenhuma Capacidade de Recuperação (0):
O sistema não possui nenhum mecanismo de recuperação em caso de falha.
Qualquer interrupção ou falha no sistema resultará em perda significativa de funcionalidade, dados ou tempo de inatividade.
Capacidade Mínima de Recuperação (1):
O sistema possui algumas medidas básicas de recuperação, mas são limitadas e não garantem uma recuperação completa.
A recuperação pode envolver reinicialização manual do sistema ou restauração a partir de backups.
Capacidade de Recuperação Limitada (2):
O sistema possui algumas capacidades de recuperação, mas elas são limitadas em escopo ou eficácia.
Pode haver algum tempo de inatividade ou perda de dados durante o processo de recuperação.
Capacidade de Recuperação Moderada (3):
O sistema possui recursos de recuperação moderados que permitem uma recuperação rápida e eficiente em muitos cenários de falha.
O tempo de inatividade é minimizado e a perda de dados é limitada durante a recuperação.
Capacidade de Recuperação Avançada (4):
O sistema possui recursos avançados de recuperação que permitem uma recuperação rápida e automática em uma ampla gama de cenários de falha.
O tempo de inatividade é quase inexistente e a perda de dados é mínima ou inexistente durante a recuperação.
Capacidade de Recuperação Total (5):
O sistema possui capacidades de recuperação total que garantem uma recuperação automática e imediata em qualquer cenário de falha.
O sistema é altamente resiliente e é capaz de se adaptar a condições adversas sem perda de funcionalidade ou tempo de inatividade perceptível.
3. Identificar um dia antes padrões de uso mal intencionados do sistema e antecipação de potenciais problemas de desempenho.

**Objetivo 3: Atingir sucesso nas metas da Sprint de forma consistente;**

Q1 - Quais são os principais indicadores de sucesso para as metas da Sprint que podemos medir regularmente para garantir que estamos progredindo na direção certa?

R: O cumprimento dos itens do backlog e a velocidade de conclusão das tarefas da sprint são bons indicadores de sucesso para as metas da Sprint.

Q2 - Quais são os principais obstáculos ou desafios que podem impedir o sucesso das metas da Sprint e como podemos mitigá-los ou superá-los efetivamente?

R: Os principais obstáculos que podem impedir o sucesso das metas da Sprint estão relacionadas à constância e à velocidade de entrega das tarefas dos constituintes do grupo.

Q3 - Que tipo de feedback dos stakeholders e professores podemos coletar para avaliar o sucesso das metas da Sprint e identificar áreas de melhoria contínua?

R: Feedbacks sobre relacionamento da equipe e sobre a expectativa para a entrega são de muita ajuda para identifcar quais são as principais áreas de melhoria.

Q4 - Como podemos adaptar e ajustar as metas da Sprint com base no feedback e nas lições aprendidas de sprints anteriores para aumentar a probabilidade de sucesso futuro?

R: Identificação dos 20% dos problemas que correspondem a 80% dos impactos nas entregas, reuniões frequentes entre os membros do grupo e a validação e verificação contínua das entregas.

**Objetivo 3: Atingir sucesso nas metas da Sprint de forma consistente;**

1. Aumentar em 15% as metas da Sprint concluídas dentro do prazo.
2. Identificar 90% desafios que podem impedir o sucesso das metas da Sprint.
3. Aumentar os pontos positivos em 20% nos feedbacks dos professores e stakholders sobre o sucesso das metas da Sprint.

**Objetivo 4:** **Otimizar o trabalho em progresso (WIP) durante as sprints;**

Q1 - Quais são os principais pontos de estrangulamento ou gargalos que estão contribuindo para um alto nível de trabalho em progresso (WIP) durante as sprints e como podemos identificá-los?

R: A má subdivisão de tarefas leva a situações de depencência de tarefas. Além disso, há a concentração de tarefas em alguns membros do grupo, o que diminui a velocidade das entregas.

Q2 - Quais são os benefícios de reduzir o trabalho em progresso (WIP) durante as sprints e como podemos mostrar isso para todos da equipe?

R: Ao limitar o WIP, a equipe pode se concentrar em concluir as tarefas atualmente em andamento antes de iniciar novas. Isso ajuda a evitar dispersão de esforços e aumenta a produtividade geral da equipe.

Q3 - Como podemos colaborar como equipe para priorizar e dividir o trabalho em tarefas menores e mais gerenciáveis, a fim de reduzir o trabalho em progresso (WIP) e melhorar a produtividade durante as sprints?

R: Divisão Incremental de Funcionalidades: Ao dividir as funcionalidades em partes menores, é importante que o grupo foque em entregar valor por meio de funcionalidades de maneira incremental. 

Q4 - Quais são as práticas ou técnicas ágeis que podemos implementar para limitar e gerenciar o trabalho em progresso (WIP) de forma mais eficaz durante as sprints?

R: O pair programming pode ser muito útil neste caso, uma vez que isto permite o compartilhamento de saberes entre os membros do grupo e a revisão antes da entrega de funcionalidades fica mais dinâmica.

**Objetivo 4: Otimizar o trabalho em progresso (WIP) durante as sprints;**

1. Diminuir em 30% o tempo em que cada tarefa fica em progresso durante as Sprints.
2. Concluir 95% de itens de trabalho iniciados que são concluídos dentro da Sprint.
3. Aumentar em 10% Avaliação da colaboração da equipe na priorização e divisão do trabalho em tarefas gerenciáveis.

**Objetivo 5:** **Aumentar a cobertura de código por testes automatizados;**

Q1 - Quais áreas do código atualmente têm pouca ou nenhuma cobertura de testes automatizados e como podemos identificar essas áreas de forma mais precisa?

Q2 - Quais são os desafios ou obstáculos que podem impedir o aumento da cobertura de código por testes automatizados e como podemos mitigá-los efetivamente?

Q3 - Que métricas podemos usar para medir a cobertura de código por testes automatizados e como podemos coletar e acompanhar esses dados de forma precisa e consistente ao longo do tempo?

Q4 - Quais práticas ou técnicas de teste automatizado podemos implementar para maximizar a cobertura de código de maneira eficiente e eficaz, levando em consideração as restrições de tempo e recursos da equipe?

**Objetivo 5: Aumentar a cobertura de código por testes automatizados;**

1. 80% do código fonte coberto por testes automatizados.
2. De 2 até 4 de testes automatizados desenvolvidos para cada funcionalidade do sistema.
3. 90% do testes automatizados que são executados com sucesso em cada build do sistema.

**Objetivo 6:** **Reduzir a densidade de erros e bugs por KLOC;**

Q1 - Como podemos melhorar o processo de revisão de código e testes para identificar e corrigir erros e bugs de forma mais eficiente e eficaz durante o desenvolvimento?

R: As práticas de Test-Driven Development (TDD) podem auxiliar nesse quesito uma vez que no TDD os testes são escritos antes do código de produção. Isso ajuda a garantir que o código seja mais testável e tenha uma cobertura de teste adequada desde o início. Além disso, a verificação da cobertura de testes ajuda a garantir que os testes abrangem boa parte do código do sistema.

Q2 - Quais são as áreas do código que historicamente têm uma densidade mais alta de erros e bugs e como podemos direcionar nossos esforços para reduzir essa densidade nessas áreas críticas?

R: Historicamente, a área do código com mais erros é a que envolve a lógica de negócios, especialmente quando os requisitos são mal compreendidos ou mal documentados.

Q3 - Que métricas específicas podemos usar para medir a densidade de erros e bugs por KLOC e como podemos coletar e acompanhar esses dados de forma consistente ao longo do tempo?

R: Taxa de Defeitos por Linha de Código (Defects per KLOC): Esta métrica calcula o número médio de defeitos encontrados por mil linhas de código. Quanto maior o valor, maior a densidade de erros e bugs.
Taxa de Defeitos Críticos por Linha de Código (Critical Defects per KLOC): Esta métrica calcula o número médio de defeitos classificados como críticos por mil linhas de código. Defeitos críticos são aqueles que têm um impacto significativo na funcionalidade ou segurança do sistema.

Q4 - Como podemos promover uma cultura de qualidade e responsabilidade dentro da equipe incentivando a identificação proativa e a correção de erros e bugs durante todo as sprints?

R: O comprometimento com o daily meeting pelos membros a fim de compartilhar entre todos do grupo quais foram as atividades concluídas e quais são as próximas atividades a serem trabalhadas e a revisão completa dos artefatos a serem entregues com antecedência são muito importantes para garantir que a qualidade do produto entregue evolua.

**Objetivo 6: Reduzir a densidade de erros e bugs por KLOC;**

1. Encontrar dois erros no máximo por KLOC (1000 linhas).
2. 4 horas máxima para corrigir um erro ou bug após sua identificação.

**Objetivo 7:** **Melhorar a taxa de detecção de erros e bugs antes do lançamento na main;**

Q1 - Quais são os processos atuais de revisão de código e testes que temos em vigor e como podemos otimizá-los para identificar mais eficazmente erros e bugs antes do lançamento na main?

R: Os processos de revisão serão divididos e hierarquizados com o auxilio do Github, isso será feito da seguinte forma: A partir da programação de duplas, cada membro revisa o que o outro fez e sobe para uma branch do repositório do projeto. Após isso, alguém de fora da dupla irá avaliar e fazer o merge da branch criada com a main, garantindo que o processo de revisão seja realizado de maneira responsável.

Q2 - Quais são os principais tipos de erros e bugs que têm sido identificados após o lançamento na main e como podemos usar essas informações para priorizar nossos esforços de detecção precoce?

R: Os principais erros identificados são os de funcionalidade, que apesar de serem mais impactantes, estes são mais fáceis de se identificar e corrigir.

Q3 - Quais são as ferramentas e técnicas disponíveis que podemos utilizar para automatizar e agilizar o processo de detecção de erros e bugs durante o desenvolvimento?

R: O Jest é um dos frameworks de teste mais populares para JavaScript e TypeScript. Ele oferece uma ampla gama de recursos, incluindo suporte para testes de unidade, testes de integração, mocks e spies integrados, além de uma sintaxe simples e fácil de usar.

Q4 - Que métricas específicas podemos usar para medir a taxa de detecção de erros e bugs antes do lançamento na main e como podemos monitorar e analisar esses dados para identificar áreas de melhoria contínua?

R: Taxa de cobertura de testes: Essa métrica indica a porcentagem do código que está sendo exercida por testes automatizados. Uma alta taxa de cobertura de testes pode indicar uma maior probabilidade de detecção de erros e bugs durante o desenvolvimento.
Taxa de regressão: Essa métrica mede a proporção de erros que foram reintroduzidos em comparação com o número total de erros corrigidos em cada versão. Uma alta taxa de regressão pode indicar problemas na manutenção do código e na eficácia dos testes.
Tempo médio para detecção (MTTD): O MTTD mede o tempo médio que leva para detectar um erro ou bug desde sua introdução até sua detecção. Um MTTD baixo é desejável, pois indica uma detecção precoce de problemas.

**Objetivo 7: Melhorar a taxa de detecção de erros e bugs antes do lançamento na main;**

1. De todos os bugs existentes 80% serem identificados durante o desenvolvimento em comparação com os identificados após o lançamento na main.
2. Dois dias para identificar um bug desde sua introdução no código.
3. 80% dos bugs serem identificados durante testes de regressão antes do lançamento.
