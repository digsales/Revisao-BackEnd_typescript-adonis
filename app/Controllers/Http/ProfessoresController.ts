// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from "App/Models/Professor";

export default class ProfessoresController {
  index() {
    return Professor.all();
  }

  store({ request }) {
    const dados = request.only([
      "nome",
      "cpf",
      "matricula",
      "salario",
      "email",
      "telefone",
      "cep",
      "logradouro",
      "complemento",
      "numero",
      "bairro",
    ]);
    return Professor.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Professor.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const professor = await Professor.findOrFail(id);
    return professor.delete();
  }

  update({ request }) {}
}