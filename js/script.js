const phone_number_contact = document.getElementById('phone_number_contact') // Seletor do campo de telefone

phone_number_contact.addEventListener('keypress', (e) => phoneMask(e.target.value)) // Dispara quando digitado no campo
phone_number_contact.addEventListener('change', (e) => phoneMask(e.target.value)) // Dispara quando autocompletado o campo

const phoneMask = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    phone_number_contact.value = valor // Insere o(s) valor(es) no campo
}