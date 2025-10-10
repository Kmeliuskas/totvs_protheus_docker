# Dockerização do ERP TOTVS Protheus
## Overview
Este repositório contém a implementação da aplicação do ERP TOTVS Protheus utilizando containers Docker.

O sistema de ERP Protheus é uma solução de software complexa que requer configurações e dependências específicas para funcionar. Este projeto visa simplificar a instalação, configuração e execução do Protheus ao containerizar-o utilizando Docker.

## Componentes
Este repositório contém quatro principais componentes:

1. appserver: O servidor de aplicação principal do sistema ERP Protheus.
2. apprest: O servidor de aplicação REST do sistema ERP Protheus.
3. dbaccess: Um serviço que fornece acesso ao banco de dados.
4. licenseserver: Um serviço que gerencia licenças para o sistema ERP Protheus.

## Aviso Legal e Instruções de Uso
Este repositório é um projeto independente e não possui qualquer afiliação com a TOTVS S/A. O código e as imagens aqui disponibilizados são destinados exclusivamente para fins de desenvolvimento e testes. Não utilize este projeto em ambiente de produção.

## Requisitos de Sistema: Ambiente de Desenvolvimento
Certifique-se de ter os seguintes pré-requisitos instalados em seu sistema:

Windows:

  1. WSL2: Ative o Subsistema Windows para Linux (WSL2) seguindo este guia: https://learn.microsoft.com/pt-br/windows/wsl/install
  2. Docker Desktop: Instale o Docker Desktop para Windows: https://docs.docker.com/desktop/windows/install. Como alternativa, configure manualmente o Docker em sua distribuição Linux dentro do WSL2.

Linux:

  1. Docker e Docker Compose: Instale e configure as versões mais recentes do Docker e do Docker Compose. Consulte a documentação oficial do Docker para obter instruções específicas para sua distribuição Linux.
     
Mac:
  1. Docker Desktop: Instale o Docker Desktop para macOS: https://docs.docker.com/desktop/mac/install/

## Início Rápido
Para começar com este projeto, siga os passos abaixo:

1. Clone este repositório e acesse o diretório do projeto:
```bash
git clone https://github.com/Kmeliuskas/totvs_protheus2410_docker
cd totvs_protheus2410_docker
```
2. Inicie os containers:
```bash
docker compose -p totvs up -d
```
3. Após isso realizar a conexão do banco de dados pode ser com o SQL Server Management Studio 20 com as seguintes opções:
 - Tipo de servidor: `Mecanismo de Banco de Dados`
 - Nome do servidor: `localhost,1433`
 - Autenticação:     `Autenticação do SQL Server`
 - Logon:            `sa`
 - Senha:            `(SENHA DEVE SER COLOCADA CONFORME CONFIGURADA NO DOCKER-COMPOSE.YAML)`
 - Criptografia:     `Opcional`
   E marca a box:    `Certificado do Servidor Confiável`
   
4. Após isso pode criar um banco de dados chamado `protheus`.

5. Após a configuração, acesse a aplicação em seu navegador através do endereço: http://localhost:12345 (Smartclient Web).

6. Verificar tambem para realizar o download do `Web Agente` localizado no canto superior direito, realize a instalação conforme o seu SO.

7. Utiliza o ambiente SIGACFG e pode proseguir normalmente.
 - Primeiro acesso pode colocar:
   - Login: admin
   - Senha: ' ' (Espaçamento em branco)

8 . Inicie o serviço do APPREST após a criação da empresa Teste pois ele está configurado para inicial manualmente para não ocorrer problemas.
```bash
docker compose -p totvs --profile manual up -d apprest
```

## Docker Compose
O arquivo `docker-compose.yml` orquestra os containers e define as variáveis de ambiente, portas e volumes necessários por componente.

# Observações
- As portas expostas em cada container podem ser modificadas conforme necessário.
- As senhas definidas nos comandos acima são exemplos e devem ser alteradas para garantir a segurança do ambiente.
- As variáveis de ambiente estão disponiveis em uma sessão a parte nesta documentação.

# Próximos Passos
Após iniciar todos os containers, você pode acessar as aplicações TOTVS através das portas configuradas. Consulte a documentação oficial da TOTVS para obter mais informações sobre a utilização dos produtos.

# Variáveis de Ambiente
`licenseserver`

| Variável de Ambiente | Conteúdo Padrão | Descrição |
|----------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `LICENSE_TCP_PORT`    | `2234`                                                 | Define a porta TCP para <br> comunicação com o <br> servidor de licenças. |
| `LICENSE_CONSOLEFILE` | `/totvs/licenseserver/bin/appserver/licenseserver.log` | Define o caminho para o <br> arquivo de log do servidor <br> de licenças. |
| `LICENSE_PORT`        | `5555`                                                 | Define a porta principal do <br> servidor de licenças. |
| `LICENSE_WEBAPP_PORT` | `8020`                                                 | Define a porta para a <br> interface de <br> monitoramento web do <br> servidor de licenças. |

`dbaccess`

| Variável de Ambiente | Conteúdo Padrão | Descrição |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `DATABASE_PASSWORD`       | `MicrosoftSQL2022`                     | Senha para acesso ao banco de dados <br> (Mesma definida no container de banco <br> de dados do MSSQL). |
| `DBACCESS_LICENSE_SERVER` | `totvs_licenseserver`                  | Define o nome do host do servidor de <br> licenças. |
| `DBACCESS_LICENSE_PORT`   | `5555`                                 | Define a porta do servidor de licenças. |
| `DBACCESS_CONSOLEFILE`    | `/totvs/dbaccess/multi/dbconsole.log`  | Define o caminho para o arquivo de log <br> do dbaccess. |

`appserver`

| Variável de Ambiente | Conteúdo Padrão | Descrição |
|----------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `APPSERVER_RPO_CUSTOM`              | `/totvs/protheus/apo/custom.rpo`              | Define o caminho <br> para o arquivo de <br> RPO customizado do <br> AppServer. |
| `APPSERVER_DBACCESS_DATABASE`       | `MSSQL`                                       | Define o tipo de <br> banco de dados <br> utilizado (ex: MSSQL, <br> Oracle). |
| `APPSERVER_DBACCESS_SERVER`         | `totvs_dbaccess`                              | Define o nome do <br> host do serviço <br> DBAccess. |
| `APPSERVER_DBACCESS_PORT`           | `7890`                                        | Define a porta do <br> serviço DBAccess. |
| `APPSERVER_DBACCESS_ALIAS`          | `protheus`                                    | Define o alias para a <br> conexão com o banco <br> de dados. |
| `APPSERVER_CONSOLEFILE`             | `/totvs/protheus/bin/appserver/appserver.log` | Define o caminho <br> para o arquivo de log <br> do AppServer. |
| `APPSERVER_MULTIPROTOCOLPORTSECURE` | `0`                                           | Define a porta segura <br> para o protocolo <br> múltiplo (0 desativa a <br> porta segura). |
| `APPSERVER_MULTIPROTOCOLPORT`       | `1`                                           | Define a porta para o <br> protocolo múltiplo. |
| `APPSERVER_LICENSE_SERVER`          | `totvs_licenseserver`                         | Define o nome do <br> host do servidor de <br> licenças. |
| `APPSERVER_LICENSE_PORT`            | `5555`                                        | Define a porta do <br> servidor de licenças. |
| `APPSERVER_PORT`                    | `1234`                                        | Define a porta <br> principal do <br> AppServer. |
| `APPSERVER_WEB_PORT`                | `12345`                                       | Define a porta para a <br> interface web do <br> AppServer. |
| `APPSERVER_WEB_MANAGER`             | `8088`                                        | Define a porta para a <br> interface web de <br> gerenciamento do <br> AppServer.  |

`apprest`

| Variável de Ambiente | Conteúdo Padrão | Descrição |
|----------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `APPSERVER_RPO_CUSTOM`              | `/totvs/protheus/apo/custom.rpo`              | Define o caminho <br> para o arquivo de <br> RPO customizado do <br> AppServer. |
| `APPSERVER_DBACCESS_DATABASE`       | `MSSQL`                                       | Define o tipo de <br> banco de dados <br> utilizado (ex: MSSQL, <br> Oracle). |
| `APPSERVER_DBACCESS_SERVER`         | `totvs_dbaccess`                              | Define o nome do <br> host do serviço <br> DBAccess. |
| `APPSERVER_DBACCESS_PORT`           | `7890`                                        | Define a porta do <br> serviço DBAccess. |
| `APPSERVER_DBACCESS_ALIAS`          | `protheus`                                    | Define o alias para a <br> conexão com o banco <br> de dados. |
| `APPSERVER_CONSOLEFILE`             | `/totvs/protheus/bin/appserver/appserver.log` | Define o caminho <br> para o arquivo de log <br> do AppServer. |
| `APPSERVER_MULTIPROTOCOLPORTSECURE` | `0`                                           | Define a porta segura <br> para o protocolo <br> múltiplo (0 desativa a <br> porta segura). |
| `APPSERVER_MULTIPROTOCOLPORT`       | `1`                                           | Define a porta para o <br> protocolo múltiplo. |
| `APPSERVER_LICENSE_SERVER`          | `totvs_licenseserver`                         | Define o nome do <br> host do servidor de <br> licenças. |
| `APPSERVER_LICENSE_PORT`            | `5555`                                        | Define a porta do <br> servidor de licenças. |
| `APPSERVER_PORT`                    | `1234`                                        | Define a porta <br> principal do <br> AppServer. |
| `APPSERVER_WEB_PORT`                | `12345`                                       | Define a porta para a <br> interface web do <br> AppServer. |
| `APPSERVER_REST_PORT`               | `8080`                                        | Define a porta para <br> serviço REST do <br> AppServer. |
| `APPSERVER_WEB_MANAGER`             | `8088`                                        | Define a porta para a <br> interface web de <br> gerenciamento do <br> AppServer.  |

## Licença MIT
Ao utilizar este repositório, você concorda com os termos da licença MIT consulte o arquivo LICENSE para detalhes.

## Contribuindo
Se você gostaria de contribuir para este projeto, por favor, forque-o e envie uma solicitação de pull com suas alterações.












