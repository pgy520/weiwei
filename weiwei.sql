/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.7.14 : Database - myjob
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`myjob` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `myjob`;

/*Table structure for table `carts` */

DROP TABLE IF EXISTS `carts`;

CREATE TABLE `carts` (
  `carid` int(11) NOT NULL AUTO_INCREMENT,
  `carnumber` int(11) NOT NULL,
  `proid` int(11) NOT NULL,
  `proname` varchar(500) NOT NULL,
  `prostore` varchar(50) DEFAULT NULL,
  `oldproprice` varchar(10) DEFAULT NULL,
  `proprice` varchar(10) NOT NULL,
  `proimg` varchar(500) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `prostatus` int(11) DEFAULT NULL,
  `uid` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`carid`)
) ENGINE=InnoDB AUTO_INCREMENT=220 DEFAULT CHARSET=utf8;

/*Data for the table `carts` */

insert  into `carts`(`carid`,`carnumber`,`proid`,`proname`,`prostore`,`oldproprice`,`proprice`,`proimg`,`description`,`prostatus`,`uid`) values (204,2,7,'索菲亚旗舰店官方店 整体衣柜定制衣柜 经典百叶带顶柜衣柜',NULL,NULL,'￥999.00','images/band07.jpg',NULL,1,'15674529828'),(215,3,6,'索菲亚整体衣柜马赛大百叶 定制衣柜 大衣柜推拉门移门定做',NULL,NULL,'￥1599.00','images/band06.jpg',NULL,1,'15674529828'),(216,4,3,'扬子地板 超实木健康系列（真木纹型） 古堡灰橡 木地板 如',NULL,NULL,'￥193.33','images/band03.jpg',NULL,1,'15634343434'),(217,4,1,'瑞肯橱柜 榻榻米 白色 平方',NULL,NULL,'￥198.00','images/band01.jpg',NULL,1,'15634343434'),(218,6,2,'大将军陶瓷 客厅 全抛釉地砖 MQ8806P 800*800',NULL,NULL,'￥193.33','images/band02.png',NULL,1,'18844444444'),(219,6,1,'瑞肯橱柜 榻榻米 白色 平方',NULL,NULL,'￥198.00','images/band01.jpg',NULL,1,'18844444444');

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `proid` int(11) NOT NULL AUTO_INCREMENT,
  `proname` varchar(50) NOT NULL,
  `proprice` varchar(10) NOT NULL,
  `proimg` varchar(500) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `prostatus` int(11) DEFAULT NULL,
  `oldproprice` varchar(10) DEFAULT NULL,
  `proimgbig` varchar(500) DEFAULT NULL,
  `prostore` varchar(50) DEFAULT NULL,
  `prolazy` varchar(500) DEFAULT NULL,
  `prohot` varchar(300) DEFAULT NULL,
  `prosave` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`proid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

/*Data for the table `products` */

insert  into `products`(`proid`,`proname`,`proprice`,`proimg`,`description`,`prostatus`,`oldproprice`,`proimgbig`,`prostore`,`prolazy`,`prohot`,`prosave`) values (1,'瑞肯橱柜 榻榻米 白色 平方','￥198.00','images/band01.jpg',NULL,1,'￥258.00','image_shopping/img1/proimg.jpg','瑞肯橱柜','imgshow01.jpg,imgshow02.jpg,imgshow03.jpg,imgshow04.jpg,imgshow05.jpg,imgshow06.jpg,imgshow07.jpg,imgshow08.jpg,imgshow09.jpg,imgshow10.jpg,imgshow11.jpg,imgshow12.jpg,imgshow13.jpg','listhot01.jpg,listhot02.jpg,listhot03.jpg,listhot04.jpg,listhot05.jpg','listsave01.jpg,listsave02.jpg,listsave03.jpg,listsave04.jpg,listsave05.jpg'),(2,'大将军陶瓷 客厅 全抛釉地砖 MQ8806P 800*800','￥193.33','images/band02.png',NULL,1,'￥230.00','image_shopping/img2/proimg.png','大将军陶瓷','imgshow01.jpg,imgshow02.jpg,imgshow03.jpg,imgshow04.jpg,imgshow05.jpg,imgshow06.jpg,imgshow07.jpg,imgshow08.jpg','listhot01.png,listhot02.png,listhot03.png,listhot04.jpg,listhot05.jpg','listsave01.jpg,listsave02.png,listsave03.png,listsave04.png,listsave05.jpg'),(3,'扬子地板 超实木健康系列（真木纹型） 古堡灰橡 木地板 如','￥193.33','images/band03.jpg',NULL,1,'¥199.00','image_shopping/img3/proimg.jpg','扬子地板','imgshow01.jpg,imgshow02.jpg,imgshow03.jpg,imgshow04.jpg','listhot01.jpg,listhot02.jpg,listhot03.jpg,listhot04.jpg,listhot05.jpg','listsave01.jpg,listsave02.jpg,listsave03.jpg,listsave04.jpg,listsave05.jpg'),(4,'龙凤床垫 天然无甲醛 椰棕床垫 乳胶特硬 东方明珠系列','￥3752.00','images/band04.jpg',NULL,1,'￥5360.00','image_shopping/img4/proimg.jpg','龙凤床垫','imgshow01.jpg,imgshow02.jpg,imgshow03.jpg,imgshow04.jpg,imgshow05.jpg,imgshow06.jpg,imgshow07.jpg','listhot01.jpg,listhot02.jpg,listhot03.jpg,listhot04.jpg,listhot05.jpg','listsave01.jpg,listsave02.jpg,listsave03.jpg,listsave04.jpg,listsave05.jpg'),(5,'瀚庭 全棉 夏凉被 空调被 爱丽丝 蓝色 2.0x2.3m','￥139.00','images/band05.jpg',NULL,1,'￥688.00','image_shopping/img5/proimg.jpg','瀚庭家纺','imgshow01.jpg,imgshow02.jpg,imgshow03.jpg,imgshow04.jpg,imgshow05.jpg,imgshow06.jpg,imgshow07.jpg','listhot01.jpg,listhot02.jpg,listhot03.jpg,listhot04.jpg,listhot05.jpg','listsave01.jpg,listsave02.jpg,listsave03.jpg,listsave04.jpg,listsave05.jpg'),(6,'索菲亚整体衣柜马赛大百叶 定制衣柜 大衣柜推拉门移门定做','￥1599.00','images/band06.jpg',NULL,1,'¥1599.00','image_shopping/img6/proimg.jpg','索菲亚衣柜','imgshow01.jpg,imgshow02.jpg,imgshow03.jpg,imgshow04.jpg,imgshow05.jpg,imgshow06.jpg,imgshow07.jpg,imgshow08.jpg,imgshow09.jpg,imgshow10.jpg,imgshow11.jpg,imgshow12.jpg,imgshow13.jpg,imgshow14.jpg,imgshow15.jpg,imgshow16.jpg,imgshow17.jpg,imgshow18.jpg,imgshow19.jpg,imgshow20.jpg','listhot01.jpg,listhot02.jpg,listhot03.jpg,listhot04.jpg,listhot05.jpg','listsave01.jpg,listsave02.jpg,listsave03.jpg,listsave04.jpg,listsave05.jpg'),(7,'索菲亚旗舰店官方店 整体衣柜定制衣柜 经典百叶带顶柜衣柜','￥999.00','images/band07.jpg',NULL,1,'¥1999.00','image_shopping/img7/proimg.jpg','索菲亚衣柜','imgshow01.jpg,imgshow02.jpg,imgshow03.jpg,imgshow04.jpg,imgshow05.jpg,imgshow06.jpg,imgshow07.jpg,imgshow08.jpg,imgshow09.jpg,imgshow10.jpg,imgshow11.jpg,imgshow12.jpg,imgshow13.jpg,imgshow14.jpg,imgshow15.jpg,imgshow16.jpg,imgshow17.jpg,imgshow18.jpg,imgshow19.jpg,imgshow20.jpg','listhot01.jpg,listhot02.jpg,listhot03.jpg,listhot04.jpg,listhot05.jpg','listsave01.jpg,listsave02.jpg,listsave03.jpg,listsave04.jpg,listsave05.jpg'),(8,'青岛一木 北欧风格 宜家 简约风 实木休闲椅（颜色随机发','￥199.00','images/band08.jpg',NULL,1,'¥399.00','image_shopping/img8/proimg.jpg','青岛一木实木家具','imgshow01.jpg,imgshow02.jpg,imgshow03.jpg,imgshow04.jpg,imgshow05.jpg,imgshow06.jpg','listhot01.jpg,listhot02.jpg,listhot03.jpg,listhot04.jpg,listhot05.jpg','listsave01.jpg,listsave02.jpg,listsave03.jpg,listsave04.jpg,listsave05.jpg'),(9,'青岛一木 北欧系列 全实木 橡木五斗柜','￥2299.00','images/band09.jpg',NULL,1,'',NULL,NULL,NULL,NULL,NULL),(10,'青岛柚至臻 黑胡桃木+桐木 梳妆台 Bn-125801','￥7450.00','images/band10.jpg',NULL,1,'',NULL,NULL,NULL,NULL,NULL),(11,'鼎豪淋浴房 不锈钢两移门 T-W728 平方米','￥1250.00','images/band11.jpg',NULL,1,'',NULL,NULL,NULL,NULL,NULL),(12,'致尚名门 镶嵌工艺玻璃-风景香槟砂金单边套推拉中空铝门','￥2080.00','images/band12.jpg',NULL,1,'',NULL,NULL,NULL,NULL,NULL),(13,'梵瓦伦 枫木实木复合地板 5007 平方米','￥148.00','images/band13.jpg',NULL,1,'',NULL,NULL,NULL,NULL,NULL),(14,'凯纳豪迪 柚木 移门衣柜 2012-A','￥9800.00','images/band14.jpg',NULL,1,'',NULL,NULL,NULL,NULL,NULL),(15,'蒂思 客厅卧室 背景墙 软包 A-060 如图 1平方米','￥720.00','images/band15.jpg',NULL,1,'',NULL,NULL,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
