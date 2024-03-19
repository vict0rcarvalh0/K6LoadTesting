import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // número de usuários virtuais simulados
  duration: '30s', // duração do teste
};

export default function () {
  let res = http.get('http://localhost:3001/link-lists/uploaded-file/file_model.csv'); // Substitua pelo URL real do seu endpoint GET

  // Verifica se a solicitação foi bem-sucedida
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Aguarda por um período de tempo aleatório entre 1 e 3 segundos antes de fazer a próxima solicitação
  sleep(Math.random() * 2 + 1);
}
