# HPP-Sanitize

O objetivo desse middleware é ajudar a combater **_Ataque de Poluição de Parâmetro HTTP_**, prevenindo a exposição indevida de informações sensíveis por meio de parâmetros duplicados em URLs.

## Como ele funciona?
Quando o middleware recebe uma requisição, ele verifica se a request.query contém parâmetros duplicados. Por exemplo:
```
https://dominio.com.br?cliente=1&cliente=1&cliente=1
```
Esse tipo de situação pode causar comportamentos inesperados e expor dados que não deveriam ser acessíveis.

Com o middleware, a sanitização é realizada removendo parâmetros duplicados e gerando um log de aviso sempre que uma tentativa de ataque é detectada.

## Instalaçao
Instale o pcaote utilizando o NPM:
```
npm install hpp-sanitize 
```

## Como usá-lo?
Após a instalação, basta importar e usar o middleware no seu aplicativo Express.
```
import { hppSanitize } from 'hpp-sanitize';

app.use(hppSanitize());
```

## Gostaria de contribuir
 - Crie uma branch com o nome da sua proposta e envie um _pull request_ para análise.

## Bugs
  - Se econtrar algum bug, abra uma issue no github para que possamos analisá-lo.


## Histórico de versões
<details>
  <summary>v.1.1.0</summary>
  <small style="font-size: 12px">relase: 2025-02-23</small>
  <ul>
   <li style="font-size: 12px">Inclusão da opção <code>block</code>: permite bloquear a requisição em caso de tentativa de ataque HPP. Por padrão, o middleware apenas sanitiza os parâmetros e regsitra o ocorrido.
  
  <code> app.use(hppSanitize({ block: true }))</code>
  </li>

  <li style="font-size: 12px">
      Inclusão da opção <code>keeplast</code>: quando ativada, após sanitizar o parâmetro duplicado, mantém o último valor do array. Por padrão, o primeiro valor é mantido.

  <code>app.use(hppSanitize({ keeplast: true }))</code>
  </li>

  <li  style="font-size: 12px">
  Expansão da proteção para os seguintes objetos da requisição: <code>request.query</code>, <code>request.body</code>,<code> request.headers</code> e <code>request.params</code>.
  </li>

  <li style="font-size: 12px">
  Inclusão de JSDoc para melhor compreensão das funcionalidades e uso do middleware.
  </li>
  </ul>
</details>
<details>
  <summary>v.1.0.5</summary>
  <small style="font-size: 12px">relase: 2025-02-20</small>
  <ul>
    <li style="font-size: 12px">Implementação de middleware para sanitizar parâmetros duplicados na query string.</li>
  <ul>
</details>

## Licença
Este projeto é licenciado sob a licença MIT.

