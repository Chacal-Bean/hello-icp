
import { useState } from 'react'; // Importa o hook de estado do React
import { hello_backend } from 'declarations/hello_backend'; // Importa o ator para comunicação com o backend


function App() {
  const [greeting, setGreeting] = useState(''); // Estado para armazenar a saudação recebida do backend


  // Função chamada ao submeter o formulário
  function handleSubmit(event) {
    event.preventDefault(); // Evita o recarregamento da página
    const name = event.target.elements.name.value; // Obtém o valor do campo de texto
    // Chama a função greet do backend e atualiza o estado com a resposta
    hello_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      {/* Logo da aplicação */}
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      {/* Formulário para entrada do nome */}
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      {/* Exibe a saudação recebida do backend */}
      <section id="greeting">{greeting}</section>
    </main>
  );
}

// Exporta o componente principal
export default App;
