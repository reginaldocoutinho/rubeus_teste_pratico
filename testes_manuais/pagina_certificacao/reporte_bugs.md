# Página Certificação

## Itens

  

-  ***Primeiro Botão "Quero me certificar"(PBC)***

-  ***Botão "Saiba mais"(BTS)***

-  ***Falar com Consultor(FC)***

-  ***Carrosel Informativo (CI)***

-  ***Próximos Eventos (PE)***

-  ***Forms(F)***

-  ***Botão "Concluir"(BC)***

-  ***Redes sociais(RS)***

- ***Mobile(M)***
  

---


## Correções e Melhorias



### PBC-BTS-001: Ao ajustar as dimensões do site ocorre uma perda no layout dos dos botões Quero me certifcar e Saiba mais.

**Descrição:**

O usuário ao minimizar a [página](https://qualidade.apprbs.com.br/certificacao) tem o retorno visual de uma quebra de linha nos textos dos botões Quero me certifcar e Saiba mais, além de "grudarem" a partir de uma certa resolução.

#### Passos para reprodução
Utilizando a tecla ctrl+scroll, minize a página e ajuste a largura da pagina até uma resolução 773x607,neste ponto já consegue verificar o desalinhamento do texto contido nos botões Quero me certificar e Saiba mais, se continuar reduzindo até a resolução 618x486 verá os mesmos botões "colando" um no  outro. 


*** obs:*** apertando f12 e entrado no modo dev do chrome já consegue ver a resolução na parte superior. 

### Resultado Atual
Os botões Quero me certificar e saiba mais, estão sofrendo uma perca de layout ao alterar as dimensões do site.
 
### Resultado Esperado
Mesmo ao alterar as dimensões do site os botões mantenham a formatação prédefinida.

|Tipo |Melhoria |
|--|--|
|Classificação |Desejabilidade |
|Prioridade |Baixa |


### BTS-001 O botão(Saiba mais) está sem ação atribuida.

**Descrição:**
Nada acontece ao clicar no botão(Saiba mais).


#### Passos para reprodução
Clicar no botão(Saiba mais) localizado no cabeçalho da página.

#### Resultado Atual
Nenhuma ação é disparada ao clicar no botão(Saiba mais).

#### Resultado Esperado
Ao clicar no botão(Saiba mais) o usuário deve ser redirecionado para o local com mais detalhes a respeito da certificação.


|Tipo |Correção |
|--|--|
|Classificação |Utilidade |
|Prioridade |Média |


### F-BTA-001 :  Botão(Avançar) do forms(Inscreva-se Agora!) está ficando com o texto recortado ao redimensionar o site.

**Descrição:**
Minimizando a [página](https://qualidade.apprbs.com.br/certificacao) ocorre um recorte no texto do botão(Avançar) localizado no forms(Inscreva-se Agora).


#### Passos para reprodução
Localize o botão(Avançar) do forms(Inscreva-se Agora!) na página Certificação.
Utilizando a tecla ctrl+scroll, minize a página e ajuste a largura da pagina até uma resolução 773x607 

*** obs:*** apertando f12 e entrado no modo dev do chrome já consegue ver a resolução na parte superior.   

#### Resultado Atual
Botão(Avançar) ficando com o recortado ao redimensionar.

#### Resultado Esperado
Mesmo ao ajustar o site o texto contido no botão se ajuste para que não ocorra recorte.


### F-001 : Após o envio do forms(Inscreva-se Agora!) com dados válidos retorna uma tratativa de erro.

**Descrição:**

O usuário após inserir dados válidos na primeira etapa do formulário e clicar para avançar recebe uma mensagem de erro "É necessário informar a base legal".

#### Passos para reprodução
Localizar o forms de inscrição
inserir dados válidos (Telefone, Nome e Email)
clicar no botão(Avançar)

#### Resultado Atual
Mesmo preenchendo o forms corretamente o usuário recebe uma tratativa negativa e não é possível avançar a etapa.

#### Resultado Esperado
Receber uma mensagem positiva quando inserir dados válidos e conseguir prosseguir o cadastro.

|Tipo |Correção |
|--|--|
|Classificação |Utilidade |
|Prioridade |Alta |



### OC-001 Ao clicar em "Saiba mais" em um dos cursos na seção "Outros Cursos" o usuário não é encaminhado para a página referente.

**Descrição:**
Ao clicar no botão(Saiba mais) em qualquer um dos cursos exibidos, nenhuma ação é executada.

#### Passos para reprodução
Localizar a seção com outros cursos
Clicar em dos cursos


#### Resultado Atual
Nada acontece ao clicar em saiba mais em um dos cursos.

#### Resultado Esperado
Clicando em um dos cursos o usuário seja encaminhado para uma página do curso selecionado.

|Tipo |Nova funcionalidade |
|--|--|
|Classificação |Utilidade |
|Prioridade |Média |

### UBC-001 Botão(Quero me certificar) redirecionando para a página do Google.

**Descrição:**
Ao clicar no último botão(Quero me certiifar) o usuário é redirecionado para a página principal do Google.

#### Passos para reprodução
Localizar e clicar no botão(Quero me certificar) no final da página.

#### Resultado Atual
O usuário é redirecioando para o Google ao clicar.

#### Resultado Esperado
O usuário ser redirecioando para a página de Certificação.

|Tipo |Correção |
|--|--|
|Classificação |Utilidade |
|Prioridade |Alta|



### M-001 Texto após o formulário de inscrição sobescrevendo o botão "Quero me certificar".

**Descrição:**
Quando ajustado para o modo de tela para celular o texto sobescreve o pneultimo botão "Quero me candidatar" impossibilitando o uso do mesmo.

|Tipo |Correção |
|--|--|
|Classificação |Utilidade |
|Prioridade |Alta|