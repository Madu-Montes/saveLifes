document.getElementById('donation-form').addEventListener('submit', function(event) {
  var cpfInput = document.getElementById('cpf');
  var cpf = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos do CPF
  if (cpf.length !== 11) {
    alert('CPF inválido! Deve conter 11 dígitos.');
    event.preventDefault(); 
    return; 
  }

  var birthDateInput = document.getElementById('dtn');
  var birthDate = new Date(birthDateInput.value); //pega a dtn
  var today = new Date(); //pega a dt atual
  var age = today.getFullYear() - birthDate.getFullYear(); // o ano atual - e o ano de nanscimento 
  var monthDiff = today.getMonth() - birthDate.getMonth(); //o mes atual - e o mes de nanscimento 
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--; // verifica se já fez aniversário este ano
  }

  if (age < 16) {
    alert('Você precisa ter pelo menos 16 anos para doar sangue.');
    event.preventDefault(); 
    return; 
  }

  var weightInput = document.getElementById('weight');
  var weight = parseFloat(weightInput.value);
  if (weight < 50) {
    alert('Você precisa ter pelo menos 50kg para doar sangue.');
    event.preventDefault(); 
    return; 
  }

});
