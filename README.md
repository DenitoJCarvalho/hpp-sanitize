# HPP-Sanitize

O objetivo desse middleware é ajudar a combater **_Ataque de Poluição de Parâmetro HTTP_**, prevenindo a exposição indevida de informações sensíveis por meio de parâmetros duplicados em URLs.

## Como ele funciona?
Quando o middleware recebe uma requisição, ele verifica a presença de parâmetros duplicados em `request.body`, `request.query`, `request.params` ou `request.headers`. 

Por exemplo:
```
https://dominio.com.br?cliente=1&cliente=1&cliente=1
```
Esse tipo de situação pode causar comportamentos inesperados e expor dados que não deveriam ser acessíveis.

Com o middleware, a sanitização é realizada removendo parâmetros duplicados e gerando um log de aviso sempre que uma tentativa de ataque é detectada.

Se `block: true` estiver ativo (padrão), a requisição será bloqueada e um log de aviso informará a tentativa de ataque junto com o **IP** do possível atacante.

Se `block: false` estiver ativo, a requisição não será bloqueada, mas os parâmetros duplicados serão sanitizados e um log  de aviso registrará a tentativa de ataque e o **IP** do possível atacante.

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

Também é possivel desativar o bloqueio, permitindo que apenas um parâmetro seja mantido e registrando um aviso de possível ataque.

Se optar por essa configuração, certifique-se de validar os dados conforme sua necessidade para evitar vulnerabilidades inesperadas.

```ts
app.use(hppSanitize({ block: false }))
```

## Gostaria de contribuir
 - Crie uma branch com o nome da sua proposta e envie um _pull request_ para análise.

## Bugs
  - Se encontrar algum bug, abra uma issue no github para que possamos analisá-lo.

## ChangeLog
  Para ver as versões e notas de release, acesse a página de [Releases](https://github.com/DenitoJCarvalho/hpp-sanitize/releases).

## Licença
Este projeto é licenciado sob a licença MIT.

