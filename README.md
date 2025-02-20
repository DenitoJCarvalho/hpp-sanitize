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
<small style="font-size: 10px">v.1.0.5 — 2025-02-21: Correção do tipo de retorno e problemas na externsão após transpilação.</small>

<small style="font-size: 10px">v.1.0.1 — 2025-02-20: Correção do tipo de retorno.</small>

<small style="font-size: 10px">v.1.0.0 — 2025-02-20: Implementação de middleware para sanitizar parâmetros duplicados na query string.</small>
  
## Licença
Este projeto é licenciado sob a licença MIT.

