# K6LoadTesting
## Relatório
### Rodando o projeto
<img src="https://github.com/vict0rcarvalh0/K6LoadTesting/blob/main/assets/img1.png">
<img src="https://github.com/vict0rcarvalh0/K6LoadTesting/blob/main/assets/img2.png">
<img src="https://github.com/vict0rcarvalh0/K6LoadTesting/blob/main/assets/img3.png">
<img src="https://github.com/vict0rcarvalh0/K6LoadTesting/blob/main/assets/img4.png">

### Criando o script e testando a carga de um endpoint tipo GET
Aqui, criei uma pasta que contém o script de teste que efetua um teste de carga com 10 usuários virtuais(virtual users) por 30 segundos:
``` javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, 
  duration: '30s',
};

export default function () {
  let res = http.get('http://localhost:3001/link-lists/uploaded-file/file_model.csv'); 

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(Math.random() * 2 + 1);
}
```

Em seguida, obtive os seguintes resultados:

<img src="https://github.com/vict0rcarvalh0/K6LoadTesting/blob/main/assets/img5.png">

## Tecnologia utilizada: K6
K6 é uma ferramenta para realização de testes de carga. Algumas das características do K6 são:

- Simplicidade: A sintaxe do K6 é bastante simples e fácil de entender, permitindo que até mesmo desenvolvedores com menos experiência em testes de carga possam utilizá-lo efetivamente.

- Escrita em JavaScript: K6 é escrito em JavaScript, o que facilita a sua integração com os projetos existentes e permite que os desenvolvedores aproveitem suas habilidades em JavaScript para criar e personalizar os testes.

- Escala: K6 é altamente escalável, permitindo simular milhares ou até mesmo milhões de usuários simultâneos, o que é crucial para testar o desempenho de aplicações web em produção.

- Suporte para Protocols: K6 oferece suporte para vários protocolos, incluindo HTTP, WebSocket, gRPC, entre outros, tornando-o adequado para testar uma ampla variedade de aplicações.

## Conceitos Aprendidos
Durante a criação do teste de carga com K6, foram aprendidos diversos conceitos importantes relacionados a testes de performance e estresse, tais como:

- RPS (Requisições por Segundo): Uma medida importante para avaliar o desempenho de uma aplicação, especialmente durante períodos de pico de tráfego. A capacidade de simular um determinado número de RPS é fundamental para identificar possíveis gargalos na aplicação.

- VU (Usuário Virtual): No contexto do K6, um VU representa um usuário virtual que executa um script de teste. Compreender como os VUs são utilizados para simular o comportamento de usuários reais em uma aplicação é crucial para criar testes de carga realistas.

- Cenários de Teste: K6 permite definir cenários de teste que descrevem o comportamento dos usuários durante a execução do teste. Compreender como criar cenários realistas é essencial para simular situações reais de uso da aplicação.

- Métricas de Desempenho: Durante a execução do teste de carga, é fundamental monitorar e analisar as métricas de desempenho, tais como tempo de resposta, taxa de erro e uso de recursos do sistema. Essas métricas fornecem insights valiosos sobre o desempenho da aplicação e ajudam a identificar possíveis problemas.
