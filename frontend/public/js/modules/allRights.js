const rights = document.querySelector('small#rights');
const ano = new Date().getFullYear()

export async function allRights() {
  rights.innerHTML = `
    &copy; ${ano} - Dennis J de Carvalho
  `
}
