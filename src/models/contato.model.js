const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const criarContato = async (nome, sobrenome, email) => {
  const contato = await prisma.contato.create({
    data: {
      nome,
      sobrenome,
      email
    }
  })

  return contato;
};


const listarContatos = async () => {
  const buscarContatos = await prisma.contato.findMany();
  return buscarContatos;
};

module.exports = { criarContato, listarContatos };
