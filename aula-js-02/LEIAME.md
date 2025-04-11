# 📱 Aula de Programação Mobile

## 🗓️ Data: 10 de Abril de 2025
## 📍 Local: São Paulo, SP

## ⚛️ Aula de React Native

### Componentização

Em React Native, a **componentização** é um conceito fundamental para construir interfaces de usuário complexas e reutilizáveis. A interface é dividida em pequenos blocos independentes, chamados componentes, que podem gerenciar seu próprio estado e lógica, facilitando a manutenção e o desenvolvimento.

### Configuração do Ambiente com Expo

[https://expo.dev/](https://expo.dev/) é um framework que simplifica o desenvolvimento de aplicativos React Native, fornecendo ferramentas e serviços que aceleram o processo de criação, build e deploy.

**Passos para Iniciar um Projeto React Native com Expo no VS Code:**

1.  **Verificar Instalação do Node.js:** Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar a instalação abrindo o terminal e digitando `node -v`.

2.  **Criar um Novo Projeto Expo:** No terminal do VS Code, navegue até o diretório onde você deseja criar o seu projeto e execute o seguinte comando:

    ```bash
    npx create-expo-app@latest
    ```

3.  **Instalação de Pacotes:** O comando acima irá verificar se o pacote `create-expo-app` está instalado globalmente. Caso não esteja, ele solicitará a instalação. Confirme a instalação quando solicitado.

4.  **Definir o Nome do Aplicativo:** Após a instalação, o Expo CLI solicitará o nome do seu aplicativo. Para esta aula, nomeamos o projeto como `"app01"`.

5.  **Navegar para a Pasta do Projeto:** Após a criação do projeto, navegue até a pasta do seu aplicativo utilizando o seguinte comando no terminal:

    ```bash
    cd .\app01\
    ```

6.  **Iniciar o Aplicativo:** Para iniciar o servidor de desenvolvimento do Expo e visualizar o seu aplicativo em um emulador, simulador ou dispositivo físico, execute o seguinte comando:

    ```bash
    npm start
    ```

7.  **Parar o Servidor:** Para interromper o servidor de desenvolvimento, pressione `Ctrl + C` no terminal.

8.  **Zerar o Projeto (Opcional):** Se você deseja resetar o projeto e começar com um template em branco, execute o seguinte comando:

    ```bash
    npm run reset-project
    ```

9.  **Edição do Aplicativo:** O código do seu aplicativo React Native estará principalmente dentro do arquivo `index.tsx` localizado na pasta `app/`. É neste arquivo que você irá desenvolver a interface e a lógica do seu aplicativo.