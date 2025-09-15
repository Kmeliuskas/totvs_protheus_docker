# Dockerização do ERP TOTVS Protheus
## Overview
Este repositório contém a implementação da aplicação do ERP TOTVS Protheus utilizando containers Docker.

O sistema de ERP Protheus é uma solução de software complexa que requer configurações e dependências específicas para funcionar. Este projeto visa simplificar a instalação, configuração e execução do Protheus ao containerizar-o utilizando Docker.

## Componentes
Este repositório contém três principais componentes:

1. appserver: O servidor de aplicação principal do sistema ERP Protheus.
2. apprest: O servidor de aplicação REST do sistema ERP Protheus.
3. dbaccess: Um serviço que fornece acesso ao banco de dados.
4. licenseserver: Um serviço que gerencia licenças para o sistema ERP Protheus.

## Aviso Legal e Instruções de Uso
Este repositório é um projeto independente e não possui qualquer afiliação com a TOTVS S/A. O código e as imagens aqui disponibilizados são destinados exclusivamente para fins de desenvolvimento e testes. Não utilize este projeto em ambiente de produção.

## Licença MIT
Ao utilizar este repositório, você concorda com os termos da licença MIT.

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
ATENÇÃO
Após você iniciar os containers com o comando acima
cria toda a empresa teste e depois pode rodar o comando:
```bash
docker compose -p totvs --profile manual up -d apprest
```
Para podermos iniciar o serviço do APPREST que ele não inicia sozinho está configurado para iniciar manual













