actor { // Define um canister que representa o backend da aplicação
  // Função pública de consulta: 'public' = acessível externamente, 'query' = não modifica estado
  public query func greet(name : Text) : async Text { // Recebe nome (Text) e retorna saudação (async Text)
    return "Hello, " # name # "!"; // Concatena strings usando o operador #
  };
};
