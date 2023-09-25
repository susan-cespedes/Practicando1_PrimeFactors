describe("FACTORES PRMOS", () => {
  it("Deberia retornar una lista vacia para 1", () => {
    const primosfac = new primos();
    expect(primosfac.factorprimo(1)).toEqual([]);
  });
  it("Deberia retornar una lista para [2]", () => {
    const primosfac = new primos();
    expect(primosfac.factorprimo(2)).toEqual([2]);
  });
  it("Deberia retornar una lista para [3]", () => {
    const primosfac = new primos();
    expect(primosfac.factorprimo(3)).toEqual([3]);
  });
});


class primos{
  factorprimo(n){
    let resulprimos =[];
    if (n>1)
    {
      resulprimos.push (n);
    }
    return resulprimos;
  }
}