 Pagina Certificação

Neste documento consta todos os erros e melhorias encontrados na [página das certificação](https://qualidade.apprbs.com.br/certificacao), foi utilizado de abreviações para diferenciar os elementos e facilitar para encontrar arquivos relacionados no repositório GIT, como por exemplo: **Botão Concluir** -> **BC**, se houver algum registro sobre esse botão vai estar localizado em sua estrutura e com a mesma identificação **BC** seguido do número do item, da seguinte maneira: **BC-001** . 
Estrutrura de Pasta no github:
| Main | -> | Testes Manuais| -> |Página Certifição |
|--|--|--|--|--|

	 
***Primeiro Botão "Quero me certificar"(PBC)***
### PBC-001 : Quando ajusta a largura da pagina ocorre uma quebra de linha no botão "Quero me certificar".
	
**Descrição:** 
 O usuário ao minimizar a [página](https://qualidade.apprbs.com.br/certificacao)  tem o retorno de uma quebra de linha estranha no botão "Quero me certificar".
 
**Passos para reprodução:**

| pré-condições | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/certificacao | |
|--|--|--|
| Passos | Resultado Atual | Resultado Esperado |
|Localize no topo da página o botão "Quero me certificar" | Resultado Atual | Resultado Esperado |
|Minimize pelo navegador a pagina e ajuste a largura da pagina até uma resolução 773x607 (foi utilizado o seguinte comando no console  para captar a resolução: console.log(window.innerWidth + "x" + window.innerHeight); mas apertando f12 e entrado no modo dev do chrome já consegue ver a resolução na parte superior). | O texto do botão "Quero me certificar" sofre um desalinhamento| Mesmo quando diminuir a resolução tenha uma quebra de linha mais suave, diminuindo a fonte se necessário para manter o texto do botão alinhado ao centro.|


|Identificador  | PBC-001 |
|--|--|
|Tipo  |Melhoria  |
|Classificação  |Desejabilidade |
|Prioridade  |Baixa  |



### PBC-002 : Botão "Quero me certificar" está colando no botão "Saiba mais" ao ajustar a resolução.

**Descrição:**
 Ao minimizar a [página](https://qualidade.apprbs.com.br/certificacao)   até a resolução 618x486 os botões ficam grudados.
 
**Passos para reprodução:**

| pré-condições | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/certificacao | |
|--|--|--|
| Passos | Resultado Atual | Resultado Esperado |
|Localize no topo da página o botão "Quero me certificar" e "Saiba mais"|||
|Minimize pelo navegador a pagina e ajuste a largura da pagina até uma resolução 618x486  (foi utilizado o seguinte comando no console  para captar a resolução: console.log(window.innerWidth + "x" + window.innerHeight); mas apertando f12 e entrado no modo dev do chrome já consegue ver a resolução na parte superior).|Os botões "quero me certificar" e  "Saiba mais" estão ficando colados|Mesmo quando diminuir a resolução os botões mantenham o espaço entre eles e se ajuste conforme necessário. |

|Identificador  | PBC-002 |
|--|--|
|Tipo  |Melhoria  |
|Classificação  |Desejabilidade |
|Prioridade  |Baixa  |


***Botão "Saiba mais"(BTS)***

### BTS-001 : Ao diminuir a resolução da tela ocorre uma quebra de linha no texto do botão "Saiba mais".
**Descrição:** 
Ao minimizar a [página](https://qualidade.apprbs.com.br/certificacao)   até a 773x607  observamos uma quebra de linha estranha no botão "Saiba mais".

**Passos para reprodução:**

| pré-condições | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/certificacao | |
|--|--|--|
| Passos | Resultado Atual | Resultado Esperado |
|Localize no topo da página o botão "Saiba mais"|||
|Minimize pelo navegador a pagina e ajuste a largura da pagina até uma resolução 773x607 (foi utilizado o seguinte comando no console  para captar a resolução: console.log(window.innerWidth + "x" + window.innerHeight); mas apertando f12 e entrado no modo dev do chrome já consegue ver a resolução na parte superior).|O texto do botão "Saiba mais" sofre um desalinhamento| Mesmo ao diminuir a resolução tenha uma quebra de linha mais suave, diminuindo a fonte se necessário para manter o texto do botão alinhado ao centro.
|
|Identificador  | BTS-001 |
|--|--|
|Tipo  |Melhoria  |
|Classificação  |Desejabilidade |
|Prioridade  |Baixa  |


### BTS-002  Botão "Saiba mais " está sem funcionalidade!
**Descrição:** 
Ao clicar no botão saiba mais encontrado no topo da pagina certificação, nenhuma ação é executada.

**Passos para reprodução:**
| pré-condições | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/certificacao | |
|--|--|--|
| Passos | Resultado Atual | Resultado Esperado |
| Clicar no botão "Saiba mais". | Não há redirecionamento ou exibição de mais informações. | Ao clicar no botão saiba mais seja redirecionado para pagina com mais informações. |
	
|Identificador  | BTS-002 |
|--|--|
|Tipo  |Correção  |
|Classificação  |Utilidade |
|Prioridade  |Média |


***Forms Inscrição(F)
Botão "Avançar"(BTA)***

### F-BTA-001 : Ao ajusta a resolução da página o  texto do Botão "Avançar" do forms "Inscreva-se Agora!" está ficando recortado.

**Descrição:**
Minimizando a [página](https://qualidade.apprbs.com.br/certificacao) ocorre um recorte no texto "Avançar" do botão localizado no forms "Inscreva-se Agora".

**Passos para reprodução:**
| pré-condições | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/certificacao | |
|--|--|--|
| Passos | Resultado Atual | Resultado Esperado |
| Localize o botão "Avançar" do forms "Inscreva-se Agora!" na pagina Certificação. | | |
| Minimize pelo navegador a pagina e ajuste a largura da pagina até uma resolução 773x607 (foi utilizado o seguinte comando no console  para captar a resolução: console.log(window.innerWidth + "x" + window.innerHeight); mas apertando f12 e entrado no modo dev do chrome já consegue ver a resolução na parte superior). |  Quando diminui a resolução o texto do botão"Avançar" aparece recortado. |  Quando diminuir a resolução seja ajustado o tamanho da fonte para que o texto contido no botão não fique "recortado". |

|Identificador  | F-BTA-001  |
|--|--|
|Tipo  |Melhoria  |
|Classificação  |Desejabilidade |
|Prioridade  |Baixa |


### F-001 : Após preencher o forms "Inscreva-se Agora!" com dados válidos retorna uma tratativa de erro.

**Descrição:**
 O usuário após inserir dados válidos na primeira etapa do formulário e clicar para avançar recebe uma mensagem  de erro "É necessário informar a base legal". 

**Passos para reprodução:**
| pré-condições | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/certificacao | |
|--|--|--|
| Passos | Resultado Atual | Resultado Esperado |
|Localizar e preencher o forms "Inscreva-se Agora!"(Nome, numero de celular e email)|  |  |
| Clique no botão "Avançar"|Ao clicar para avançar após inserir os dados do usuário na primeira etapa, recebe mensagem de erro "É necessário informar a base legal" está aparecendo no canto 	inferior esquerdo | Ao clicar para avancar após preencher os dados do usuário na primeira etapa, prosseguir preeenchendo os dados para inscrição. |

|Identificador  | F-001  |
|--|--|
|Tipo  |Correção  |
|Classificação  |Utilidade |
|Prioridade  |Alta |


***Outros Cursos(OC)***

### OC-001 Ao clicar em "Saiba mais" em um dos cursos na seção "Outros Cursos", o usuário não é encaminhado para a página referente.

**Descrição:** 
Ao clicar no botão "Saiba mais"  em qualquer um dos cursos exibidos, nenhuma ação é executada.

**Passos para reprodução:**
| pré-condições | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/certificacao | |
|--|--|--|
| Passos | Resultado Atual | Resultado Esperado |
| Localizar a seção "Outros cursos"| |  |
| Clicar no botão "Saiba mais" em um dos cursos na seção "Outros Cursos".| Não há redirecionamento ou exibição de mais informações. | Ao clicar no botão "Saiba mais" seja redirecionado para pagina com mais informações. |


|Identificador  | OC-001  |
|--|--|
|Tipo  |Nova funcionalidade  |
|Classificação  |Utilidade |
|Prioridade  |Média |


***Ultimo Botão "Quero me certificar"(UBC)***

### UBC-001 Botão "Quero me certificar" redirecionando para a página do Google.

**Descrição:** 
Ao clicar no último botão "Quero me certificar" no final da página o usuário está sendo redirecionado para a página do Google.

**Passos para reprodução:**
| pré-condições | O usuário precisa estar no seguinte endereço 	https://qualidade.apprbs.com.br/certificacao | |
|--|--|--|
| Passos | Resultado Atual | Resultado Esperado |
| Ir até o final da página	| | |
|Clicar no último botão "Quero me certificar" | O usúario está sendo redirecionado para a página do Google. | O usuário ser redirecionado para a página para cadastro. |

|Identificador  | UBC-001|
|--|--|
|Tipo  |Correção |
|Classificação  |Utilidade |
|Prioridade  |Alta|



***Mobile(M)***

### M-001 Texto após o formulário de inscrição sobescrevendo o botão "Quero me certificar".
**Descrição:** 
Quando ajustado para o modo de tela para celular o texto sobescreve o botão pneultimo botão "Quero me candidatar" impossibilitando o uso do mesmo.

**Passos para reprodução:**
| pré-condições | O usuário precisa acessar o seguinte endereço 	https://qualidade.apprbs.com.br/certificacao pelo smartphone | |
|--|--|--|
| Passos | Resultado Atual | Resultado Esperado |
| Localizar o botão após o texto localizado em seguida do Forms de inscrição. |  |  |
| Passos | O texto está sobescrevendo o botão impossibilitando o uso. | Que o texto respeite o espaço determinado pela sua divisão sem sobescrever outros elementos.	 |

|Identificador  | M-001|
|--|--|
|Tipo  |Correção |
|Classificação  |Utilidade |
|Prioridade  |Alta|