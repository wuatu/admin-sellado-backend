-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: zeltasto_sellado
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Base de datos: `zeltasto_sellado`
--
CREATE DATABASE IF NOT EXISTS `sellado` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sellado`;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administrador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(10) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `superadmin` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `rut` (`rut`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (18,'18253490','cristian','farias','$2a$10$cvqyohvBGT5V45447s5oQuUmZC/k5Oj4a.FwhYGmq24XB31RJstUG',1),(19,'175054545','ignacio','correa','$2a$10$JiXwpkkYYXNQ4D2GmA/n6u.tAFWZNAVhI2ulANFYTeWrFRwOrF7Le',1),(40,'123456','admindfmnlsdnflks','correa','$2a$10$CW8DTgv2KLLmQdt3F35A1eVyzTZolVbXGIZ/7oCaK9UBqd.Ezp0KS',0),(21,'161587664','rodolfo','henzi','$2a$10$QJ9lG/AnTeSeQ8xfkrlBoOe/9tR2sQK6mRTPsihDFQWDX14Sbf03a',1),(22,'123','admin2','correa','$2a$10$JcAhkfknfGUonvQ/88yKdOODx4BF5L2YouWe6eE74XFQdiMszIdiS',0);
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apertura_cierre_de_turno`
--

DROP TABLE IF EXISTS `apertura_cierre_de_turno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apertura_cierre_de_turno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_apertura` varchar(40) NOT NULL,
  `id_administrador_apertura` int(11) NOT NULL,
  `nombre_administrador_apertura` varchar(40) NOT NULL,
  `apellido_administrador_apertura` varchar(40) NOT NULL,
  `fecha_cierre` varchar(40) NOT NULL,
  `id_administrador_cierre` int(11) NOT NULL,
  `nombre_administrador_cierre` varchar(40) NOT NULL,
  `apellido_administrador_cierre` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apertura_cierre_de_turno`
--

LOCK TABLES `apertura_cierre_de_turno` WRITE;
/*!40000 ALTER TABLE `apertura_cierre_de_turno` DISABLE KEYS */;
/*!40000 ALTER TABLE `apertura_cierre_de_turno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calibrador`
--

DROP TABLE IF EXISTS `calibrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calibrador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calibrador`
--

LOCK TABLES `calibrador` WRITE;
/*!40000 ALTER TABLE `calibrador` DISABLE KEYS */;
INSERT INTO `calibrador` VALUES (1,'calibrador1'),(2,'calibrado2');
/*!40000 ALTER TABLE `calibrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lector`
--

DROP TABLE IF EXISTS `lector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lector` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `fk_linea` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lector_fk_linea` (`fk_linea`),
  CONSTRAINT `lector_fk_linea` FOREIGN KEY (`fk_linea`) REFERENCES `linea` (`id`) ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lector`
--

LOCK TABLES `lector` WRITE;
/*!40000 ALTER TABLE `lector` DISABLE KEYS */;
INSERT INTO `lector` VALUES (3,'ignacio','123.456.789',22),(5,'lector1','123.456.789',22);
/*!40000 ALTER TABLE `lector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linea`
--

DROP TABLE IF EXISTS `linea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `linea` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `fk_calibrador` int(11) NOT NULL,
  `nombre_calibrador` varchar(40) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `linea_fk_calibrador` (`fk_calibrador`),
  CONSTRAINT `linea_fk_calibrador` FOREIGN KEY (`fk_calibrador`) REFERENCES `calibrador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linea`
--

LOCK TABLES `linea` WRITE;
/*!40000 ALTER TABLE `linea` DISABLE KEYS */;
INSERT INTO `linea` VALUES (22,'linea2',1,'calibrador1'),(23,'linea1',2,'selladora2'),(24,'linea3',1,'selladora1');
/*!40000 ALTER TABLE `linea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registro`
--

DROP TABLE IF EXISTS `registro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_administrador` int(11) NOT NULL,
  `nombre_administrador` varchar(40) NOT NULL,
  `apellido_administrador` varchar(40) NOT NULL,
  `registro` varchar(255) NOT NULL,
  `fecha` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro`
--

LOCK TABLES `registro` WRITE;
/*!40000 ALTER TABLE `registro` DISABLE KEYS */;
/*!40000 ALTER TABLE `registro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registro_diario_codigo_de_barra`
--

DROP TABLE IF EXISTS `registro_diario_codigo_de_barra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registro_diario_codigo_de_barra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_de_barra` varchar(40) NOT NULL,
  `id_linea` int(11) NOT NULL,
  `nombre_linea` varchar(40) NOT NULL,
  `id_lector` int(11) NOT NULL,
  `nombre_lector` varchar(40) NOT NULL,
  `puerto_lector` varchar(40) NOT NULL,
  `fk_lector_lector` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(40) NOT NULL,
  `apellido_usuario` varchar(40) NOT NULL,
  `fecha` date NOT NULL,
  `is_verificado` tinyint(4) NOT NULL DEFAULT '0',
  `is_before_time` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro_diario_codigo_de_barra`
--

LOCK TABLES `registro_diario_codigo_de_barra` WRITE;
/*!40000 ALTER TABLE `registro_diario_codigo_de_barra` DISABLE KEYS */;
/*!40000 ALTER TABLE `registro_diario_codigo_de_barra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registro_diario_usuario_en_linea`
--

DROP TABLE IF EXISTS `registro_diario_usuario_en_linea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registro_diario_usuario_en_linea` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_linea` int(11) NOT NULL,
  `nombre_linea` varchar(40) NOT NULL,
  `id_lector` int(11) NOT NULL,
  `nombre_lector` varchar(40) NOT NULL,
  `ip_lector` varchar(40) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `usuario_rut` varchar(40) NOT NULL,
  `nombre_usuario` varchar(40) NOT NULL,
  `apellido_usuario` varchar(40) NOT NULL,
  `rfid_usuario` varchar(40) NOT NULL,
  `fecha_inicio` varchar(40) NOT NULL,
  `fecha_termino` varchar(40) NOT NULL,
  `id_calibrador` int(11) DEFAULT NULL,
  `nombre_calibrador` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro_diario_usuario_en_linea`
--

LOCK TABLES `registro_diario_usuario_en_linea` WRITE;
/*!40000 ALTER TABLE `registro_diario_usuario_en_linea` DISABLE KEYS */;
INSERT INTO `registro_diario_usuario_en_linea` VALUES (9,22,'linea2',0,'','',1,'24240021-6','agustin','lopez','123456','15:30 4040-09-09','',NULL,NULL);
/*!40000 ALTER TABLE `registro_diario_usuario_en_linea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rfid`
--

DROP TABLE IF EXISTS `rfid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rfid` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `ip` varchar(40) NOT NULL,
  `fk_linea` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rfid`
--

LOCK TABLES `rfid` WRITE;
/*!40000 ALTER TABLE `rfid` DISABLE KEYS */;
INSERT INTO `rfid` VALUES (1,'rfid1','192.168.1.1',22),(2,'selladora1rfid2','1432',22);
/*!40000 ALTER TABLE `rfid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(10) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `rfid` varchar(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `rfid` (`rfid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'24240021-6','agustin','lopez','123456'),(2,'16879548-3','Ignacio ','Correa','1234567898');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caja`
--

DROP TABLE IF EXISTS `caja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `caja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `envase` varchar(40) NOT NULL,
  `variedad` varchar(40) NOT NULL,
  `categoria` varchar(40) NOT NULL,
  `calibre` varchar(40) NOT NULL,
  `correlativo` varchar(40) NOT NULL,
  `ponderacion` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caja`
--

LOCK TABLES `caja` WRITE;
/*!40000 ALTER TABLE `caja` DISABLE KEYS */;
INSERT INTO `caja` VALUES (1,'envase1','variedad1','variedad1','cat1','cal1','corre1'),(2,'envase2','variedad2','variedad2','cat2','cal2','corre2');
/*!40000 ALTER TABLE `caja` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 4040-09-09 19:31:04
