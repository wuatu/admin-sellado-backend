-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-09-2020 a las 10:50:41
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `zeltasto_sellado`
--
CREATE DATABASE IF NOT EXISTS `zeltasto_sellado` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `zeltasto_sellado`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `rut` varchar(10) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `rut`, `nombre`, `apellido`, `password`) VALUES
(18, '18253490', 'mauro', 'asda', '$2a$10$cvqyohvBGT5V45447s5oQuUmZC/k5Oj4a.FwhYGmq24XB31RJstUG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apertura_cierre_de_turno`
--

CREATE TABLE `apertura_cierre_de_turno` (
  `id` int(11) NOT NULL,
  `fecha_apertura` date NOT NULL,
  `id_administrador_apertura` int(11) NOT NULL,
  `nombre_administrador_apertura` varchar(20) NOT NULL,
  `apellido_administrador_apertura` varchar(20) NOT NULL,
  `fecha_cierre` int(11) NOT NULL,
  `id_administrador_cierre` varchar(20) NOT NULL,
  `nombre_administrador_cierre` varchar(20) NOT NULL,
  `apellido_administrador_cierre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lector`
--

CREATE TABLE `lector` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `puerto` varchar(20) NOT NULL,
  `fk_linea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linea`
--

CREATE TABLE `linea` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `fk_selladora` int(11) NOT NULL,
  `nombre_selladora` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `linea`
--

INSERT INTO `linea` (`id`, `nombre`, `fk_selladora`, `nombre_selladora`) VALUES
(22, 'linea2', 1, 'selladora1'),
(23, 'linea1', 2, 'selladora2'),
(24, 'linea3', 1, 'selladora1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(11) NOT NULL,
  `id_administrador` int(11) NOT NULL,
  `nombre_administrador` varchar(20) NOT NULL,
  `apellido_administrador` varchar(20) NOT NULL,
  `registro` varchar(255) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_diario_codigo_de_barra`
--

CREATE TABLE `registro_diario_codigo_de_barra` (
  `id` int(11) NOT NULL,
  `codigo_de_barra` varchar(20) NOT NULL,
  `id_linea` int(11) NOT NULL,
  `nombre_linea` varchar(20) NOT NULL,
  `id_lector` int(11) NOT NULL,
  `nombre_lector` varchar(20) NOT NULL,
  `puerto_lector` varchar(20) NOT NULL,
  `fk_lector_lector` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(20) NOT NULL,
  `apellido_usuario` varchar(20) NOT NULL,
  `fecha` date NOT NULL,
  `is_verificado` tinyint(4) NOT NULL DEFAULT 0,
  `is_before_time` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_diario_usuario_en_linea`
--

CREATE TABLE `registro_diario_usuario_en_linea` (
  `id` int(11) NOT NULL,
  `id_linea` varchar(20) NOT NULL,
  `nombre_linea` varchar(20) NOT NULL,
  `id_lector` int(11) NOT NULL,
  `nombre_lector` varchar(20) NOT NULL,
  `puerto_lector` varchar(20) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `usuario_rut` varchar(20) NOT NULL,
  `nombre_usuario` varchar(20) NOT NULL,
  `apellido_usuario` varchar(20) NOT NULL,
  `rfid_usuario` varchar(20) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_termino` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `selladora`
--

CREATE TABLE `selladora` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `selladora`
--

INSERT INTO `selladora` (`id`, `nombre`) VALUES
(1, 'selladora1'),
(2, 'selladora2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `rut` varchar(10) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `rfid` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rut` (`rut`);

--
-- Indices de la tabla `apertura_cierre_de_turno`
--
ALTER TABLE `apertura_cierre_de_turno`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lector`
--
ALTER TABLE `lector`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lector_fk_linea` (`fk_linea`);

--
-- Indices de la tabla `linea`
--
ALTER TABLE `linea`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `linea_fk_selladora` (`fk_selladora`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro_diario_codigo_de_barra`
--
ALTER TABLE `registro_diario_codigo_de_barra`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro_diario_usuario_en_linea`
--
ALTER TABLE `registro_diario_usuario_en_linea`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `selladora`
--
ALTER TABLE `selladora`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `apertura_cierre_de_turno`
--
ALTER TABLE `apertura_cierre_de_turno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lector`
--
ALTER TABLE `lector`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `linea`
--
ALTER TABLE `linea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro_diario_codigo_de_barra`
--
ALTER TABLE `registro_diario_codigo_de_barra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro_diario_usuario_en_linea`
--
ALTER TABLE `registro_diario_usuario_en_linea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `selladora`
--
ALTER TABLE `selladora`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--


--
-- Filtros para la tabla `lector`
--
ALTER TABLE `lector`
  ADD CONSTRAINT `lector_fk_linea` FOREIGN KEY (`fk_linea`) REFERENCES `linea` (`id`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `linea`
--
ALTER TABLE `linea`
  ADD CONSTRAINT `linea_fk_selladora` FOREIGN KEY (`fk_selladora`) REFERENCES `selladora` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
