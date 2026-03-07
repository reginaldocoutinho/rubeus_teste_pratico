# language:pt 
Funcionalidade: LINKs de redirecionamento 
 
  Contexto: 
    Dado que eu acesso a pagina Principal

  Cenário: Usuário é redirecionado para secao selecionada
    Quando clico no link "<link>"
    Então devo ver a secao "<secao>"


    Exemplos:
    
      |link|secao|  
      |#igmiox > p > a|#inrj09|
      |#ihimt7 > p > a|#ihimt7|
      |#i5v5f6 > p > a|#i5v5f6|


  Cenário: Usuário é redirecionado para o evento selecionado
    Quando clico no botao de evento de posicao "<posicao>"
    Então deve abrir o link "<link>"

    Exemplos:

      |posicao | link|
      |0|https://cursos.rubeus.com.br|
      |1|https://cursos.rubeus.com.br|
      |2|https://cursos.rubeus.com.br|
      |3|https://cursos.rubeus.com.br|