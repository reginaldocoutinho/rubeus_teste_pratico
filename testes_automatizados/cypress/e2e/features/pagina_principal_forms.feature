# language:pt 
Funcionalidade: Preenchimento e envio do Formulário
 
  Contexto: 
    Dado  que estou na pagina Principal

    
  Cenário: reencho e envio o formulario
    Quando preencho o formulario:
      | nome     | email             | telefone     |
      | Teste QA | qa@teste.com.br   | 11999999999  |
    E clico no botao Concluir
    Então recebo uma mensagem positiva
