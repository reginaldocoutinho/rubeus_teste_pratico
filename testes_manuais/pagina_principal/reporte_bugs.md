
  

# Correções e Melhorias

  

## Página Principal

## Itens

  

-  ***Links de Redirecionamento (LR)***

-  ***Botão Falar com Consultor(BFC)***

-  ***Falar com Consultor(FC)***

-  ***Carrosel Informativo (CI)***

-  ***Próximos Eventos (PE)***

-  ***Forms(F)***

-  ***Botão "Concluir"(BC)***

-  ***Redes sociais(RS)***

  

---

  

### LR-001 Ao clicar em um dos links no cabeçalho abre uma página da Rubeus

  

**Descrição:**

  

O usuário ao clicar em um dos links(Nossos Diferencias, Eventos e Depoimentos) é redirecionado para a seção selecionada conforme esperado, mas é aberto uma nova guia da [Rubeus](https://rubeus.com.br/sobre-a-rubeus/)

  

| Tipo |Correção |
|--|--|
| Classificação | Usabilidade |
|Prioridade|Média|

  
  
  

### BFC-001 O usuário é redirecionado para o Whatsapp, mas não para a conversa com o vendedor.

  

**Descrição:**

  

Ao clicar em "Falar com Consultor" o usuário é redirecioando para o whatsapp, mas não para o chat com o vendedor.

  

| Tipo |Correção |
|--|--|
| Classificação | Utilidade |
|Prioridade|Alta|

  

### CI-001 Banners no carrosel não possuem links de redirecionamento

  

**Descrição:**

No conteúdo dos banners existem textos e botões que induzem o usuário a clicar, mas não possuem ação configurada para encaminhar o usuário para as informações contidas nos banners.

  

| Tipo |Nova Funcionalidade|
|--|--|
| Classificação | Utilidade |
|Prioridade|Média|

  

### CI-002 Nova funcionalidade para o carrosel

  

**Descrição:**

O carrosel poderia alternar entre os banners em tempos em tempos, mesmo que o usuário não intereja com ele.

  

| Tipo | Melhoria |
|--|--|
| Classificação | Desejabilidade |
|Prioridade| Baixa|

  
  

### F-001 Envio do forms para recebimento da Newsletter retornando erro.

  

**Descrição:**

O usuário após inserir dados válidos no formulário e clicar para concluir recebe uma mensagem de erro "É necessário informar a base legal".

  
| Tipo |Correção |
|--|--|
| Classificação | Utilidade |
|Prioridade|Alta|

  
  

### F-BC-001 Botão "Concluir" mal alinhado

  

**Descrição:**

O botão concluir do Forms da Newsletter está encostado no campo telefone.

  
  

| Tipo |Melhoria|
|--|--|
| Classificação | Desejabilidade|
|Prioridade|Baixa|

  
  

### RS-001 Redundância na exibição de links para redirecionamento para as redes sociais.

  

**Descrição:**

Não existe a necessidade de ter os icones de redirecionamento para as redes socias no final da página e no rodapé.

  
  

| Tipo |Melhoria|
|--|--|
| Classificação | Desejabilidade|
|Prioridade|Baixa|

  
  

***Sugestão de melhoria para os dev's, começar a utilizar o atributo data-testid nos componentes da página, esse atributo é destinado ao uso em teste e facilita muito na construção de casos de teste e evita quebra de códigos em alterações que afetam os seletores criados.***