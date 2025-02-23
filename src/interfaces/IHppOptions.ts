
/**
 * Interface para as opções de configuração do middleware HPP.
 *
 * @interface IHppOptions
 * @property { booelan } block - Se verdadeiro, permite bloquear a requisição em caso de ataque HPP.
 * @property { booelan } keeplast - Se verdadeiro, permite manter o último valor do array em caso de ataque HPP.
 */
interface IHppOptions {
  block?: boolean;
  keeplast?: boolean;
}
export { IHppOptions };
