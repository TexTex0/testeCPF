
describe("Testando cpf", function(){describe('TestaCPF', () => {
  it('Deve retornar true para um CPF válido', () => {
    expect(TestaCPF('66278235005')).toBe(true);
  });
  it('Deve retornar false para um CPF inválido', () => {
    expect(TestaCPF('11110001111')).toBe(false);
  });
});



