# Billing System from Sacalinhaburger v0.0.1

## Funcionalidades
- **Sistema de Login Seguro:** Os usuários podem fazer login para acessar a aplicação.
- **Emissão de faturas:** No final de cada operação é emitida uma factura.
- **Interface Responsiva:** A interface do usuário é intuitiva e se adapta a diferentes dispositivos e tamanhos de tela.
<!-- adicionar outros -->

## Tecnologias Utilizadas

- **Frontend:**
  - REACT.JS
  - Tailwindcss
  - TypesScript

- **Backend:**
  - NODE.JS (sequelize para interação com o banco de dados)
  
- **Banco de Dados:**
  - MySQL


## Estrutura do Projeto

```
/billing system - sacalinhaburger
|-- /API/src/http/
|   |-- server.ts
|-- |--/lib/
|   |-- |-- dbconnetion.ts
|-- .env
```

### Descrição dos Arquivos

- **/.env.md:** Arquivo de variais de ambiente.
<!-- ver mais outras -->


## Instruções de Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/erivaldocazinga22/billing-system-from-sacalinhaburger.git
   cd billing-system-from-sacalinhaburger
   ```

2. Configure o banco de dados:

   - Crie um banco de dados MySQL.
   - Execute o script SQL a seguir para criar as tabelas necessárias:

     ```sql
     ...por fazer
     ```

3. Configure a conexão com o banco de dados no arquivo `dbconnection.ts`:

   ```typesScript
   ...por fazer
   ```

## Contribuição

1. Fork este repositório.
2. Crie uma nova branch: `git checkout -b feature-nome-da-sua-feature`.
3. Faça suas alterações e commite: `git commit -m 'Adicionar nova feature'`.
4. Envie para o repositório remoto: `git push origin feature-nome-da-sua-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Obrigado por usar nosso sistema de chat! Contribuições e sugestões são bem-vindas.