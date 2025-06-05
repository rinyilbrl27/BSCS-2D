-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: record_list
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `student-subjects`
--

DROP TABLE IF EXISTS `student-subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student-subjects` (
  `studentid` varchar(50) NOT NULL,
  `subject-code` varchar(50) NOT NULL,
  PRIMARY KEY (`studentid`,`subject-code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student-subjects`
--

LOCK TABLES `student-subjects` WRITE;
/*!40000 ALTER TABLE `student-subjects` DISABLE KEYS */;
INSERT INTO `student-subjects` VALUES ('Stud-04141-19-2356','DC105'),('Stud-04141-23-0334','CC101'),('Stud-04141-23-0334','CC102'),('Stud-04141-23-0334','CC103'),('Stud-04141-23-0334','CC104'),('Stud-04141-23-0336','CC101'),('Stud-04141-23-0336','CC102'),('Stud-04141-23-0339','CC101'),('Stud-04141-23-0339','CC102'),('Stud-04141-23-0339','CC103'),('Stud-04141-23-0339','CC104'),('Stud-04141-23-1601','CC101'),('Stud-04141-23-1601','CC102'),('Stud-04141-23-1601','CC103'),('Stud-04141-23-1601','CC104');
/*!40000 ALTER TABLE `student-subjects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-05 20:47:23
