document.getElementById('donation-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var dob = new Date(document.getElementById('dtn').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var cpf = document.getElementById('cpf').value;
    var weight = document.getElementById('weight').value;
  
    // Verifica se a idade é maior que 16 anos
    if (age < 16) {
      alert('Você precisa ter mais de 16 anos para doar sangue.');
      event.preventDefault();
      return;
    }
  
    // Verifica se o peso é maior que 50 kg
    if (weight < 50) {
      alert('Você precisa ter mais de 50 kg para doar sangue.');
      event.preventDefault();
      return;
    }
  
    // Se todas as validações passarem, o formulário será enviado normalmente
  });
  