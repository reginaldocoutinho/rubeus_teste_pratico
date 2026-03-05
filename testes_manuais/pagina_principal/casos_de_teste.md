# Pagina Principal

  

Registro dos casos de teste da [página inicial](https://qualidade.apprbs.com.br/site), foi utilizado de abreviações para diferenciar os elementos e facilitar para encontrar arquivos relacionados no repositório GIT, como por exemplo: **Botão Concluir** -> **BC**, se houver algum registro sobre esse botão vai estar localizado em sua estrutura e com a mesma identificação **BC** seguido do número do item, da seguinte maneira: **BC-001** .

Local dos arquivos:

|Main | -> | testes_manuais| -> |pagina_principal|
|--|--|--|--|--|


## Itens

 - ***Links de Redirecionamento (LR)***
 - ***Botão Falar com Consultor(BFC)***
 - ***Falar com Consultor(FC)***
 - ***Carrosel Informativo (CI)***
 - ***Próximos Eventos (PE)***
 - ***Forms(F)***
 - ***Botão "Concluir"(BC)***
 - ***Redes sociais(RS)***

---

##  Casos de Teste:

### LR-001 Funcionamento dos links de Redirecionamento, Nossos Diferencias, Eventos e Depoimentos

 **Descrição:**
Os links estão localizados no cabeçalho.

**Passos para a reprodução:** 
	
|pré-condições   | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site |||
|--|--|--|--|
|**Passos**  |**Resultado Esperado**|**Resultado Atual**|**Status** |
|Clique no link "Nossos Diferenciais"|O usuário é redirecionado para a seção selecionada.| O usuário é redirecionado para a seção selecionada e uma nova guia é aberta na página da Rubeus.|Falhou :x:|
|Clique no link "Eventos"|-|-|Falhou :x:|
|Clique no link "Depoimentos"|-|-|Falhou :x:|

Observação: O teste falha pois á um desvio de funcionalidade, gerando uma perda de tempo ao usuário ao abrir um novo link.



### BFC-001 Conservar com o consultor 

**Descrição**
O botão está localizado no canto direito do cabeçalho.

**Passos para reprodução:**

|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site. Se o acesso for pelo computador precisa estar com uma conta do whatsapp logada | ||
|--|--|--|--|
|**Passos**  |**Resultado Esperado**|**Resultado Atual**|**Status** |
|Clique no botão "Falar com Consultor", localizado no cabeçalho do site. | Abrir a conversa via whatsapp com o consultor.|O link abre uma guia no whatsapp, mas não um chat direto com o consultor.|Falhou :x:|
	

### CI-001 Acesso as informações contidas nos Banners.

**Descrição**
	Os banners estão localizados em um carrosel, onde o usuário pode alternar entres eles utilizando as setas.

**Passos para reprodução:**

|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | ||
|--|--|--|--|
|**Passos**  |**Resultado Esperado**|**Resultado Atual**|**Status** |
|Clicar em um dos banners exibidos no carrossel| Ao clicar em um dos banners o usuário será redirecionado para o assunto selecionado. Sendo eles Matrículas para a Pós-Graduação, Graduação EAD e Graduação.|Nada acontece ao clicar nos banners.| Falhou :x:


### CI-002 Alternar entre os Banners pelas setas do carrosel.

**Descrição**
	Os banners estão localizados em um carrosel, onde o usuário pode alternar entres eles utilizando as setas.

**Passos para reprodução:**

|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | ||
|--|--|--|--|
|**Passos**  |**Resultado Esperado**|**Resultado Atual**|**Status** |
|Clicar na seta "próximo" localizada do lado direito. |Exibir o próximo banner dentro do carrosel.|Exibi o próximo banner|Funcionou :white_check_mark:|
|Clicar na seta "anterior" localizada do lado direito. |Exibir o banner anterior dentro do carrosel.|Exibi o banner anterior |Funcionou :white_check_mark:|


### PE-001 Links da Seção Eventos
**Descrição **
Seção Próximos eventos localizada após os Nossos Diferencias. Contém links de redirecionamento.

**Passos para reprodução:**

|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | ||
|--|--|--|--|
|**Passos**  |**Resultado Esperado**|**Resultado Atual**|**Status** |
|Clicar no botão"Inscreva-se agora" em um dos eventos|Abrir link do tema selecionado|Abriu o link conforme esperado|Funcionou :white_check_mark:|

observação: Por se tratar de um ambiente de teste, considerei o link que é aberto mesmo as informações contidas nele sendo diferentes das que são informadas no evento selecionado.



### F-001 :  Envio do Forms da Newsletter
**Descrição:** 
Forms localizado abaixo da seção "Próximos eventos", contendo Nome, email e telefone.

|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | ||
|--|--|--|--|
|**Passos**  |**Resultado Esperado**|**Resultado Atual**|**Status** |
|Preencher o forms da Newsletter(Nome, numero de celular e email) com dados válidos| | |
|clique no botão "Concluir"|Ser concluido a requisição e receber uma tratativa positiva |Ao clicar para concluir o envio do forms, o usuário recebe mensagem de erro "É necessário informar a base legal" está aparecendo no canto 	inferior esquerdo. |



### RS-001 Links da Rede Social
**Descrição:** 
Localizados no final da página

**Passos para reprodução:**
|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | ||
|--|--|--|--|--|
|**Passos**  |**Resultado Esperado**|**Resultado Atual**|**Status** |
|Ir até o final da página|||||
|Clicar no icone do Linkedin|Abrir a página da faculdade no linkedin|Abriu a página da faculdade no linkedin|Funcionou :white_check_mark:|
|Clicar no icone do Facebook|Abrir a página da faculdade no facebook|Abriu a página da faculdade no facebook|Funcionou :white_check_mark:|
|Clicar no icone do Twitter|Abrir a página da faculdade no Twitter|Abriu a página da faculdade no Twitter|Funcionou :white_check_mark:|
|Clicar no icone do Linkedin|Abrir o canal da faculdade no youtube linkedin|Abriu o canal da faculdade no linkedin|Funcionou :white_check_mark:|
|Clicar no icone do Linkedin|Abrir a página da faculdade no instagram|Abriu a página da faculdade no instagram|Funcionou :white_check_mark:|