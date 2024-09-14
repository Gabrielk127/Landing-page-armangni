"use client";

import Image from "next/image";
import logoAX from "@/assets/logoAX.png";
import VideoPlayer from "@/components/VideoPlayer";
import Card from "@/components/Card";
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";
import icon4 from "@/assets/icons/icon4.png";
import icon5 from "@/assets/icons/icon5.png";
import icon6 from "@/assets/icons/icon6.png";
import Button from "@/components/Button";
import Simone from "@/assets/Simone.png";
import CardText from "@/components/CardText";
import check from "@/assets/check.png";
import RDStationForm from "@/components/RDStationForm";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex-1">
      <header className="justify-center flex flex-row text-center items-center gap-4 pt-10">
        <div className="w-20">
          <Image src={logoAX} alt="Logo AX" />
        </div>
        <h1 className="text-3xl font-bold text-[#FFCA54]">
          Negócios Investimentos e Créditos
        </h1>
      </header>
      <section className="flex flex-col items-center gap-10 p-4">
        <h1 className="text-3xl mt-20 w-full max-w-[1000px] text-center">
          Descubra como captar até R$15 milhões em créditos para impulsionar o
          seu negócio
        </h1>
        <div className="w-full max-w-[1000px]">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <VideoPlayer
                url="https://youtu.be/mC934mbjLow"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-between pt-24 w-full max-w-[1000px] mx-auto">
        <div className="flex flex-col items-start w-full max-w-[500px]">
          <p className="text-2xl mb-8 border-b border-cyan-700">
            Investir é Fácil
          </p>
          <p className="text-5xl mb-8 text-[#FFCA54]">Maximize seu negócio</p>
          <p className="text-2xl leading-10 mb-24">
            Proprietários de qualquer negócio, seja ele um prestador de serviços
            como médicos, dentistas, comércio como supermercados, autopeças e
            atacados ou ainda industriais, têm vantagens em captar de
            R$5.000.000,00 a R$15.000.000,00 em créditos com condições
            privilegiadas.
          </p>
          <p className="text-2xl">Estamos ansiosos para ajudar você !</p>
        </div>
        <div className="w-full max-w-[450px]">
          {/* <ContactForm /> */} <RDStationForm />
        </div>
      </section>
      <section className="bg-white">
        <div className="w-full max-w-[1000px] mt-12 pb-12 mx-auto">
          <h2 className="text-4xl text-black font-bold text-center pt-12">
            Crédito estruturado é a opção mais{" "}
            <span className="text-[#FFCA54]">viável</span>,{" "}
            <span className="text-[#FFCA54]">econômica</span> e{" "}
            <span className="text-[#FFCA54]">segura</span> para o empreendedor
            que deseja um negócio <span className="text-[#FFCA54]">sólido</span>
            ,<span className="text-[#FFCA54]">próspero</span> e{" "}
            <span className="text-[#FFCA54]">lucrativo</span>:
          </h2>
          <p className="text-2xl text-black font-light text-center pt-12">
            As aplicações para o crédito inteligente são diversas:
          </p>
          <div className="flex justify-center items-center pt-4 pb-12">
            <div className="grid grid-cols-3 gap-8 max-w-full w-full">
              <Card icon={icon1} title="Expansões" />
              <Card icon={icon2} title="Construções" />
              <Card icon={icon3} title="Reformas" />
              <Card icon={icon4} title="Aquisições" />
              <Card icon={icon5} title="Capital de Giro" />
              <Card icon={icon6} title="Preservação de Capital" />
            </div>
          </div>
          <div className="w-[600px] mx-auto">
            <Button label="Agendar Consultoria Gratuita" />
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1000px] mt-12 mb-12 mx-auto">
        <h2 className="text-4xl text-center">
          Nesta consultoria{" "}
          <span className="text-[#FFCA54]">
            você terá 30 minutos do meu melhor consultor
          </span>{" "}
          para lhe atender.
        </h2>
        <div className="flex flex-row gap-8 items-center justify-between mt-12">
          <div className="flex flex-col gap-4 items-center">
            <Image
              src={Simone}
              alt="Simone Armangni Consultora"
              className="w-80"
            />
            <p className="text-2xl">Simone Armangni</p>
          </div>
          <div className="flex flex-col w-full max-w-[500px] gap-4">
            <p className="text-lg">
              Sou Simone Armangni da AX Negócios Investimentos e Créditos, tenho
              experiência como estrategista na consultoria de captação
              inteligente.
            </p>
            <p className="text-lg">
              Tenho formação em Administração de Empresas com foco em Gestão de
              projetos e atuo no crescimento exponencial no resultado de meus
              clientes, combinando crescimento sustentável na matriz, eficiência
              do resultado e recursos de terceiros, alavancando crescimento
              pleno e equilibrado com taxas e juros reduzidos, carência e prazos
              estendidos.
            </p>
            <div className="w-[500px] mx-auto mt-10">
              <Button label="Agendar Consultoria Gratuita" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="w-full max-w-[1000px] pt-12 pb-12 mx-auto">
          <h2 className="text-2xl text-center text-black">
            O que é preciso e o perfil necessário para nossa consultoria:
          </h2>
          <div className="mt-12 flex flex-col gap-2">
            <CardText
              icon={check}
              title="Ser empresário(a) da área de serviços, comercial ou industrial(logística)."
            />
            <CardText
              icon={check}
              title="Estar em busca de oportunidade de alavancar seu crescimento."
            />
            <CardText
              icon={check}
              title="Conhecer os números de seu negócio."
            />
            <CardText
              icon={check}
              title="Se você fatura a partir de R$50.000,00 (mês) e tem esse perfil, seu lugar já é certo."
            />
          </div>
          <div className="w-[600px] mx-auto mt-10">
            <Button label="Quero agendar uma consultoria de crédito para meu negócio" />
          </div>
        </div>
      </section>

      <footer className="w-full max-w-[1000px] mt-12 mb-12 mx-auto">
        <p className="text-sm m">
          ﻿® Todos os direitos reservados. - Todo o conteúdo do site, todas as
          fotos, imagens, logotipos, marcas, layout, aqui veículados são de
          propriedade exclusiva de Armangni Imóveis. É vedada qualquer
          reprodução, total ou parcial, de qualquer elemento de identidade, sem
          expressa autorização. A violação de qualquer direito mencionado
          implicará na responsabilização cívil e criminal nos termos da Lei.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
