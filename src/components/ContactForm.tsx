import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    number: "",
    enterprise: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // URL da API do RD Station
      const response = await axios.post(
        "https://api.rd.services/platform/contacts",
        {
          // Campos que devem ser enviados para a API do RD Station
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.enterprise,
          custom_field: formData.number, // Substitua pelo nome do campo correto se necessário
        },
        {
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Substitua pelo seu token de acesso
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Form submitted successfully", response.data);
      // Adicione uma lógica para mostrar uma mensagem de sucesso para o usuário aqui
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Error submitting form", error);
      // Adicione uma lógica para mostrar uma mensagem de erro para o usuário aqui
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-[#101c28] shadow-lg rounded-lg border border-cyan-700">
      <h2 className="text-3xl font-bold mb-4 text-[#FFCA54]">
        Preencha o formulário
      </h2>
      <h3 className="text-xl font-light mb-4">e aguarde nosso contato!</h3>
      <form onSubmit={handleSubmit} className="w-full max-w-[400px]">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="enterprise"
            className="block text-sm font-medium text-white"
          >
            Empresa
          </label>
          <input
            type="text"
            id="enterprise"
            name="enterprise"
            value={formData.enterprise}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white"
          >
            Celular
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-12">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-white"
          >
            4 + 5 = ?
          </label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FFCA54] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#101c28] hover:border hover:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Quero Captar Recursos
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
