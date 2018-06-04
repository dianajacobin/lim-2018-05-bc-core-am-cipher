describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', ()=> {
      assert.equal( cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33) ,"HIJKLMNOPQRSTUVWXYZABCDEFG" )
      });

      it('debería retornar "Ipmb Nvoep" para "Hola Mundo" con offest 1', ()=> {
        assert.equal( cipher.encode("Hola Mundo",1) ,"Ipmb Nvoep" )
        });

   });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', ()=> {
      assert.equal( cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33) ,"ABCDEFGHIJKLMNOPQRSTUVWXYZ" )
         });

   it('debería retornar "Hola Mundo" para "Ipmb Nvoep" con offest 1', ()=> {
       assert.equal( cipher.decode("Ipmb Nvoep",1) ,"Hola Mundo")
         });
  
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });

})


