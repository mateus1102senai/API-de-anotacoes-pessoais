
import prisma from "../../prisma/client.js";

class notaModel {
  getAll = async () => {
    return await prisma.nota.findMany();
  };

  getById = async (id) => {
    return await prisma.nota.findUnique({
      where: { id }
    });
  }

  create = async (titulo, conteudo, favorita, cor) => {
    return await prisma.nota.create({
      data: {
        titulo,
        conteudo,
        favorita,
        cor
      },
    });
  };

  update = async (id, titulo, conteudo, favorita, cor) => {
    try {
      const nota = await prisma.nota.update({
        where: { id },
        data: {
          favorita: favorita !== undefined ? favorita : true,
          titulo, 
          conteudo, 
          favorita, 
          cor
        },
      });

      return nota;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const notaDeletada = await prisma.nota.delete({
        where: { id },
      });

      return notaDeletada;
    } catch (error) {
      console.log("Erro ao deletar a nota!", error);
      throw error;
    }
  };
}

export default new notaModel();