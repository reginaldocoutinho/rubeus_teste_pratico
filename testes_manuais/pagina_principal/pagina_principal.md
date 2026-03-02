# Pagina Principal

Neste documento consta todos os erros e melhorias encontrados na [página inicial](https://qualidade.apprbs.com.br/site), foi utilizado de abreviações para diferenciar os elementos e facilitar para encontrar arquivos relacionados no repositório GIT, como por exemplo: **Botão Concluir** -> **BC**, se houver algum registro sobre esse botão vai estar localizado em sua estrutura e com a mesma identificação **BC** seguido do número do item, da seguinte maneira: **BC-001** . 
Estrutrura de Pasta no github:
| Main | -> | Testes Manuais| -> |Página Principal |
|--|--|--|--|--|

	 
	 
 

 ***Links de Redirecionamento (LR)*** 
### LR-001 (Comportamento inexperado) ao clicar em um dos links de redirecionamento abre o site da Rubeus.	
**Descrição:**
O usuário ao clicar  em qualquer um dos links de redirecionamento (Nossos Diferencias, Eventos e Depoimentos) o usuário é redirecionado para a seção da página onde estão os diferencias, mas é aberto um link da [Rubeus](https://rubeus.com.br/sobre-a-rubeus/)

**Passos para a reprodução:** 
	
|pré-condições   | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site ||
|--|--|--|
|**Passos**  |**Resultado Atual**|**Resultado Esperado**|
|Clicar em um dos 3 links localizado na parte superior do site.|Ser redirecionado para a seção selecionada na página da instituição, está correto, mas não deveria ser redirecionado para a página da Rubeus.|Ser redirecionado para a seção selecionada, mas não abrir um novo link para outro site.|


| Identificador | LR-001   |
|--|--|
| Tipo |Correção  |
| Classificação | Usabilidade |
|Prioridade|Média|
 


***Falar com Consultor(FC)***

### FC-001 O usuário é redirecionado para o Whatsapp, mas não para a conversa com o vendedor.
**Descrição:**
 Ao clicar em "Falar com Consultor" o usuário é redirecioando para o whatsapp, mas não para o número do vendedor.

**Passos para reprodução:**

|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | |
|--|--|--|
|Passos  | Resultado Atual | Resultado Esperado|
|Clicar no botão na parte superior "Falar com Consultor"  | O link leva ao whatsapp, mas não para a conversa com o consultor. | O link levar para o objetivo final da funcionalidade que é o chat com o consultor.|


| Identificador | FC-001   |
|--|--|
| Tipo |Correção  |
| Classificação | Utilidade |
|Prioridade|Alta|
	



***Carrosel Informativo (CI)***

### CI-001 Links dos banners não foram configurados para redirecionamento.

**Descrição:**
 Quando o usuário clicar em um dos botões oferecidos nos banners, nenhuma ação é realizada.

**Passos para reprodução:**

|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | |
|--|--|--|
|Passos  | Resultado Atual | Resultado Esperado|
|Clicar em um dos banners exibidos no carrossel  |Nada acontece ao clicar nos banners. | Ao clicar em um dos banners o usuário será redirecionado para o assunto selecionado. Sendo eles Matrículas para a Pós-Graduação, Graduação EAD e Graduação.|

| Identificador | CI-001   |
|--|--|
| Tipo |Correção  |
| Classificação | Utilidade |
|Prioridade|Média|	

	

### Eventos
	Botões funcionando conforme esperado.


***Forms(F)***
***Botão "Concluir"(BC)***

### F-001 : Após preencher o forms para receber a newsletter com dados válidos retorna uma tratativa de erro.
**Descrição:** 
O usuário após inserir dados válidos no formulário e clicar para concluir recebe uma mensagem  de erro "É necessário informar a base legal". 

|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | |
|--|--|--|
|Passos  | Resultado Atual | Resultado Esperado|
|Localizar e preencher o forms da Newsletter(Nome, numero de celular e email)| | |
|clique no botão "Concluir"|Ao clicar para concluir o envio do forms, o usuário recebe mensagem de erro "É necessário informar a base legal" está aparecendo no canto 	inferior esquerdo.| Ao clicar para concluir após preencher os dados do usuário receber uma mensagem confirmando ação e recebendo um e-mail de agradecimento por assinar a newsletter e explicando os horários e tipos de conteúdos que vão ser encaminhados. |


| Identificador | F-001  |
|--|--|
| Tipo |Correção  |
| Classificação | Utilidade |
|Prioridade|Alta|



### F-BC-001 Cor da fonte do texto e  alinhamento do botão "Concluir".
**Descrição:** 
O botão concluir do Forms da página inicial está com uma fonte apagada e o botão está encostado no preenchimento do telefone.

**Passos para reprodução:**
|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | |
|--|--|--|
|Passos  | Resultado Atual | Resultado Esperado|
|Localizar o botão no  Forms da Newsletter|Botão com uma cor de fonte que dificulta a visualização e com alinhamento deixando encostado no campo Telefone.| Utilizar a cor branca como fonte e aplicar um espaçamento maior entre o botão e os outros elementos do forms,  centralizar o botão "Concluir".|

| Identificador | F-BC-001  |
|--|--|
| Tipo |Melhoria|
| Classificação | Desejabilidade|
|Prioridade|Baixa|


	
***Redes sociais(RS)***

### RS-001 Redundância nos links para redirecionamento para as redes sociais.
**Descrição:** 
Não existe a necessidade de ter os icones de redirecionamento para as redes socias no final da página e no rodapé.

**Passos para reprodução:**
|pré-condições  | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/site | |
|--|--|--|
|Passos  | Resultado Atual | Resultado Esperado|
|Ir até o final da página| Em um curto período temos informações duplicadas na página principal.|Mantenha apenas os links redirecionamento em um dos pontos. Necessário válidar com o cliente qual dos dois manter.|

| Identificador | RS-001  |
|--|--|
| Tipo |Melhoria|
| Classificação | Desejabilidade|
|Prioridade|Baixa|



	


***Sugestão de melhoria para os dev's, começar a utilizar o atributo  data-testid nos componentes da página, esse atributo é destinado ao uso em teste e facilita muito na construção de casos de teste e evita quebra de códigos em alterações que afetam os seletores criados.*** 