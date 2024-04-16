# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

tecs
    Router
    Styled-components
    Firebase
    Redux 
    React-redux
    @react-google-maps/api
Com certeza, Fábio! Para o seu site de pizzaria, sugiro algumas telas essenciais:

1. **Página Inicial:** Destacando promoções e os principais produtos. ✅
2. **Cardápio:** Listando categorias, tipos de pizzas e suas descrições. ✅
3. **Detalhes do Produto:** Mostrando ingredientes, tamanhos e opções adicionais. ✅

4. **Carrinho de Compras:** Onde os clientes podem revisar e editar seus pedidos. ✅
5. **Autenticação/Cadastro:** Para os clientes se registrarem ou fazerem login. ✅
6. **Histórico de Pedidos:** Onde os clientes podem visualizar pedidos anteriores.
7. **Página do Perfil:** Permitindo a edição das informações do cliente.
8. **Página de Confirmação:** Após efetuar o pedido, uma confirmação clara.
9. **Rastreamento de Pedido:** Opcional, mas interessante para pedidos online.
10. **Página de Contato:** Informações de contato e formulário para dúvidas.


Funcionalidades Principais:

1. Autenticação e Formulário de Login: a. Implementar um formulário de login com cantos arredondados, utilizando as propriedades em CSS. Adicionar uma sombra sutil aos botões de login para destacá-los.

2. Listagem de Pizzas a. Exibir dinamicamente as opções de pizzas disponíveis, utilizando componentes React para representar cada item do cardápio. Aplicar estilos utilizando Tailwind CSS para garantir uma apresentação moderna e responsiva.

3. Seleção de Pizzas a. Permitir aos usuários selecionar a quantidade desejada de cada pizza, utilizando componentes controlados e estados em React. Se possível, utilizar funções de transformação CSS para animar a interação do usuário durante a seleção.

4. Carrinho de Compras a. Implementar um carrinho de compras dinâmico que exibe as pizzas selecionadas, a quantidade e o total. Utilizar propriedades CSS para controle de transições, proporcionando uma experiência suave ao adicionar ou remover itens do carrinho.

5. Finalização do Pedido a. Permitir aos usuários revisar o pedido, ajustar as quantidades e finalizar a compra. Utilizar o Next.js para otimizar o carregamento da página de confirmação do pedido, aproveitando as vantagens do SSR.

6. Autenticação com Redux a. Introduzir o Redux para gerenciar o estado global da aplicação, incluindo informações sobre o usuário autenticado.

7. Responsividade e Material UI a. Garantir que a aplicação seja totalmente responsiva, utilizando classes do Material UI para componentes específicos. Implementar breakpoints para garantir uma experiência de usuário consistente em diferentes dispositivos.

8. Acessibilidade e Atributos ARIA a. Integrar atributos ARIA para melhorar a acessibilidade da aplicação, tornandoa mais amigável para usuários com deficiência.

9. Controle de Versão com Git a. Configurar um repositório Git para o projeto, garantindo um histórico de alterações e facilitando a colaboração entre os membros da equipe.

10. Docker para Ambiente de Desenvolvimento a. Comentar sobre como poderia configurar um ambiente de desenvolvimento utilizando Docker, garantindo consistência entre as máquinas dos desenvolvedores.

11. Scrum a. Comentar sobre como poderia ser utilizado a metodologia Scrum para o desenvolvimento desse sistema e quais seriam os ganhos para a equipe e para o projeto.

Chave de autenticação da API do Google Cloud Platform: AIzaSyCbaI2f4Fpaeq0DpMq9ZG0fVntdW2K5UOw
 

<!-- const pedido = {
  idPedido: "123456",
  dataHora: new Date(),
  status: "pendente",
  cliente: {
    nome: "Fábio Santana",
    endereco: "Rua Exemplo, 123",
    telefone: "(XX) XXXX-XXXX",
    email: "exemplo@email.com"
  },
  metodoPagamento: "cartao_credito",
  totalPedido: 0, // Este valor deve ser calculado com base nos itens do pedido
  observacoes: "Sem cebola nas pizzas",
  itens: [
    {
      produtoId: selectedPizza.id,
      tipo: "pizza",
      quantidade: 1,
      precoUnitario: selectedPizza.preco,
      nomeProduto: selectedPizza.nome,
      descricao: selectedPizza.descricao,
    },
    {
      produtoId: item.id,
      tipo: "bebida",
      quantidade: 1,
      precoUnitario: item.preco,
      nomeProduto: item.nome,
    },
    // Outros itens do pedido, se houver
  ]
}; -->
