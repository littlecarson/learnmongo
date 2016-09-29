1.使用包管理系统导入公钥：
	Ubuntu软件包管理工具(即dpkg和apt)通过要求分销商签订包GPG密钥确保方案的一致性和真实性。使用以下命令来导入MongoDB公共GPG密钥
	*mongodb2.6版
		sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
2.创建MongoDB清单文件：

          使用下面的命令创建清单文件/etc/apt/sources.list.d/mongodb.list：         

echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list	

echo "deb http://repo.mongodb.com/apt/ubuntu trusty/mongodb-enterprise/stable multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list

echo "deb http://repo.mongodb.com/apt/ubuntu "$(lsb_release -sc)"/mongodb-enterprise/2.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise-2.6.list	

4.更新软件库
sudo apt-get update

5.安装

	sudo apt-get install -y mongodb-enterprise=3.2.7 mongodb-enterprise-server=3.2.7 mongodb-enterprise-shell=3.2.7 mongodb-enterprise-mongos=3.2.7 mongodb-enterprise-tools=3.2.7

	sudo apt-get install -y mongodb-enterprise=2.6.5 mongodb-enterprise-server=2.6.5 mongodb-enterprise-shell=2.6.5 mongodb-enterprise-mongos=2.6.5 mongodb-enterprise-tools=2.6.5


4.Install the MongoDB Enterprise packages.

	You can install either the latest stable version of MongoDB or a specific version of MongoDB.

	Install the latest stable version of MongoDB Enterprise.

	Issue the following command:

	sudo apt-get install -y mongodb-enterprise
	Install a specific release of MongoDB Enterprise.

	To install a specific release, you must specify each component package individually along with the version number, as in the following example:

	sudo apt-get install -y mongodb-enterprise=3.2.7 mongodb-enterprise-server=3.2.7 mongodb-enterprise-shell=3.2.7 mongodb-enterprise-mongos=3.2.7 mongodb-enterprise-tools=3.2.7
	If you only install mongodb-enterprise=3.2.7 and do not include the component packages, the latest version of each MongoDB package will be installed regardless of what version you specified.

6.Pin a specific version of MongoDB Enterprise.

	Although you can specify any available version of MongoDB, apt-get will upgrade the packages when a newer version becomes available. To prevent unintended upgrades, pin the package. To pin the version of MongoDB at the currently installed version, issue the following command sequence:

	echo "mongodb-enterprise hold" | sudo dpkg --set-selections
	echo "mongodb-enterprise-server hold" | sudo dpkg --set-selections
	echo "mongodb-enterprise-shell hold" | sudo dpkg --set-selections
	echo "mongodb-enterprise-mongos hold" | sudo dpkg --set-selections
	echo "mongodb-enterprise-tools hold" | sudo dpkg --set-selections
	Versions of the MongoDB packages before 2.6 use a different repository location. Refer to the version of the documentation appropriate for your MongoDB version.

（源码安装：sudo apt-get install libgssapi-krb5-2 libsasl2-2 libssl1.0.0 libstdc++6 snmp）


8.Run MongoDB Enterprise

	The MongoDB instance stores its data files in /var/lib/mongodb
	its log files in /var/log/mongodb by default, and runs using the mongodb user account.
	We can specify alternate log and data file directories in /etc/mongod.conf. See systemLog.path and storage.dbPath for additional information.
	We you change the user that runs the MongoDB process, you must modify the access control rights to the /var/lib/mongodb and /var/log/mongodb directories to give this user access to these directories.

##Run MongoDB Enterprise

1.Start MongoDB.

	Issue the following command to start mongod:

	sudo service mongod start

2.Verify that MongoDB has started successfully by

	sudo cat /var/log/mongodb/mongod.log
	Verify that the mongod process has started successfully by checking the contents of the log file at /var/log/mongodb/mongod.log for a line reading

	2016-06-29T02:49:03.773+0000 I NETWORK  [initandlisten] waiting for connections on port 27017

3.Stop MongoDB.

	As needed, you can stop the mongod process by issuing the following command:

	sudo service mongod stop
4.Restart MongoDB.
	
	sudo service mongod restart
5.Begin using MongoDB.

	To help you start using MongoDB, MongoDB provides Getting Started Guides in various driver editions. See Getting Started for the available editions.

	Before deploying MongoDB in a production environment, consider the Production Notes document.

	Later, to stop MongoDB, press Control+C in the terminal where the mongod instance is running.


##Uninstall MongoDB

To completely remove MongoDB from a system, you must remove the MongoDB applications themselves, the configuration files, and any directories containing data and logs. The following section guides you through the necessary steps.

WARNING
This process will completely remove MongoDB, its configuration, and all databases. This process is not reversible, so ensure that all of your configuration and data is backed up before proceeding.
1
Stop MongoDB.

Stop the mongod process by issuing the following command:

sudo service mongod stop
2
Remove Packages.

Remove any MongoDB packages that you had previously installed.

sudo apt-get purge mongodb-enterprise*
3
Remove Data Directories.

Remove MongoDB databases and log files.

sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb



#cenos7 编译源码安装mongodb
Install MongoDB Enterprise From Tarball¶

While you should use the .rpm packages as previously described, you may also manually install MongoDB using the tarballs.

First you must install any dependencies as appropriate:

Version 5
yum install perl cyrus-sasl cyrus-sasl-plain cyrus-sasl-gssapi krb5-libs \
            lm_sensors net-snmp openssl popt rpm-libs tcp_wrappers zlib
Version 6
yum install cyrus-sasl cyrus-sasl-plain cyrus-sasl-gssapi krb5-libs \
            net-snmp openssl
Version 7
yum install cyrus-sasl cyrus-sasl-plain cyrus-sasl-gssapi krb5-libs \
            lm_sensors-libs net-snmp-agent-libs net-snmp openssl rpm-libs \
            tcp_wrappers-libs


1.download sources of mongondb，github上下载好源码包，mongon-r3.2.7.zip解压
2.cd mongo-r3.2.7执行scons all