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
Instale o pacote utilizando o NPM:
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

## ChangeLog
  Para ver as versões e notas de release, acesse a página de [Releases](https://github.com/DenitoJCarvalho/hpp-sanitize/releases).

## Licença
Este projeto é licenciado sob a licença MIT.

