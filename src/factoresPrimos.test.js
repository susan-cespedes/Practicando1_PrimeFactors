describe("FACTORES PRMOS", () => {
  it("deberia retornar una lista vacia para 1", () => {
    const primosfac = new primos();
    expect(primosfac.factorprimo(1)).toEqual([]);
  });
});


class primos{
  factorprimo(){
    return [];
  }
}