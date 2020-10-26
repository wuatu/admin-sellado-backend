-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2020 a las 17:42:19
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
-- Base de datos: `danich_sellado`
--
CREATE DATABASE IF NOT EXISTS `danich_sellado` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `danich_sellado`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `rut` varchar(10) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `apellido` varchar(70) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `rut`, `nombre`, `apellido`, `password`, `rol`) VALUES
(18, '18253490', 'cristian', 'farias', '$2a$10$cvqyohvBGT5V45447s5oQuUmZC/k5Oj4a.FwhYGmq24XB31RJstUG', 1),
(19, '175054545', 'ignacio', 'correa', '$2a$10$JiXwpkkYYXNQ4D2GmA/n6u.tAFWZNAVhI2ulANFYTeWrFRwOrF7Le', 1),
(21, '161587664', 'rodolfo', 'henzi', '$2a$10$QJ9lG/AnTeSeQ8xfkrlBoOe/9tR2sQK6mRTPsihDFQWDX14Sbf03a', 1),
(22, '123', 'admin2', 'correa', '$2a$10$JcAhkfknfGUonvQ/88yKdOODx4BF5L2YouWe6eE74XFQdiMszIdiS', 0),
(70, '123456', 'admindfmnlsdnflks', 'correa', '$2a$10$CW8DTgv2KLLmQdt3F35A1eVyzTZolVbXGIZ/7oCaK9UBqd.Ezp0KS', 0),
(71, '18978666-8', 'Juliano', 'Sosa', '$2a$10$9nh5Bu0ArGgcK67IHmen1euUjTVGXGJvIIpSm5WtpZeGI/MY4Em5i', 0),
(73, '123456789', 'Papito', 'Corazón', '$2a$10$UoJJE2TYXalJohIs52Zibei85VvQO2HpiKGdyjqxgtQn47N5Kaw9m', 2),
(74, '123456780', 'Julito ', 'Martinez', '$2a$10$AMaFe0KdJJnoXtClGIonLennOi1oYbR2lFRiT5AmrMSg5T7aUyvV6', 2),
(77, '18.333.490', 'ignacio', 'perez', '$2a$10$9ogDu/LxLXF4d/d/BJ/w8.NY8CfStISQsHi8Svlj4WidEDSAlDonW', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apertura_cierre_de_turno`
--

CREATE TABLE `apertura_cierre_de_turno` (
  `id` int(11) NOT NULL,
  `fecha_apertura` varchar(10) NOT NULL,
  `hora_apertura` varchar(8) NOT NULL,
  `id_administrador_apertura` int(11) NOT NULL,
  `nombre_administrador_apertura` varchar(70) NOT NULL,
  `apellido_administrador_apertura` varchar(70) NOT NULL,
  `fecha_cierre` varchar(10) NOT NULL,
  `hora_cierre` varchar(8) NOT NULL,
  `id_administrador_cierre` int(11) NOT NULL,
  `nombre_administrador_cierre` varchar(70) NOT NULL,
  `apellido_administrador_cierre` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `apertura_cierre_de_turno`
--

INSERT INTO `apertura_cierre_de_turno` (`id`, `fecha_apertura`, `hora_apertura`, `id_administrador_apertura`, `nombre_administrador_apertura`, `apellido_administrador_apertura`, `fecha_cierre`, `hora_cierre`, `id_administrador_cierre`, `nombre_administrador_cierre`, `apellido_administrador_cierre`) VALUES
(7, '2020-10-01', '12:41:38', 19, 'ignacio', 'correa', '2020-10-01', '12:42:00', 19, 'ignacio', 'correa'),
(8, '2020-10-01', '12:46:52', 19, 'ignacio', 'correa', '2020-10-01', '18:18:36', 19, 'ignacio', 'correa'),
(9, '2020-10-01', '18:18:53', 19, 'ignacio', 'correa', '2020-10-01', '18:19:40', 19, 'ignacio', 'correa'),
(10, '2020-10-01', '18:21:28', 19, 'ignacio', 'correa', '2020-10-01', '18:22:13', 19, 'ignacio', 'correa'),
(11, '2020-10-01', '18:26:35', 19, 'ignacio', 'correa', '2020-10-01', '21:18:03', 19, 'ignacio', 'correa'),
(12, '2020-10-01', '21:25:59', 19, 'ignacio', 'correa', '2020-10-01', '21:35:26', 19, 'ignacio', 'correa'),
(13, '2020-10-01', '21:35:06', 19, 'ignacio', 'correa', '2020-10-01', '21:37:29', 19, 'ignacio', 'correa'),
(14, '2020-10-01', '21:38:06', 19, 'ignacio', 'correa', '2020-10-01', '21:42:05', 19, 'ignacio', 'correa'),
(15, '2020-10-01', '21:41:40', 19, 'ignacio', 'correa', '2020-10-01', '21:42:56', 19, 'ignacio', 'correa'),
(16, '2020-10-01', '21:44:23', 19, 'ignacio', 'correa', '2020-10-01', '22:47:23', 19, 'ignacio', 'correa'),
(17, '2020-10-01', '22:45:53', 19, 'ignacio', 'correa', '2020-10-01', '22:49:40', 19, 'ignacio', 'correa'),
(18, '2020-10-01', '22:46:29', 19, 'ignacio', 'correa', '2020-10-01', '22:50:14', 19, 'ignacio', 'correa'),
(19, '2020-10-01', '22:47:05', 19, 'ignacio', 'correa', '2020-10-01', '22:48:47', 19, 'ignacio', 'correa'),
(20, '2020-10-01', '22:50:55', 19, 'ignacio', 'correa', '2020-10-01', '22:51:18', 19, 'ignacio', 'correa'),
(21, '2020-10-01', '22:51:46', 19, 'ignacio', 'correa', '2020-10-01', '22:52:29', 19, 'ignacio', 'correa'),
(22, '2020-10-01', '22:52:51', 19, 'ignacio', 'correa', '2020-10-01', '22:53:56', 19, 'ignacio', 'correa'),
(23, '2020-10-01', '22:53:39', 19, 'ignacio', 'correa', '2020-10-01', '22:54:17', 19, 'ignacio', 'correa'),
(24, '2020-10-01', '22:54:35', 19, 'ignacio', 'correa', '2020-10-01', '22:56:17', 19, 'ignacio', 'correa'),
(25, '2020-10-01', '22:56:38', 19, 'ignacio', 'correa', '2020-10-01', '22:57:33', 19, 'ignacio', 'correa'),
(26, '2020-10-01', '22:58:00', 19, 'ignacio', 'correa', '2020-10-01', '22:58:38', 19, 'ignacio', 'correa'),
(27, '2020-10-01', '22:58:54', 19, 'ignacio', 'correa', '2020-10-01', '23:00:41', 19, 'ignacio', 'correa'),
(28, '2020-10-01', '23:03:24', 19, 'ignacio', 'correa', '2020-10-02', '12:30:56', 19, 'ignacio', 'correa'),
(29, '2020-10-02', '12:32:09', 19, 'ignacio', 'correa', '2020-10-08', '10:51:38', 19, 'ignacio', 'correa'),
(30, '2020-10-08', '10:52:19', 19, 'ignacio', 'correa', '2020-10-08', '12:09:47', 19, 'ignacio', 'correa'),
(31, '2020-10-08', '12:10:04', 19, 'ignacio', 'correa', '2020-10-13', '10:09:19', 19, 'ignacio', 'correa'),
(32, '2020-10-13', '10:09:35', 19, 'ignacio', 'correa', '2020-10-13', '10:14:13', 19, 'ignacio', 'correa'),
(34, '2020-10-14', '12:16:14', 19, 'ignacio', 'correa', '2020-10-15', '11:55:46', 19, 'ignacio', 'correa'),
(35, '2020-10-15', '11:30:05', 19, 'ignacio', 'correa', '2020-10-15', '15:57:44', 19, 'ignacio', 'correa'),
(36, '2020-10-15', '15:30:10', 19, 'ignacio', 'correa', '2020-10-15', '16:19:02', 19, 'ignacio', 'correa'),
(37, '2020-10-15', '16:19:18', 19, 'ignacio', 'correa', '2020-10-15', '16:23:16', 19, 'ignacio', 'correa'),
(38, '2020-10-15', '16:23:33', 19, 'ignacio', 'correa', '2020-10-15', '16:30:12', 19, 'ignacio', 'correa'),
(39, '2020-10-15', '16:30:27', 19, 'ignacio', 'correa', '2020-10-15', '16:32:00', 19, 'ignacio', 'correa'),
(40, '2020-10-15', '16:32:23', 19, 'ignacio', 'correa', '2020-10-15', '16:37:53', 19, 'ignacio', 'correa'),
(41, '2020-10-15', '16:38:06', 19, 'ignacio', 'correa', '2020-10-19', '15:45:57', 19, 'ignacio', 'correa'),
(42, '2020-10-19', '15:46:13', 19, 'ignacio', 'correa', '2020-10-20', '09:26:39', 19, 'ignacio', 'correa'),
(43, '2020-10-20', '10:34:06', 19, 'ignacio', 'correa', '2020-10-22', '16:57:33', 19, 'ignacio', 'correa'),
(44, '2020-10-22', '16:54:33', 19, 'ignacio', 'correa', '2020-10-22', '17:08:28', 19, 'ignacio', 'correa'),
(45, '2020-10-22', '16:57:15', 19, 'ignacio', 'correa', '2020-10-26', '09:54:02', 18, 'cristian', 'farias'),
(46, '2020-10-22', '17:00:10', 19, 'ignacio', 'correa', '2020-10-26', '09:57:56', 18, 'cristian', 'farias'),
(47, '2020-10-22', '17:06:32', 19, 'ignacio', 'correa', '2020-10-26', '09:52:39', 18, 'cristian', 'farias'),
(48, '2020-10-22', '17:08:12', 19, 'ignacio', 'correa', '2020-10-26', '09:49:32', 18, 'cristian', 'farias'),
(49, '2020-10-26', '09:59:25', 18, 'cristian', 'farias', '', '', -1, '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caja`
--

CREATE TABLE `caja` (
  `id` int(11) NOT NULL,
  `envase` varchar(70) NOT NULL,
  `variedad` varchar(70) NOT NULL,
  `categoria` varchar(70) NOT NULL,
  `calibre` varchar(70) NOT NULL,
  `correlativo` varchar(70) NOT NULL,
  `ponderacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `caja`
--

INSERT INTO `caja` (`id`, `envase`, `variedad`, `categoria`, `calibre`, `correlativo`, `ponderacion`) VALUES
(1, 'envase1caja_unitec', 'variedad1', 'variedad1', 'variedad1', 'cal1', 1),
(2, 'envase2caja_unitec', 'variedad2', 'variedad2', 'cat2', 'cal2', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caja_unitec`
--

CREATE TABLE `caja_unitec` (
  `id` int(11) NOT NULL,
  `envase` varchar(70) NOT NULL,
  `variedad` varchar(70) NOT NULL,
  `categoria` varchar(70) NOT NULL,
  `calibre` varchar(70) NOT NULL,
  `correlativo` varchar(70) NOT NULL,
  `ponderacion` int(11) NOT NULL,
  `codigo` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `caja_unitec`
--

INSERT INTO `caja_unitec` (`id`, `envase`, `variedad`, `categoria`, `calibre`, `correlativo`, `ponderacion`, `codigo`) VALUES
(1, 'envase1caja_unitec', 'variedad1caja_unitec', 'variedad1caja_unitec', 'variedad1caja_unitec', 'cal1caja_unitec', 1, '20981538'),
(2, 'envase2caja_unitec', 'variedad2caja_unitec', 'variedad2caja_unitec', 'cat2caja_unitec', 'cal2caja_unitec', 0, '2091541');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calibrador`
--

CREATE TABLE `calibrador` (
  `id` int(11) NOT NULL,
  `nombre` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calibrador`
--

INSERT INTO `calibrador` (`id`, `nombre`) VALUES
(1, 'calibrador1'),
(2, 'calibrado2'),
(4, 'Calibrador 3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colaborador`
--

CREATE TABLE `colaborador` (
  `id` int(11) NOT NULL,
  `rut` varchar(10) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `apellido` varchar(70) NOT NULL,
  `password` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `colaborador`
--

INSERT INTO `colaborador` (`id`, `rut`, `nombre`, `apellido`, `password`) VALUES
(1, '18253490', 'agustin', 'lopez', '123456'),
(2, '16879548-3', 'Ignacio ', 'Correa', '123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `configuracion`
--

CREATE TABLE `configuracion` (
  `id` int(11) NOT NULL,
  `max_wait_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `configuracion`
--

INSERT INTO `configuracion` (`id`, `max_wait_time`) VALUES
(1, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lector`
--

CREATE TABLE `lector` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `baudRate` varchar(40) NOT NULL,
  `parity` varchar(40) NOT NULL,
  `stopBits` varchar(40) NOT NULL,
  `dataBits` varchar(40) NOT NULL,
  `fk_linea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `lector`
--

INSERT INTO `lector` (`id`, `nombre`, `ip`, `baudRate`, `parity`, `stopBits`, `dataBits`, `fk_linea`) VALUES
(7, 'Lector 2', 'COM6', '115200', 'None', '1', '8', 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lector_validador`
--

CREATE TABLE `lector_validador` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `max_wait_time` int(11) NOT NULL,
  `fk_calibrador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `lector_validador`
--

INSERT INTO `lector_validador` (`id`, `nombre`, `ip`, `max_wait_time`, `fk_calibrador`) VALUES
(12, 'Validador 1', '192.168.0.1', 10, 1),
(13, 'ignacio', '192.168.0.2', 20, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linea`
--

CREATE TABLE `linea` (
  `id` int(11) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `fk_calibrador` int(11) NOT NULL,
  `nombre_calibrador` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `linea`
--

INSERT INTO `linea` (`id`, `nombre`, `fk_calibrador`, `nombre_calibrador`) VALUES
(22, 'linea2', 1, 'calibrador1'),
(23, 'linea1', 2, 'calibrador2'),
(24, 'linea3', 1, 'calibrador1'),
(26, 'Linea 4', 1, 'calibrador1'),
(27, 'Línea 1000', 2, 'calibrado2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id` int(11) NOT NULL,
  `id_administrador` int(11) NOT NULL,
  `nombre_administrador` varchar(70) NOT NULL,
  `apellido_administrador` varchar(70) NOT NULL,
  `registro` varchar(255) NOT NULL,
  `fecha` varchar(10) NOT NULL,
  `hora` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro`
--

--
-- Estructura de tabla para la tabla `registro_produccion`
--

CREATE TABLE `registro_produccion` (
  `id` int(11) NOT NULL,
  `id_colaborador` int(11) NOT NULL,
  `nombre_colaborador` varchar(70) NOT NULL,
  `apellido_colaborador` varchar(70) NOT NULL,
  `registro` varchar(255) NOT NULL,
  `fecha` varchar(10) NOT NULL,
  `hora` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro_produccion`
--

--
-- Estructura de tabla para la tabla `registro_dev`
--

CREATE TABLE `registro_dev` (
  `id` int(11) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `registro` varchar(255) NOT NULL,
  `fecha` varchar(10) NOT NULL,
  `hora` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro_produccion`
--

INSERT INTO `registro` (`id`, `id_administrador`, `nombre_administrador`, `apellido_administrador`, `registro`, `fecha`, `hora`) VALUES
(174, 19, 'ignacio', 'correa', 'Se ha editado un registro de caja sellada, id registro: 521', '2020-10-06', '09:29:14'),
(175, 19, 'ignacio', 'correa', 'Se ha editado un registro de caja sellada, id registro: 521, calibradora: calibrador_1', '2020-10-06', '09:30:17'),
(176, 19, 'ignacio', 'correa', 'Se ha editado un registro de caja sellada, id registro: 521', '2020-10-06', '09:30:44'),
(177, 19, 'ignacio', 'correa', 'Se ha creado una caja, envase: Envase3, variedad: Variedad3, calibre: Calibre3, correlativo: Correlativo3 y ponderación: 1', '2020-10-06', '09:32:04'),
(178, 19, 'ignacio', 'correa', 'Se ha editado una caja, id: 3', '2020-10-06', '09:32:36'),
(179, 19, 'ignacio', 'correa', 'Se ha eliminado una cada, id: 3', '2020-10-06', '09:32:46'),
(180, 19, 'ignacio', 'correa', 'Se ha creado un colaborador, rut:145879859 y nombre: Firulais Paquindo', '2020-10-06', '09:34:07'),
(181, 19, 'ignacio', 'correa', 'Se ha editado un colaborador, id de registro: 3, rut:145879859', '2020-10-06', '09:34:20'),
(182, 19, 'ignacio', 'correa', 'Se ha eliminado un colaborador, id de registro: 3, rut:145879859', '2020-10-06', '09:34:25'),
(183, 19, 'ignacio', 'correa', 'Se ha creado un administrador, rut 154879856 y nombre: Kid Teton', '2020-10-06', '09:35:18'),
(184, 19, 'ignacio', 'correa', 'Se ha editado un administrador, id: 75, rut: 1548789856 y nombre Kid Teton', '2020-10-06', '10:48:20'),
(185, 19, 'ignacio', 'correa', 'Se ha elimidado un administrador, id:  75, rut; 1548789856 y nombre: Kid Teton', '2020-10-06', '10:48:22'),
(186, 19, 'ignacio', 'correa', 'Se ha creado un administrador, rut 145875829 y nombre: Dj Mendez', '2020-10-06', '10:51:16'),
(187, 19, 'ignacio', 'correa', 'Se ha editado un administrador, id: 76, rut: 145875829y nombre Dj xd Mendez', '2020-10-06', '10:51:28'),
(188, 19, 'ignacio', 'correa', 'Se ha elimidado un administrador, id:  76, rut; 145875829 y nombre: Dj xd Mendez', '2020-10-06', '10:51:31'),
(189, 19, 'ignacio', 'correa', 'Se ha creado un nuevo calibrador, nombre: Calibrador3', '2020-10-06', '10:52:09'),
(190, 19, 'ignacio', 'correa', 'Se ha editado un calibrador, id: 3', '2020-10-06', '10:52:16'),
(191, 19, 'ignacio', 'correa', 'Se ha eliminado un calibrador, nombre: Calibrador 3', '2020-10-06', '10:52:21'),
(192, 19, 'ignacio', 'correa', 'Se ha creado una línea, nombre: Linea 1000, calibradora: calibrador1', '2020-10-06', '10:52:44'),
(193, 19, 'ignacio', 'correa', 'Se ha editado una linea, id: 25, calibradora: calibrador1', '2020-10-06', '10:52:55'),
(194, 19, 'ignacio', 'correa', 'Se ha eliminado una linea, id: 25, calibradora: calibrador1', '2020-10-06', '10:53:04'),
(195, 19, 'ignacio', 'correa', 'Se ha creado un lector, nombre: lector 151515', '2020-10-06', '10:54:17'),
(196, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 6 y nombre: lector 151515', '2020-10-06', '10:54:22'),
(197, 19, 'ignacio', 'correa', 'Se ha eliminado un lector, id: 6', '2020-10-06', '10:54:25'),
(198, 19, 'ignacio', 'correa', 'Se ha creado un rfid, nombre: Rfid gfgf, linea: linea2, y calibrador: undefined', '2020-10-06', '10:55:11'),
(199, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 3, linea: linea2, y calibrador: calibrador1', '2020-10-06', '11:15:20'),
(200, 19, 'ignacio', 'correa', 'Se ha un rfid un rfid, id: 3, linea: linea2, y calibrador: calibrador1', '2020-10-06', '11:15:23'),
(201, 19, 'ignacio', 'correa', 'Se ha editado un administrador, id: 73, rut: 123456789y nombre Papito Corazón', '2020-10-06', '22:53:02'),
(202, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-08', '10:51:38'),
(203, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-08', '10:52:19'),
(204, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-08', '12:09:47'),
(205, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-08', '12:10:04'),
(206, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-13', '10:09:20'),
(207, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-13', '10:09:35'),
(208, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-13', '10:14:13'),
(209, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-13', '10:14:45'),
(210, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-14', '12:16:14'),
(211, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-15', '11:55:46'),
(212, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-15', '11:56:05'),
(213, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-15', '15:57:44'),
(214, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-15', '15:58:10'),
(215, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-15', '16:19:02'),
(216, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-15', '16:19:18'),
(217, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-15', '16:23:16'),
(218, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-15', '16:23:33'),
(219, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-15', '16:30:12'),
(220, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-15', '16:30:27'),
(221, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-15', '16:32:00'),
(222, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-15', '16:32:23'),
(223, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-15', '16:37:53'),
(224, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-15', '16:38:06'),
(225, 19, 'ignacio', 'correa', 'Se ha creado un lector, nombre: Lector 1', '2020-10-17', '00:47:40'),
(226, 19, 'ignacio', 'correa', 'Se ha creado un lector, nombre: Lector 2', '2020-10-17', '00:50:20'),
(227, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 6 y nombre: Lector 1', '2020-10-17', '01:06:41'),
(228, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 6 y nombre: Lector 1', '2020-10-17', '01:06:57'),
(229, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 6 y nombre: Lector 1', '2020-10-17', '01:07:22'),
(230, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 6 y nombre: Lector 1', '2020-10-17', '01:13:01'),
(231, 19, 'ignacio', 'correa', 'Se ha eliminado un lector, id: 6', '2020-10-17', '01:13:22'),
(232, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 7 y nombre: Lector 2', '2020-10-17', '01:20:18'),
(233, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 7 y nombre: Lector 2', '2020-10-17', '01:21:44'),
(234, 19, 'ignacio', 'correa', 'Se ha creado un lector, nombre: Lector 1', '2020-10-17', '01:22:13'),
(235, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 8 y nombre: Lector 1', '2020-10-17', '01:28:50'),
(236, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 7 y nombre: Lector 2', '2020-10-18', '22:24:44'),
(237, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 8 y nombre: Lector 1', '2020-10-18', '22:24:53'),
(238, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 8 y nombre: Lector 1', '2020-10-18', '22:26:00'),
(239, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 7 y nombre: Lector 2', '2020-10-18', '22:26:07'),
(240, 19, 'ignacio', 'correa', 'Se ha creado un lector, nombre: lector 3 ', '2020-10-18', '23:06:33'),
(241, 19, 'ignacio', 'correa', 'Se ha creado un lector, nombre: Lector 4', '2020-10-18', '23:07:53'),
(242, 19, 'ignacio', 'correa', 'Se ha creado un lector, nombre: Lector 5', '2020-10-19', '10:44:19'),
(243, 19, 'ignacio', 'correa', 'Se ha creado un rfid, nombre: Rfid 1, linea: linea2, y calibrador: undefined', '2020-10-19', '10:54:28'),
(244, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 6, linea: linea2, y calibrador: calibrador1', '2020-10-19', '11:01:22'),
(245, 19, 'ignacio', 'correa', 'Se ha creado un rfid, nombre: Rfid 2, linea: linea2, y calibrador: undefined', '2020-10-19', '11:07:18'),
(246, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 7, linea: linea2, y calibrador: calibrador1', '2020-10-19', '11:07:30'),
(247, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 7, linea: linea2, y calibrador: calibrador1', '2020-10-19', '11:15:54'),
(248, 19, 'ignacio', 'correa', 'Se ha creado un rfid, nombre: Rfid 3, linea: linea2, y calibrador: undefined', '2020-10-19', '11:21:50'),
(249, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 6, linea: linea2, y calibrador: calibrador1', '2020-10-19', '11:21:58'),
(250, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 7, linea: linea2, y calibrador: calibrador1', '2020-10-19', '11:22:13'),
(251, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 6, linea: linea2, y calibrador: calibrador1', '2020-10-19', '11:22:27'),
(252, 19, 'ignacio', 'correa', 'Se ha creado un rfid, nombre: Rfid 4, linea: linea2, y calibrador: undefined', '2020-10-19', '11:22:51'),
(253, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 6, linea: linea2, y calibrador: calibrador1', '2020-10-19', '11:23:03'),
(254, 19, 'ignacio', 'correa', 'Se ha creado un rfid, nombre: Rfid 5, linea: linea2, y calibrador: undefined', '2020-10-19', '11:38:28'),
(255, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 10, linea: linea2, y calibrador: calibrador1', '2020-10-19', '11:38:34'),
(256, 19, 'ignacio', 'correa', 'Se ha creado un rfid, nombre: ignacio, linea: linea2, y calibrador: undefined', '2020-10-19', '11:42:17'),
(257, 19, 'ignacio', 'correa', 'Se ha eliminado un rfid, id: 11, linea: linea2, y calibrador: calibrador1', '2020-10-19', '11:42:20'),
(258, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-19', '15:45:57'),
(259, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-19', '15:46:13'),
(260, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-20', '09:26:39'),
(261, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-20', '10:34:06'),
(262, 19, 'ignacio', 'correa', 'Se ha creado un lector validador, nombre: Validador 1', '2020-10-20', '11:25:22'),
(263, 19, 'ignacio', 'correa', 'Se ha creado un lector validador, nombre: Validador 2', '2020-10-20', '11:34:51'),
(264, 19, 'ignacio', 'correa', 'Se ha editado un lector Validador, id: 6 y nombre: Validador 1', '2020-10-20', '12:05:48'),
(265, 19, 'ignacio', 'correa', 'Se ha editado un lector Validador, id: 6 y nombre: Validador 1', '2020-10-20', '12:05:52'),
(266, 19, 'ignacio', 'correa', 'Se ha eliminado un lector validador, id: 7', '2020-10-20', '12:07:13'),
(267, 19, 'ignacio', 'correa', 'Se ha creado un lector validador, nombre: Validador 2', '2020-10-20', '12:07:40'),
(268, 19, 'ignacio', 'correa', 'Se ha eliminado un lector validador, id: 6', '2020-10-20', '12:20:08'),
(269, 19, 'ignacio', 'correa', 'Se ha eliminado un lector validador, id: 8', '2020-10-20', '12:20:09'),
(270, 19, 'ignacio', 'correa', 'Se ha creado un lector validador, nombre: Validador 1', '2020-10-20', '12:25:02'),
(271, 19, 'ignacio', 'correa', 'Se ha eliminado un lector validador, id: 9', '2020-10-20', '12:26:51'),
(272, 19, 'ignacio', 'correa', 'Se ha creado un lector validador, nombre: Validador 1', '2020-10-20', '12:27:06'),
(273, 19, 'ignacio', 'correa', 'Se ha eliminado un lector validador, id: 10', '2020-10-20', '12:27:13'),
(274, 19, 'ignacio', 'correa', 'Se ha creado un lector validador, nombre: Validador 1', '2020-10-20', '12:27:34'),
(275, 19, 'ignacio', 'correa', 'Se ha eliminado un lector validador, id: 11', '2020-10-20', '12:29:29'),
(276, 19, 'ignacio', 'correa', 'Se ha creado un lector validador, nombre: Validador 1', '2020-10-20', '12:29:44'),
(277, 19, 'ignacio', 'correa', 'Se ha creado un administrador, rut 18.333.490-0 y nombre: ignacio perez', '2020-10-20', '12:34:49'),
(278, 19, 'ignacio', 'correa', 'Se ha creado un administrador, rut 17505454-5 y nombre: Ignacio  Domingo', '2020-10-21', '11:49:10'),
(279, 19, 'ignacio', 'correa', 'Se ha elimidado un administrador, id:  79, rut; 17505454-5 y nombre: Ignacio  Domingo', '2020-10-21', '11:49:32'),
(280, 19, 'ignacio', 'correa', 'Se ha creado un administrador, rut 12 y nombre: ignacio Farias', '2020-10-21', '14:54:39'),
(281, 19, 'ignacio', 'correa', 'Se ha creado un administrador, rut 15 y nombre: pepito Fdkdj', '2020-10-21', '15:10:47'),
(282, 19, 'ignacio', 'correa', 'Se ha elimidado un administrador, id:  80, rut; 12 y nombre: ignacio Farias', '2020-10-21', '15:11:06'),
(283, 19, 'ignacio', 'correa', 'Se ha creado un administrador, rut 12 y nombre: pepito piedra', '2020-10-21', '15:12:43'),
(284, 19, 'ignacio', 'correa', 'Se ha creado un administrador, rut 154 y nombre: juanito completo', '2020-10-21', '15:14:28'),
(285, 19, 'ignacio', 'correa', 'Se ha creado un administrador, rut 17505454- y nombre: peito rapito', '2020-10-21', '15:17:52'),
(286, 19, 'ignacio', 'correa', 'Se ha elimidado un administrador, id:  85, rut; 17505454- y nombre: peito rapito', '2020-10-21', '17:57:34'),
(287, 19, 'ignacio', 'correa', 'Se ha elimidado un administrador, id:  84, rut; 154 y nombre: juanito completo', '2020-10-21', '17:57:38'),
(288, 19, 'ignacio', 'correa', 'Se ha elimidado un administrador, id:  83, rut; 12 y nombre: pepito piedra', '2020-10-21', '17:57:39'),
(289, 19, 'ignacio', 'correa', 'Se ha elimidado un administrador, id:  82, rut; 15 y nombre: pepito Fdkdj', '2020-10-21', '17:57:41'),
(290, 19, 'ignacio', 'correa', 'Se ha creado un lector validador, nombre: ignacio', '2020-10-21', '18:38:31'),
(291, 19, 'ignacio', 'correa', 'Se ha editado un lector Validador, id: 13 y nombre: ignacio', '2020-10-22', '09:54:41'),
(292, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 6, linea: linea2, y calibrador: calibrador1', '2020-10-22', '12:05:17'),
(293, 19, 'ignacio', 'correa', 'Se ha editado un rfid, id: 6, linea: linea2, y calibrador: calibrador1', '2020-10-22', '12:05:29'),
(294, 19, 'ignacio', 'correa', 'Se ha creado un lector, nombre: ignacio', '2020-10-22', '12:09:25'),
(295, 19, 'ignacio', 'correa', 'Se ha editado un lector, id: 12 y nombre: Lector 100', '2020-10-22', '12:09:43'),
(296, 19, 'ignacio', 'correa', 'Se ha eliminado un lector, id: 12', '2020-10-22', '12:09:47'),
(297, 19, 'ignacio', 'correa', 'Se ha creado una línea, nombre: Linea 4, calibradora: calibrador1', '2020-10-22', '12:12:59'),
(298, 19, 'ignacio', 'correa', 'Se ha creado una línea, nombre: Linea 1000, calibradora: calibrado2', '2020-10-22', '12:13:20'),
(299, 19, 'ignacio', 'correa', 'Se ha editado una linea, id: 27, calibradora: calibrado2', '2020-10-22', '12:13:34'),
(300, 19, 'ignacio', 'correa', 'Se ha creado un nuevo calibrador, nombre: Calibrador 3', '2020-10-22', '12:14:19'),
(301, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-22', '16:48:32'),
(302, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-22', '16:51:57'),
(303, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-22', '16:54:33'),
(304, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-22', '16:54:55'),
(305, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-22', '16:57:15'),
(306, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-22', '16:57:33'),
(307, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-22', '16:59:48'),
(308, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-22', '17:00:10'),
(309, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-22', '17:00:30'),
(310, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-22', '17:02:01'),
(311, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-22', '17:06:32'),
(312, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-22', '17:06:49'),
(313, 19, 'ignacio', 'correa', 'Turno iniciado', '2020-10-22', '17:08:12'),
(314, 19, 'ignacio', 'correa', 'Turno cerrado', '2020-10-22', '17:08:28'),
(315, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea2 del calibrador calibrador1', '2020-10-23', '16:13:12'),
(316, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-23', '16:13:17'),
(317, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea2 del calibrador calibrador1', '2020-10-23', '16:37:37'),
(318, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-23', '17:03:53'),
(319, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-23', '17:04:00'),
(320, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-23', '17:05:16'),
(321, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-23', '17:06:12'),
(322, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea2 del calibrador calibrador1', '2020-10-23', '17:07:32'),
(323, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-23', '23:34:48'),
(324, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea3 del calibrador calibrador1', '2020-10-23', '23:40:16'),
(325, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea3 del calibrador calibrador1', '2020-10-23', '23:40:26'),
(326, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea3 del calibrador calibrador1', '2020-10-24', '00:00:49'),
(327, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:02:58'),
(328, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea3 del calibrador calibrador1', '2020-10-24', '00:03:48'),
(329, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:04:27'),
(330, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:04:30'),
(331, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea3 del calibrador calibrador1', '2020-10-24', '00:04:39'),
(332, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea3 del calibrador calibrador1', '2020-10-24', '00:08:37'),
(333, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:10:21'),
(334, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:10:29'),
(335, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea3 del calibrador calibrador1', '2020-10-24', '00:10:43'),
(336, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:13:57'),
(337, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:14:00'),
(338, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea3 del calibrador calibrador1', '2020-10-24', '00:14:08'),
(339, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 16879548-3, nombre: Ignacio  en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:14:37'),
(340, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:35:19'),
(341, 19, 'ignacio', 'correa', 'Se ha agregado el usuario con rut: 24270021-6, nombre: agustin en la linea linea2 del calibrador calibrador1', '2020-10-24', '00:37:23'),
(342, 18, 'cristian', 'farias', 'Turno cerrado', '2020-10-26', '09:49:32'),
(343, 18, 'cristian', 'farias', 'Turno cerrado', '2020-10-26', '09:52:39'),
(344, 18, 'cristian', 'farias', 'Turno cerrado', '2020-10-26', '09:54:02'),
(345, 18, 'cristian', 'farias', 'Turno cerrado', '2020-10-26', '09:57:56'),
(346, 18, 'cristian', 'farias', 'Turno iniciado', '2020-10-26', '09:59:25'),
(347, 18, 'cristian', 'farias', 'Se ha eliminado un lector, id: 11', '2020-10-26', '10:04:20'),
(348, 18, 'cristian', 'farias', 'Se ha eliminado un lector, id: 10', '2020-10-26', '10:04:22'),
(349, 18, 'cristian', 'farias', 'Se ha eliminado un lector, id: 9', '2020-10-26', '10:04:24'),
(350, 18, 'cristian', 'farias', 'Se ha eliminado un lector, id: 8', '2020-10-26', '10:04:29'),
(351, 18, 'cristian', 'farias', 'Se ha editado un lector, id: 7 y nombre: Lector 2', '2020-10-26', '13:07:37'),
(352, 18, 'cristian', 'farias', 'Se ha eliminado un rfid, id: 10, linea: linea2, y calibrador: calibrador1', '2020-10-26', '13:08:14'),
(353, 18, 'cristian', 'farias', 'Se ha eliminado un rfid, id: 9, linea: linea2, y calibrador: calibrador1', '2020-10-26', '13:08:16'),
(354, 18, 'cristian', 'farias', 'Se ha eliminado un rfid, id: 8, linea: linea2, y calibrador: calibrador1', '2020-10-26', '13:08:17'),
(355, 18, 'cristian', 'farias', 'Se ha eliminado un rfid, id: 7, linea: linea2, y calibrador: calibrador1', '2020-10-26', '13:08:19'),
(356, 18, 'cristian', 'farias', 'Se ha editado un rfid, id: 6, linea: linea2, y calibrador: calibrador1', '2020-10-26', '13:08:33'),
(357, 18, 'cristian', 'farias', 'Se ha editado un lector, id: 7 y nombre: Lector 2', '2020-10-26', '13:08:57'),
(358, 18, 'cristian', 'farias', 'Se ha editado un rfid, id: 6, linea: linea2, y calibrador: calibrador1', '2020-10-26', '13:10:00'),
(359, 18, 'cristian', 'farias', 'Se ha editado un lector, id: 7 y nombre: Lector 2', '2020-10-26', '13:10:10'),
(360, 18, 'cristian', 'farias', 'Se ha editado un colaborador, id de registro: 1, rut:24270021-6', '2020-10-26', '13:11:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_diario_caja_sellada`
--

CREATE TABLE `registro_diario_caja_sellada` (
  `id` int(11) NOT NULL,
  `id_calibrador` int(11) NOT NULL,
  `nombre_calibrador` varchar(70) NOT NULL,
  `id_linea` int(11) NOT NULL,
  `nombre_linea` varchar(70) NOT NULL,
  `id_rfid` int(11) NOT NULL,
  `nombre_rfid` varchar(70) NOT NULL,
  `ip_rfid` varchar(70) NOT NULL,
  `id_lector` int(11) NOT NULL,
  `nombre_lector` varchar(70) NOT NULL,
  `ip_lector` varchar(70) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `rut_usuario` varchar(10) NOT NULL,
  `nombre_usuario` varchar(70) NOT NULL,
  `apellido_usuario` varchar(70) NOT NULL,
  `codigo_de_barra` varchar(70) NOT NULL,
  `id_caja` int(11) NOT NULL,
  `envase_caja` varchar(70) NOT NULL,
  `variedad_caja` varchar(70) NOT NULL,
  `categoria_caja` varchar(70) NOT NULL,
  `calibre_caja` varchar(70) NOT NULL,
  `correlativo_caja` varchar(70) NOT NULL,
  `ponderacion_caja` varchar(70) NOT NULL,
  `fecha_sellado` varchar(10) NOT NULL,
  `hora_sellado` varchar(8) NOT NULL,
  `fecha_validacion` varchar(10) NOT NULL,
  `hora_validacion` varchar(8) NOT NULL,
  `is_verificado` tinyint(4) NOT NULL DEFAULT 0,
  `is_before_time` tinyint(4) NOT NULL DEFAULT 0,
  `id_apertura_cierre_de_turno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro_diario_caja_sellada`
--

INSERT INTO `registro_diario_caja_sellada` (`id`, `id_calibrador`, `nombre_calibrador`, `id_linea`, `nombre_linea`, `id_rfid`, `nombre_rfid`, `ip_rfid`, `id_lector`, `nombre_lector`, `ip_lector`, `id_usuario`, `rut_usuario`, `nombre_usuario`, `apellido_usuario`, `codigo_de_barra`, `id_caja`, `envase_caja`, `variedad_caja`, `categoria_caja`, `calibre_caja`, `correlativo_caja`, `ponderacion_caja`, `fecha_sellado`, `hora_sellado`, `fecha_validacion`, `hora_validacion`, `is_verificado`, `is_before_time`, `id_apertura_cierre_de_turno`) VALUES
(458, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(459, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '01:00:00', '2020-09-24', '08:39:02', 0, 1, 0),
(460, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(461, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(462, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(463, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(464, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(465, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(466, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(467, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(468, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(469, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(470, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(471, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(472, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(473, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(474, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(475, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(476, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(477, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(478, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(479, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(480, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(481, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(482, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(483, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(484, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(485, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(486, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(487, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(488, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(489, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(490, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(491, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(492, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(493, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(494, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(495, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(496, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(497, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(498, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(499, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(500, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(501, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(502, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(503, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(504, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(505, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(506, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(507, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(508, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(509, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(510, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(511, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(512, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(513, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(514, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(515, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(516, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(517, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(518, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(519, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(520, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '16334854-1', 'Pablo', 'Chill-e', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(521, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '01:00:00', '2020-09-24', '08:39:02', 0, 1, 0),
(522, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(523, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(524, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(525, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(526, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(527, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(528, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(529, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(530, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(531, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(532, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(533, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(534, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(535, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(536, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(537, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(538, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(539, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(540, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(541, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(542, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(543, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(544, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(545, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(546, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(547, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(548, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(549, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(550, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(551, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(552, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(553, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(554, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(555, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(556, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(557, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(558, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(559, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(560, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(561, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(562, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(563, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(564, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(565, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(566, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(567, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(568, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(569, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(570, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(571, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(572, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(573, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(574, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(575, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(576, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(577, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(578, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(579, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(580, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(581, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(582, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(583, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(584, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(585, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(586, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(587, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(588, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(589, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '05:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(590, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(591, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(592, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '15894698-5', 'Juliano', 'Sosa', '54682000', 2000, 'caja grande', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(593, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '01:00:00', '2020-09-24', '08:39:02', 0, 1, 0),
(594, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(595, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(596, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-01', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(597, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(598, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(599, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(600, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-02', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(601, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(602, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(603, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(604, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-03', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(605, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0);
INSERT INTO `registro_diario_caja_sellada` (`id`, `id_calibrador`, `nombre_calibrador`, `id_linea`, `nombre_linea`, `id_rfid`, `nombre_rfid`, `ip_rfid`, `id_lector`, `nombre_lector`, `ip_lector`, `id_usuario`, `rut_usuario`, `nombre_usuario`, `apellido_usuario`, `codigo_de_barra`, `id_caja`, `envase_caja`, `variedad_caja`, `categoria_caja`, `calibre_caja`, `correlativo_caja`, `ponderacion_caja`, `fecha_sellado`, `hora_sellado`, `fecha_validacion`, `hora_validacion`, `is_verificado`, `is_before_time`, `id_apertura_cierre_de_turno`) VALUES
(606, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(607, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(608, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-04', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(609, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(610, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(611, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(612, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-05', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(613, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(614, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(615, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(616, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-06', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(617, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(618, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(619, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(620, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-07', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(621, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(622, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(623, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(624, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-08', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(625, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '01:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(626, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '02:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(627, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '03:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(628, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja chica', 'variedad caja', 'categoria de caja', 'calibre de chica', 'correlativo caja', 'ponderación caja', '2020-09-09', '04:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(629, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-01', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(630, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-01', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(631, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-02', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(632, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-01', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(633, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-01', '09:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(634, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-02', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(635, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-02', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(636, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-02', '09:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(637, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-03', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(638, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-03', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(639, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-03', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(640, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-03', '09:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(641, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-04', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(642, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-04', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(643, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-04', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(644, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-05', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(645, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-04', '09:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(646, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-05', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(647, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-05', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(648, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-06', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(649, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-05', '09:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(650, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-06', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(651, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-06', '09:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(652, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-06', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(653, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-07', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(654, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-07', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(655, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-07', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(656, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-07', '09:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(657, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-08', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(658, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-08', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(659, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-08', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(660, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-08', '09:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(661, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-09', '06:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(662, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-09', '07:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(663, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-09', '08:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(664, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-09', '09:00:00', '2020-09-24', '08:39:02', 1, 1, 0),
(665, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-01', '08:30:00', '2020-09-24', '08:39:02', 1, 1, 0),
(666, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-09-01', '08:35:00', '2020-09-24', '08:39:02', 1, 1, 0),
(667, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-08', '11:55:00', '2020-09-24', '08:39:02', 1, 1, 0),
(668, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-08', '11:55:30', '2020-09-24', '08:39:02', 1, 1, 0),
(669, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-08', '11:56:10', '2020-09-24', '08:39:02', 1, 1, 0),
(670, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-08', '12:15:10', '2020-09-24', '08:39:02', 1, 1, 0),
(671, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-08', '12:16:10', '2020-09-24', '08:39:02', 1, 1, 0),
(672, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:11:00', '2020-10-14', '08:39:02', 1, 1, 0),
(673, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:10:00', '2020-10-14', '08:39:02', 1, 1, 0),
(674, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:12:00', '2020-10-14', '08:39:02', 1, 1, 0),
(675, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:13:00', '2020-10-14', '08:39:02', 1, 1, 0),
(676, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:14:00', '2020-10-14', '08:39:02', 1, 1, 0),
(677, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:15:00', '2020-10-14', '08:39:02', 1, 1, 0),
(678, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:16:00', '2020-10-14', '08:39:02', 1, 1, 0),
(679, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:17:00', '2020-10-14', '08:39:02', 1, 1, 0),
(680, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:18:00', '2020-10-14', '08:39:02', 1, 1, 0),
(681, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:19:00', '2020-10-14', '08:39:02', 1, 1, 0),
(682, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:20:00', '2020-10-14', '08:39:02', 1, 1, 0),
(683, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:21:00', '2020-10-14', '08:39:02', 1, 1, 0),
(684, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:22:00', '2020-10-14', '08:39:02', 1, 1, 0),
(685, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:23:00', '2020-10-14', '08:39:02', 1, 1, 0),
(686, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:24:00', '2020-10-14', '08:39:02', 1, 1, 0),
(687, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:25:00', '2020-10-14', '08:39:02', 1, 1, 0),
(688, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:26:00', '2020-10-14', '08:39:02', 1, 1, 0),
(689, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:27:00', '2020-10-14', '08:39:02', 1, 1, 0),
(690, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:28:00', '2020-10-14', '08:39:02', 1, 1, 0),
(691, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:29:00', '2020-10-14', '08:39:02', 1, 1, 0),
(692, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:30:00', '2020-10-14', '08:39:02', 1, 1, 0),
(693, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:31:00', '2020-10-14', '08:39:02', 1, 1, 0),
(694, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:32:00', '2020-10-14', '08:39:02', 1, 1, 0),
(695, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:33:00', '2020-10-14', '08:39:02', 1, 1, 0),
(696, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:34:00', '2020-10-14', '08:39:02', 1, 1, 0),
(697, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:35:00', '2020-10-14', '08:39:02', 1, 1, 0),
(698, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:36:00', '2020-10-14', '08:39:02', 1, 1, 0),
(699, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:37:00', '2020-10-14', '08:39:02', 1, 1, 0),
(700, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:39:00', '2020-10-14', '08:39:02', 1, 1, 0),
(701, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:38:00', '2020-10-14', '08:39:02', 1, 1, 0),
(702, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:14:00', '2020-10-14', '08:39:02', 1, 1, 0),
(703, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:13:00', '2020-10-14', '08:39:02', 1, 1, 0),
(704, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:10:00', '2020-10-14', '08:39:02', 1, 1, 0),
(705, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:11:00', '2020-10-14', '08:39:02', 1, 1, 0),
(706, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:12:00', '2020-10-14', '08:39:02', 1, 1, 0),
(707, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:16:00', '2020-10-14', '08:39:02', 1, 1, 0),
(708, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:15:00', '2020-10-14', '08:39:02', 1, 1, 0),
(709, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:17:00', '2020-10-14', '08:39:02', 1, 1, 0),
(710, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:18:00', '2020-10-14', '08:39:02', 1, 1, 0),
(711, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:19:00', '2020-10-14', '08:39:02', 1, 1, 0),
(712, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:20:00', '2020-10-14', '08:39:02', 1, 1, 0),
(713, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:21:00', '2020-10-14', '08:39:02', 1, 1, 0),
(714, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:22:00', '2020-10-14', '08:39:02', 1, 1, 0),
(715, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:23:00', '2020-10-14', '08:39:02', 1, 1, 0),
(716, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:24:00', '2020-10-14', '08:39:02', 1, 1, 0),
(717, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:25:00', '2020-10-14', '08:39:02', 1, 1, 0),
(718, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:26:00', '2020-10-14', '08:39:02', 1, 1, 0),
(719, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:27:00', '2020-10-14', '08:39:02', 1, 1, 0),
(720, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:28:00', '2020-10-14', '08:39:02', 1, 1, 0),
(721, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:29:00', '2020-10-14', '08:39:02', 1, 1, 0),
(722, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:30:00', '2020-10-14', '08:39:02', 1, 1, 0),
(723, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:31:00', '2020-10-14', '08:39:02', 1, 1, 0),
(724, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:32:00', '2020-10-14', '08:39:02', 1, 1, 0),
(725, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:33:00', '2020-10-14', '08:39:02', 1, 1, 0),
(726, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:34:00', '2020-10-14', '08:39:02', 1, 1, 0),
(727, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:35:00', '2020-10-14', '08:39:02', 1, 1, 0),
(728, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:36:00', '2020-10-14', '08:39:02', 1, 1, 0),
(729, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:37:00', '2020-10-14', '08:39:02', 1, 1, 0),
(730, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:38:00', '2020-10-14', '08:39:02', 1, 1, 0),
(731, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-13', '16:39:00', '2020-10-14', '08:39:02', 1, 1, 0),
(732, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:17:15', '2020-10-15', '08:39:02', 1, 1, 0),
(733, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:16:15', '2020-10-15', '08:39:02', 1, 1, 0),
(734, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:18:15', '2020-10-15', '08:39:02', 1, 1, 0),
(735, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:19:15', '2020-10-15', '08:39:02', 1, 1, 0),
(736, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:20:15', '2020-10-15', '08:39:02', 1, 1, 0),
(737, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:21:15', '2020-10-15', '08:39:02', 1, 1, 0),
(738, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:22:15', '2020-10-15', '08:39:02', 1, 1, 0),
(739, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:23:15', '2020-10-15', '08:39:02', 1, 1, 0),
(740, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:24:15', '2020-10-15', '08:39:02', 1, 1, 0),
(741, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:25:15', '2020-10-15', '08:39:02', 1, 1, 0),
(742, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:26:15', '2020-10-15', '08:39:02', 1, 1, 0),
(743, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:27:15', '2020-10-15', '08:39:02', 1, 1, 0),
(744, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:28:15', '2020-10-15', '08:39:02', 1, 1, 0),
(745, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:29:15', '2020-10-15', '08:39:02', 1, 1, 0),
(746, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:30:15', '2020-10-15', '08:39:02', 1, 1, 0),
(747, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:31:15', '2020-10-15', '08:39:02', 1, 1, 0),
(748, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:32:15', '2020-10-15', '08:39:02', 1, 1, 0),
(749, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:33:15', '2020-10-15', '08:39:02', 1, 1, 0),
(750, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:34:15', '2020-10-15', '08:39:02', 1, 1, 0),
(751, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:35:15', '2020-10-15', '08:39:02', 1, 1, 0),
(752, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:36:15', '2020-10-15', '08:39:02', 1, 1, 0),
(753, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:39:15', '2020-10-15', '08:39:02', 1, 1, 0);
INSERT INTO `registro_diario_caja_sellada` (`id`, `id_calibrador`, `nombre_calibrador`, `id_linea`, `nombre_linea`, `id_rfid`, `nombre_rfid`, `ip_rfid`, `id_lector`, `nombre_lector`, `ip_lector`, `id_usuario`, `rut_usuario`, `nombre_usuario`, `apellido_usuario`, `codigo_de_barra`, `id_caja`, `envase_caja`, `variedad_caja`, `categoria_caja`, `calibre_caja`, `correlativo_caja`, `ponderacion_caja`, `fecha_sellado`, `hora_sellado`, `fecha_validacion`, `hora_validacion`, `is_verificado`, `is_before_time`, `id_apertura_cierre_de_turno`) VALUES
(754, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:37:15', '2020-10-15', '08:39:02', 1, 1, 0),
(755, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:38:15', '2020-10-15', '08:39:02', 1, 1, 0),
(756, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:44:15', '2020-10-15', '08:39:02', 1, 1, 0),
(757, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:40:15', '2020-10-15', '08:39:02', 1, 1, 0),
(758, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:41:15', '2020-10-15', '08:39:02', 1, 1, 0),
(759, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:42:15', '2020-10-15', '08:39:02', 1, 1, 0),
(760, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:43:15', '2020-10-15', '08:39:02', 1, 1, 0),
(761, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:45:15', '2020-10-15', '08:39:02', 1, 1, 0),
(762, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:46:15', '2020-10-15', '08:39:02', 1, 1, 0),
(763, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:47:15', '2020-10-15', '08:39:02', 1, 1, 0),
(764, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:48:15', '2020-10-15', '08:39:02', 1, 1, 0),
(765, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:49:15', '2020-10-15', '08:39:02', 1, 1, 0),
(766, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:50:15', '2020-10-15', '08:39:02', 1, 1, 0),
(767, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:52:15', '2020-10-15', '08:39:02', 1, 1, 0),
(768, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:53:15', '2020-10-15', '08:39:02', 1, 1, 0),
(769, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:55:15', '2020-10-15', '08:39:02', 1, 1, 0),
(770, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:51:15', '2020-10-15', '08:39:02', 1, 1, 0),
(771, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:54:15', '2020-10-15', '08:39:02', 1, 1, 0),
(772, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:57:15', '2020-10-15', '08:39:02', 1, 1, 0),
(773, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:58:15', '2020-10-15', '08:39:02', 1, 1, 0),
(774, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '12:56:15', '2020-10-15', '08:39:02', 1, 1, 0),
(775, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:10:15', '2020-10-15', '08:39:02', 1, 1, 0),
(776, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:11:15', '2020-10-15', '08:39:02', 1, 1, 0),
(777, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:12:15', '2020-10-15', '08:39:02', 1, 1, 0),
(778, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:13:15', '2020-10-15', '08:39:02', 1, 1, 0),
(779, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:14:15', '2020-10-15', '08:39:02', 1, 1, 0),
(780, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:15:15', '2020-10-15', '08:39:02', 1, 1, 0),
(781, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:16:15', '2020-10-15', '08:39:02', 1, 1, 0),
(782, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:17:15', '2020-10-15', '08:39:02', 1, 1, 0),
(783, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:18:15', '2020-10-15', '08:39:02', 1, 1, 0),
(784, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:19:15', '2020-10-15', '08:39:02', 1, 1, 0),
(785, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:20:15', '2020-10-15', '08:39:02', 1, 1, 0),
(786, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:21:15', '2020-10-15', '08:39:02', 1, 1, 0),
(787, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:22:15', '2020-10-15', '08:39:02', 1, 1, 0),
(788, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:23:15', '2020-10-15', '08:39:02', 1, 1, 0),
(789, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:24:15', '2020-10-15', '08:39:02', 1, 1, 0),
(790, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:25:15', '2020-10-15', '08:39:02', 1, 1, 0),
(791, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:26:15', '2020-10-15', '08:39:02', 1, 1, 0),
(792, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:27:15', '2020-10-15', '08:39:02', 1, 1, 0),
(793, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:28:15', '2020-10-15', '08:39:02', 1, 1, 0),
(794, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:29:15', '2020-10-15', '08:39:02', 1, 1, 0),
(795, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:30:15', '2020-10-15', '08:39:02', 1, 1, 0),
(796, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:32:15', '2020-10-15', '08:39:02', 1, 1, 0),
(797, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:33:15', '2020-10-15', '08:39:02', 1, 1, 0),
(798, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:31:15', '2020-10-15', '08:39:02', 1, 1, 0),
(799, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:34:15', '2020-10-15', '08:39:02', 1, 1, 0),
(800, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:35:15', '2020-10-15', '08:39:02', 1, 1, 0),
(801, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:36:15', '2020-10-15', '08:39:02', 1, 1, 0),
(802, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:37:15', '2020-10-15', '08:39:02', 1, 1, 0),
(803, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:38:15', '2020-10-15', '08:39:02', 1, 1, 0),
(804, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:39:15', '2020-10-15', '08:39:02', 1, 1, 0),
(805, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:40:15', '2020-10-15', '08:39:02', 1, 1, 0),
(806, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:41:15', '2020-10-15', '08:39:02', 1, 1, 0),
(807, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:42:15', '2020-10-15', '08:39:02', 1, 1, 0),
(808, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:43:15', '2020-10-15', '08:39:02', 1, 1, 0),
(809, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:44:15', '2020-10-15', '08:39:02', 1, 1, 0),
(810, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:45:15', '2020-10-15', '08:39:02', 1, 1, 0),
(811, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:46:15', '2020-10-15', '08:39:02', 1, 1, 0),
(812, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:47:15', '2020-10-15', '08:39:02', 1, 1, 0),
(813, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:48:15', '2020-10-15', '08:39:02', 1, 1, 0),
(814, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:49:15', '2020-10-15', '08:39:02', 1, 1, 0),
(815, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:50:15', '2020-10-15', '08:39:02', 1, 1, 0),
(816, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:51:15', '2020-10-15', '08:39:02', 1, 1, 0),
(817, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:52:15', '2020-10-15', '08:39:02', 1, 1, 0),
(818, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:53:15', '2020-10-15', '08:39:02', 1, 1, 0),
(819, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:54:15', '2020-10-15', '08:39:02', 1, 1, 0),
(820, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:55:15', '2020-10-15', '08:39:02', 1, 1, 0),
(821, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:56:15', '2020-10-15', '08:39:02', 1, 1, 0),
(822, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:57:15', '2020-10-15', '08:39:02', 1, 1, 0),
(823, 2, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-14', '15:58:15', '2020-10-15', '08:39:02', 1, 1, 0),
(824, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:30:15', '2020-10-16', '08:39:02', 1, 1, 0),
(825, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:31:15', '2020-10-16', '08:39:02', 1, 1, 0),
(826, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:32:15', '2020-10-16', '08:39:02', 1, 1, 0),
(827, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:33:15', '2020-10-16', '08:39:02', 1, 1, 0),
(828, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:34:15', '2020-10-16', '08:39:02', 1, 1, 0),
(829, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:35:15', '2020-10-16', '08:39:02', 1, 1, 0),
(830, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:36:15', '2020-10-16', '08:39:02', 1, 1, 0),
(831, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:37:15', '2020-10-16', '08:39:02', 1, 1, 0),
(832, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:38:15', '2020-10-16', '08:39:02', 1, 1, 0),
(833, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:39:15', '2020-10-16', '08:39:02', 1, 1, 0),
(834, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:40:15', '2020-10-16', '08:39:02', 1, 1, 0),
(835, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:41:15', '2020-10-16', '08:39:02', 1, 1, 0),
(836, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:42:15', '2020-10-16', '08:39:02', 1, 1, 0),
(837, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:43:15', '2020-10-16', '08:39:02', 1, 1, 0),
(838, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:44:15', '2020-10-16', '08:39:02', 1, 1, 0),
(839, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:47:15', '2020-10-16', '08:39:02', 1, 1, 0),
(840, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:45:15', '2020-10-16', '08:39:02', 1, 1, 0),
(841, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:46:15', '2020-10-16', '08:39:02', 1, 1, 0),
(842, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:48:15', '2020-10-16', '08:39:02', 1, 1, 0),
(843, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:49:15', '2020-10-16', '08:39:02', 1, 1, 0),
(844, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:50:15', '2020-10-16', '08:39:02', 1, 1, 0),
(845, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:52:15', '2020-10-16', '08:39:02', 1, 1, 0),
(846, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:53:15', '2020-10-16', '08:39:02', 1, 1, 0),
(847, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:51:15', '2020-10-16', '08:39:02', 1, 1, 0),
(848, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:54:15', '2020-10-16', '08:39:02', 1, 1, 0),
(849, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:55:15', '2020-10-16', '08:39:02', 1, 1, 0),
(850, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:56:15', '2020-10-16', '08:39:02', 1, 1, 0),
(851, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:57:15', '2020-10-16', '08:39:02', 1, 1, 0),
(852, 1, 'calibrador_1', 22, 'linea_2', 3100, 'rfid_1213', '192.168.0.2', 2, 'lector_1', '192.168.10.2', 2, '13954687-7', 'Ignacio', 'Correa', '54682000', 2000, 'caja mediana', 'variedad caja', 'categoria de caja', 'calibre de caja', 'correlativo caja', 'ponderación caja', '2020-10-15', '15:58:15', '2020-10-16', '08:39:02', 1, 1, 0),
(853, 1, 'calibrador1', 22, 'linea2', 6, 'Rfid 1', 'COM5', 7, 'Lector 2', 'COM6', 1, '24270021-6', 'agustin', 'lopez', '20981538', 1, 'envase1caja_unitec', 'variedad1', 'variedad1', 'variedad1', 'cal1', '1', '2020-10-26', '01:37:26', '', '', 0, 0, 49);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_diario_usuario_en_linea`
--

CREATE TABLE `registro_diario_usuario_en_linea` (
  `id` int(11) NOT NULL,
  `id_linea` int(11) NOT NULL,
  `nombre_linea` varchar(70) NOT NULL,
  `id_rfid` int(11) NOT NULL,
  `nombre_rfid` varchar(70) NOT NULL,
  `ip_rfid` varchar(70) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `usuario_rut` varchar(70) NOT NULL,
  `nombre_usuario` varchar(70) NOT NULL,
  `apellido_usuario` varchar(70) NOT NULL,
  `rfid_usuario` varchar(70) NOT NULL,
  `fecha_inicio` varchar(10) NOT NULL,
  `hora_inicio` varchar(8) NOT NULL,
  `fecha_termino` varchar(10) NOT NULL,
  `hora_termino` varchar(8) NOT NULL,
  `id_calibrador` int(11) DEFAULT NULL,
  `nombre_calibrador` varchar(70) DEFAULT NULL,
  `id_apertura_cierre_de_turno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro_diario_usuario_en_linea`
--

INSERT INTO `registro_diario_usuario_en_linea` (`id`, `id_linea`, `nombre_linea`, `id_rfid`, `nombre_rfid`, `ip_rfid`, `id_usuario`, `usuario_rut`, `nombre_usuario`, `apellido_usuario`, `rfid_usuario`, `fecha_inicio`, `hora_inicio`, `fecha_termino`, `hora_termino`, `id_calibrador`, `nombre_calibrador`, `id_apertura_cierre_de_turno`) VALUES
(42, 22, 'linea2', 6, 'Rfid 1', 'COM5', 1, '24270021-6', 'agustin', 'lopez', '0014666635', '2020-10-26', '01:20:51', '', '', 1, 'calibrador1', 49);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rfid`
--

CREATE TABLE `rfid` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `baudRate` varchar(40) NOT NULL,
  `parity` varchar(40) NOT NULL,
  `stopBits` varchar(40) NOT NULL,
  `dataBits` varchar(40) NOT NULL,
  `fk_linea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rfid`
--

INSERT INTO `rfid` (`id`, `nombre`, `ip`, `baudRate`, `parity`, `stopBits`, `dataBits`, `fk_linea`) VALUES
(6, 'Rfid 1', 'COM5', '9600', 'None', '1', '8', 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `rut` varchar(10) NOT NULL,
  `nombre` varchar(70) NOT NULL,
  `apellido` varchar(70) NOT NULL,
  `rfid` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `rut`, `nombre`, `apellido`, `rfid`) VALUES
(1, '24270021-6', 'agustin', 'lopez', '0014666635'),
(2, '16879548-3', 'Ignacio ', 'Correa', '1234567898');

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
-- Indices de la tabla `caja`
--
ALTER TABLE `caja`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `caja_unitec`
--
ALTER TABLE `caja_unitec`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calibrador`
--
ALTER TABLE `calibrador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colaborador`
--
ALTER TABLE `colaborador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `configuracion`
--
ALTER TABLE `configuracion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lector`
--
ALTER TABLE `lector`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lector_fk_linea` (`fk_linea`);

--
-- Indices de la tabla `lector_validador`
--
ALTER TABLE `lector_validador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lector_validador_fk_linea` (`fk_calibrador`);

--
-- Indices de la tabla `linea`
--
ALTER TABLE `linea`
  ADD PRIMARY KEY (`id`),
  ADD KEY `linea_fk_calibrador` (`fk_calibrador`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro_diario_caja_sellada`
--
ALTER TABLE `registro_diario_caja_sellada`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro_diario_usuario_en_linea`
--
ALTER TABLE `registro_diario_usuario_en_linea`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rfid`
--
ALTER TABLE `rfid`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rfid_fk_linea` (`fk_linea`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rfid` (`rfid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT de la tabla `apertura_cierre_de_turno`
--
ALTER TABLE `apertura_cierre_de_turno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `caja`
--
ALTER TABLE `caja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `caja_unitec`
--
ALTER TABLE `caja_unitec`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `calibrador`
--
ALTER TABLE `calibrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `colaborador`
--
ALTER TABLE `colaborador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `configuracion`
--
ALTER TABLE `configuracion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `lector`
--
ALTER TABLE `lector`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `lector_validador`
--
ALTER TABLE `lector_validador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `linea`
--
ALTER TABLE `linea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=361;

--
-- AUTO_INCREMENT de la tabla `registro_diario_caja_sellada`
--
ALTER TABLE `registro_diario_caja_sellada`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=854;

--
-- AUTO_INCREMENT de la tabla `registro_diario_usuario_en_linea`
--
ALTER TABLE `registro_diario_usuario_en_linea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `rfid`
--
ALTER TABLE `rfid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `lector`
--
ALTER TABLE `lector`
  ADD CONSTRAINT `lector_fk_linea` FOREIGN KEY (`fk_linea`) REFERENCES `linea` (`id`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `lector_validador`
--
ALTER TABLE `lector_validador`
  ADD CONSTRAINT `lector_validador_fk_linea` FOREIGN KEY (`fk_calibrador`) REFERENCES `calibrador` (`id`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `linea`
--
ALTER TABLE `linea`
  ADD CONSTRAINT `linea_fk_calibrador` FOREIGN KEY (`fk_calibrador`) REFERENCES `calibrador` (`id`);

--
-- Filtros para la tabla `rfid`
--
ALTER TABLE `rfid`
  ADD CONSTRAINT `rfid_fk_linea` FOREIGN KEY (`fk_linea`) REFERENCES `linea` (`id`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
