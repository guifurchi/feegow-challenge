-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3312
-- Tempo de geração: 23-Mar-2022 às 03:30
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `feegow`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_agenda`
--

CREATE TABLE `tb_agenda` (
  `id` int(11) NOT NULL,
  `specialty_id` int(11) NOT NULL,
  `professional_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `cpf` text NOT NULL,
  `source_id` text NOT NULL,
  `birthdate` text NOT NULL,
  `date_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_agenda`
--

INSERT INTO `tb_agenda` (`id`, `specialty_id`, `professional_id`, `name`, `cpf`, `source_id`, `birthdate`, `date_time`) VALUES
(30, 1, 1, 'Guilherme Dias Furchi', '829.888.622-49', 'Como Conheceu?', '09/03/1985', '2022-03-22 22:07:52');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_especialidade`
--

CREATE TABLE `tb_especialidade` (
  `id` int(11) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_especialidade`
--

INSERT INTO `tb_especialidade` (`id`, `descricao`) VALUES
(1, 'Nutricionista'),
(2, 'Pediatra');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_profissional`
--

CREATE TABLE `tb_profissional` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `specialty_id` int(11) NOT NULL,
  `pic` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_profissional`
--

INSERT INTO `tb_profissional` (`id`, `name`, `specialty_id`, `pic`) VALUES
(1, 'Valéria Furchi', 1, 'valeria.png'),
(2, 'Guilherme Furchi', 2, 'guilherme.jpg'),
(3, 'Lucas Furchi', 1, ''),
(4, 'Luiza Furchi', 1, '');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_agenda`
--
ALTER TABLE `tb_agenda`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_especialidade`
--
ALTER TABLE `tb_especialidade`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_profissional`
--
ALTER TABLE `tb_profissional`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_agenda`
--
ALTER TABLE `tb_agenda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `tb_especialidade`
--
ALTER TABLE `tb_especialidade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_profissional`
--
ALTER TABLE `tb_profissional`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
