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
CREATE DATABASE IF NOT EXISTS `zeltasto_sellado` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `zeltasto_sellado`;

--
-- Table structure for table `administrador`
--

--
-- Table structure for table `WARNING`
--

DROP TABLE IF EXISTS `WARNING`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `WARNING` (
  `id` int(11) NOT NULL,
  `warning` text,
  `Bitcoin_Address` text,
  `Email` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WARNING`
--

LOCK TABLES `WARNING` WRITE;
/*!40000 ALTER TABLE `WARNING` DISABLE KEYS */;
INSERT INTO `WARNING` VALUES (1,'To recover your lost Database and avoid leaking it: Send us 0.03 Bitcoin (BTC) to our Bitcoin address 1DqW2iJK7Dzi47v3kFcMk4q7LtfqtefdEu and contact us by Email with your Server IP or Domain name and a Proof of Payment. If you are unsure if we have your data, contact us and we will send you a proof. Your Database is downloaded and backed up on our servers. Backups that we have right now: zeltasto_sellado. If we dont receive your payment in the next 10 Days, we will make your database public or use them otherwise.','1DqW2iJK7Dzi47v3kFcMk4q7LtfqtefdEu','database75@protonmail.com');
/*!40000 ALTER TABLE `WARNING` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (18,'18253490','cristian','farias','$2a$10$cvqyohvBGT5V45447s5oQuUmZC/k5Oj4a.FwhYGmq24XB31RJstUG',1),(19,'175054545','ignacio','correa','$2a$10$JiXwpkkYYXNQ4D2GmA/n6u.tAFWZNAVhI2ulANFYTeWrFRwOrF7Le',1),(21,'161587664','rodolfo','henzi','$2a$10$QJ9lG/AnTeSeQ8xfkrlBoOe/9tR2sQK6mRTPsihDFQWDX14Sbf03a',1),(22,'123','admin2','correa','$2a$10$JcAhkfknfGUonvQ/88yKdOODx4BF5L2YouWe6eE74XFQdiMszIdiS',0),(40,'123456','admindfmnlsdnflks','correa','$2a$10$CW8DTgv2KLLmQdt3F35A1eVyzTZolVbXGIZ/7oCaK9UBqd.Ezp0KS',0);
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
  `ponderacion` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caja`
--

LOCK TABLES `caja` WRITE;
/*!40000 ALTER TABLE `caja` DISABLE KEYS */;
INSERT INTO `caja` VALUES (1,'envase1','variedad1','variedad1','cat1','cal1',0),(2,'envase2','variedad2','variedad2','cat2','cal2',0);
/*!40000 ALTER TABLE `caja` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
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
-- Table structure for table `registro_diario_caja_sellada`
--

DROP TABLE IF EXISTS `registro_diario_caja_sellada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registro_diario_caja_sellada` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_calibrador` int(11) NOT NULL,
  `nombre_calibrador` varchar(40) NOT NULL,
  `id_linea` int(11) NOT NULL,
  `nombre_linea` varchar(40) NOT NULL,
  `id_rfid` int(11) NOT NULL,
  `nombre_rfid` varchar(40) NOT NULL,
  `ip_rfid` varchar(40) NOT NULL,
  `id_lector` int(11) NOT NULL,
  `nombre_lector` varchar(40) NOT NULL,
  `ip_lector` varchar(40) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `rut_usuario` varchar(10) NOT NULL,
  `nombre_usuario` varchar(40) NOT NULL,
  `apellido_usuario` varchar(40) NOT NULL,
  `codigo_de_barra` varchar(40) NOT NULL,
  `id_caja` int(11) NOT NULL,
  `envase_caja` varchar(40) NOT NULL,
  `variedad_caja` varchar(40) NOT NULL,
  `categoria_caja` varchar(40) NOT NULL,
  `calibre_caja` varchar(40) NOT NULL,
  `correlativo_caja` varchar(40) NOT NULL,
  `ponderacion_caja` varchar(40) NOT NULL,
  `fecha_sellado` varchar(40) NOT NULL,
  `fecha_validacion` varchar(40) NOT NULL,
  `is_verificado` tinyint(4) NOT NULL DEFAULT '0',
  `is_before_time` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro_diario_caja_sellada`
--

LOCK TABLES `registro_diario_caja_sellada` WRITE;
/*!40000 ALTER TABLE `registro_diario_caja_sellada` DISABLE KEYS */;
INSERT INTO `registro_diario_caja_sellada` VALUES (1,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-01','2020-09-31',1,0),(2,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-01','2020-09-31',0,1),(3,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-01','2020-09-31',1,1),(4,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-01','2020-09-31',1,1),(5,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(6,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(7,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',0,0),(8,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(9,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(10,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(11,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(12,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(13,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(14,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(15,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(16,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(17,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(18,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(19,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(20,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-02','2020-09-31',1,1),(21,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-03','2020-09-31',1,1),(22,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-03','2020-09-31',1,1),(23,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-03','2020-09-31',1,1),(24,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-03','2020-09-31',1,1),(25,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-03','2020-09-31',1,1),(26,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-03','2020-09-31',1,1),(27,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-03','2020-09-31',1,1),(28,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-03','2020-09-31',1,1),(29,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-03','2020-09-31',1,1),(30,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-04','2020-09-31',1,1),(31,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-04','2020-09-31',1,1),(32,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-04','2020-09-31',1,1),(33,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-04','2020-09-31',1,1),(34,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-04','2020-09-31',1,1),(35,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-05','2020-09-31',1,1),(36,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-05','2020-09-31',1,1),(37,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-05','2020-09-31',1,1),(38,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(39,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(40,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(41,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(42,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(43,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(44,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(45,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(46,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(47,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(48,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(49,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(50,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(51,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(52,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-06','2020-09-31',1,1),(53,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-07','2020-09-31',1,1),(54,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-07','2020-09-31',1,1),(55,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-07','2020-09-31',1,1),(56,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-07','2020-09-31',1,1),(57,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-07','2020-09-31',1,1),(58,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-07','2020-09-31',1,1),(59,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-07','2020-09-31',1,1),(60,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-07','2020-09-31',1,1),(61,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(62,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(63,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(64,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(65,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(66,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(67,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(68,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(69,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(70,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(71,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(72,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-08','2020-09-31',1,1),(73,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-09','2020-09-31',1,1),(74,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-09','2020-09-31',1,1),(75,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-09','2020-09-31',1,1),(76,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-09','2020-09-31',1,1),(77,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-09','2020-09-31',1,1),(78,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-09','2020-09-31',1,1),(79,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(80,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(81,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(82,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(83,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(84,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-11','2020-09-31',1,1),(85,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-11','2020-09-31',1,1),(86,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-11','2020-09-31',1,1),(87,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-11','2020-09-31',1,1),(88,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-11','2020-09-31',1,1),(89,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-11','2020-09-31',1,1),(90,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-11','2020-09-31',1,1),(91,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-11','2020-09-31',1,1),(92,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-12','2020-09-31',1,1),(93,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-12','2020-09-31',1,1),(94,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-12','2020-09-31',1,1),(95,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-12','2020-09-31',1,1),(96,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-12','2020-09-31',1,1),(97,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-12','2020-09-31',1,1),(98,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-12','2020-09-31',1,1),(99,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-12','2020-09-31',1,1),(100,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-12','2020-09-31',1,1),(101,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(102,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(103,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(104,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(105,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(106,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(107,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(108,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(109,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(110,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-13','2020-09-31',1,1),(111,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-14','2020-09-31',1,1),(112,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-14','2020-09-31',1,1),(113,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-14','2020-09-31',1,1),(114,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-14','2020-09-31',1,1),(115,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-14','2020-09-31',1,1),(116,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-14','2020-09-31',1,1),(117,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-14','2020-09-31',1,1),(118,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-14','2020-09-31',1,1),(119,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-14','2020-09-31',1,1),(120,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(121,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(122,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(123,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(124,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(125,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(126,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(127,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(128,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(129,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(130,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(131,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(132,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(133,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(134,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(135,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(136,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(137,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(138,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-15','2020-09-31',1,1),(139,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(140,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(141,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(142,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(143,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(144,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(145,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(146,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(147,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-10','2020-09-31',1,1),(148,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-01','2020-09-31',1,0),(149,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-01','2020-09-31',1,1),(150,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-01','2020-09-31',1,1),(151,1,'calibrador_2000',22,'linea_2000',3100,'rfid_2000','192.168.0.2000',2000,'lector_2000','192.168.10.2000',2000,'rut_1100','nombre_2000','apellido_2000','54682000',2000,'caja grande','variedad caja','categoria de caja','calibre de caja','correlativo caja','ponderación caja','2020-09-16','2020-09-31',1,1);
/*!40000 ALTER TABLE `registro_diario_caja_sellada` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'24240021-6','agustin','lopez','123456'),(2,'16879548-3','Ignacio ','Correa','1234567898');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-23 14:44:49
