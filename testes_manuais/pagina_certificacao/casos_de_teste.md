# Pagina Certificação


Registro dos casos de teste da [página de certificação](https://qualidade.apprbs.com.br/certificacao), foi utilizado de abreviações para diferenciar os elementos e facilitar para encontrar arquivos relacionados no repositório GIT, como por exemplo: **Botão Concluir** -> **BC**, se houver algum registro sobre esse botão vai estar localizado em sua estrutura e com a mesma identificação **BC** seguido do número do item, da seguinte maneira: **BC-001** .
 

Local dos arquivos:

 
|Main | -> | testes_manuais| -> |pagina_certificacao|
|--|--|--|--|--|

## Itens

-  ***Primeiro Botão "Quero me certificar"(PBC)***
-  ***Botão "Saiba mais"(BTS)***
-  ***Forms Inscrição(F)***
-  ***Botão "Avançar"(BTA)***
-  ***Outros Cursos(OC)***
- ***Ultimo Botão "Quero me certificar"(UBC)***
---

  

## Casos de Teste:

  

### PBC-001 : Fucionalidade do Botão(Saiba mais).

  

**Descrição**

Botão(Quero me certificar) localizado no cabeçalho da página.

  

**Passos para reprodução:**

  

|pré-condições | O usuário precisa estar no seguinte endereço https://qualidade.apprbs.com.br/certificacao |||
|--|--|--|--|
|**Passos** |**Resultado Esperado**|**Resultado Atual**|**Status** |
|Clicar no botão(Quero me certificar)|Abrir o link para o cadastro| Link do Cadastro foi aberto.|Funcionou :white_check_mark:|

  

  

### BTS-001 : Fucionalidade do Botão(Saiba mais).

  
  

**Descrição**

Botão(Saiba mais) localizado no cabeçalho da página.

  

**Passos para reprodução:**

  

|pré-condições | O usuário precisa estar no seguinte endereço https://qualidade.apprbs.com.br/certificacao |||
|--|--|--|--|
|**Passos** |**Resultado Esperado**|**Resultado Atual**|**Status** |
| Clicar no botão(Saiba mais)| Ao clicar no botão(Saiba mais seja redirecionado para pagina com mais informações.|Não há redirecionamento ou exibição de mais informações.| Falhou :x:|

  

### F-001 : Preenchimento do Forms(Inscreva-se Agora!) com dados válidos.

 
**Descrição:**
O formulário para se inscrever está localizado na segunda seção, com os seguintes campos Nome, Telefone e Email.

**Passos para reprodução:**
|pré-condições | O usuário precisa estar no seguinte endereço https://qualidade.apprbs.com.br/certificacao |||
|--|--|--|--|
|**Passos** |**Resultado Esperado**|**Resultado Atual**|**Status** |
|Localizar e preencher o forms(Inscreva-se Agora!) com nome, número de celular e email| | |
| Clique no botão(Avançar)|Com o formulário preenchido e clicando para avancar prosseguir preeenchendo os dados para inscrição.|com o formulário preenchido ao clicar em avançar usuário recebe mensagem de erro "É necessário informar a base legal" está aparecendo no canto inferior esquerdo |Falhou :x:|


### OC-001  Redirecionamento ao selecionar saiba mais em na seção Outros cursos.

**Passos para reprodução:**

|pré-condições | O usuário precisa estar no seguinte endereço https://qualidade.apprbs.com.br/certificacao |||
|--|--|--|--|
|**Passos** |**Resultado Esperado**|**Resultado Atual**|**Status** |
| Localizar a seção(Outros cursos)| | |
| Clicar no botão(Saiba mais) em um dos cursos na seção Outros Cursos.| O usuário ser redirecionado para página com mais informações do curso. |Não há redirecionamento ou exibição de mais informações.|:x:|

  
### UBC-001 Funcionalidade do Botão(Quero me certificar) 

**Descrição:**
Este é o último botão "Quero me certificar" localizado no final da página.

**Passos para reprodução:**
|pré-condições | O usuário precisa estar no seguinte endereço https://qualidade.apprbs.com.br/certificacao |||
|--|--|--|--|
|**Passos** |**Resultado Esperado**|**Resultado Atual**|**Status** |
| Ir até o final da página | | |
|Clicar no último botão "Quero me certificar" | O usúario está sendo redirecionado para a página do Google. | O usuário ser redirecionado para a página para cadastro. |  
